import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick, buttonRef }) => (
  <button
    ref={buttonRef}
    className="cursor-pointer md:hidden p-4"
    onClick={onClick}
    aria-label="Toggle menu"
    type="button"
  >
    {/* Línea 1 */}
    <div
      className={`h-1 w-6 bg-black rounded-full transition-transform relative
      ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}
    />
    {/* Línea 2 */}
    <div
      className={`mt-1 h-1 w-6 bg-black rounded-full transition-all  
      ${isOpen ? 'opacity-0' : ''}`}
    />
    {/* Línea 3 */}
    <div
      className={`mt-1 h-1 w-6 bg-black rounded-full transition-transform relative
      ${isOpen ? '-rotate-45 bottom-2' : 'bottom-0'}`}
    />
  </button>
);

export default HamburgerButton;
