'use client'
import React from "react";

interface MobileNavProps {
  menuRef: React.RefObject<HTMLElement | null>;
}

const MobileNav: React.FC<MobileNavProps> = ({ menuRef }) => {
  return (
    <nav 
      ref={menuRef}
      className="absolute right-0 top-14 md:hidden bg-white shadow-lg border border-gray-200 rounded-lg min-w-48 z-50"
    >
      <ul className="py-2">
        <li>
                  <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium">
          Panes
        </a>
      </li>
      <li>
        <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium">
          Pasteles
        </a>
      </li>
      <li>
        <a href="#" className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium">
          Abarrotes
        </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav; 