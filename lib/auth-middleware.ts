// lib/auth-middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './jwt';

export function withAuth(handler: Function, options?: { requireAdmin?: boolean }) {
  return async (request: NextRequest, ...args: any[]) => {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid authorization header' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Check admin role for dangerous operations
    if (options?.requireAdmin && payload.role !== 'admin') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    // Add user info to request
    (request as any).user = payload;
    
    return handler(request, ...args);
  };
}