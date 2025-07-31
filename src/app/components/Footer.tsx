import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-black p-10 bg-slate-100">
      <nav>
        <h6 className="footer-title">Products</h6>
        <a className="link link-hover">Wet Wipes</a>
        <a className="link link-hover">Tissue</a>
        <a className="link link-hover">Detergent</a>
        <a className="link link-hover">Home Supplies</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Terms of Service</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/color/48/shopee.png"
              alt="shopee"
            />
          </a>
          <a>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/48/tiktok--v1.png"
              alt="tiktok--v1"
            />
          </a>
          <a>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/fluency/48/instagram-new.png"
              alt="instagram-new"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
};
