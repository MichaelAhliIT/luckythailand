import { useState } from "react";
import { AlignLeft, X } from "lucide-react";

interface PopupSidebarProps {
  category: string;
  setCategory: (cat: string) => void;
}

const luckyCleanCategory: Record<string, string> = {
  detergent: "Detergent",
  dishwashing: "Dishwashing Liquid",
  floor: "Floor Liquid",
  garbage: "Garbage Bag",
};

const luckyCareCategory: Record<string, string> = {
  tissue: "Tissue",
  softener: "Softener",
  cotton: "Cotton",
};

export default function PopupSidebar({ category, setCategory }: PopupSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const handleSelect = (key: string) => {
    setCategory(key);
    setIsOpen(false);
  };

  return (
    <div className="relative flex md:hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="flex top-4 left-4 p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500 z-10"
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
              {Object.entries(luckyCleanCategory).map(([key, label]) => (
                <li key={key}>
                  <button
                    onClick={() => handleSelect(key)}
                    className={`block w-full text-left p-2 rounded-md hover:bg-gray-200 ${
                      category === key ? "bg-gray-200 font-bold" : ""
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="bg-[#BF0004] p-3">
                <h1 className="text-white">Lucky Care</h1>
              </li>
              {Object.entries(luckyCareCategory).map(([key, label]) => (
                <li key={key}>
                  <button
                    onClick={() => handleSelect(key)}
                    className={`block w-full text-left p-2 rounded-md hover:bg-gray-200 ${
                      category === key ? "bg-gray-200 font-bold" : ""
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}