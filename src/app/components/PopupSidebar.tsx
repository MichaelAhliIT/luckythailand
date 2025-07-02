import { useState } from "react";
import { AlignLeft, Menu, X } from "lucide-react";

export default function PopupSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex md:hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="flex top-4 left-4 p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500 z-30"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <AlignLeft size={24} color="#BF0004" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Products</h2>
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <X size={24} className="text-gray-800" />
            </button>
          </div>

          <nav>
            <ul className="space-y-2">
              <li className="bg-[#BF0004] p-3">
                <h1 className="text-white">Lucky Clean</h1>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Detergent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Dishwashing Liquid
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Floor Liquid
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Garbage Bag
                </a>
              </li>
              <li className="bg-[#BF0004] p-3">
                <h1 className="text-white">Lucky Care</h1>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Tissue
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Softener
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md text-gray-800 hover:bg-gray-200"
                >
                  Cotton
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
