'use client'
import React from "react";
import PhoneIcon from "./icons/phone-icon";

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
        {/* Categorías de Productos */}
        <li>
          <a href="/panes" className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium">
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
        
        {/* Separador */}
        <li className="border-t border-gray-200 my-1"></li>
        
        {/* Sección de Contacto */}
        <li>
          <a href="/contacto" className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors font-medium">
            <div className="flex items-center space-x-3">
              <PhoneIcon />
              <span>Contáctanos</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav; 