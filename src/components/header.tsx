'use client'
import Image from "next/image"
import logo from "public/logo-panaderia-F.png"
import { useState, useEffect, useRef } from "react"
import HamburgerButton from "./hamburger-button"
import SearchBar from "./search-bar"
import MobileNav from "./mobile-nav"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // TODO: Implement search functionality
    // This could navigate to a search results page or filter products
  };

  {/* for closing mobile navbar when clicking outside */}
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return(
    <header>
      {/* primera fila del header */}
      {/* Logo y nombre */}
      <div className="flex justify-between">
        <Image
          src={logo}
          alt="logo"
          width={120}
          className="p-2"
        />

        {/* Search Bar - Centro */}
        <SearchBar 
          placeholder="Buscar panes, pasteles..."
          onSearch={handleSearch}
          className="w-96 hidden pt-3 md:block"
        />

        {/* Contáctanos - Derecha */}
        <button
          className="md:items-center space-x-2 px-4 py-2 cursor-pointer font-medium hidden md:flex"
          onClick={() => {
            // TODO: Implement contact functionality
            console.log("Contáctanos clicked");
          }}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
            />
          </svg>
          <span>Contáctanos</span>
        </button>



        {/* mobile navbar button */}
        <HamburgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          buttonRef={buttonRef}
        />

        {/* mobile navbar */}
        {isOpen && <MobileNav menuRef={menuRef} />}
      </div>

      {/* segunda fila del header */}
      {/* desktop categories */}
      <div className="bg-amber-700 hidden md:block">
        <ul className="flex justify-center space-x-8 py-3">
          <li>
            <a href="#" className="text-white hover:text-amber-200 transition-colors font-medium">
              Panes
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-amber-200 transition-colors font-medium">
              Pasteles
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-amber-200 transition-colors font-medium">
              Abarrotes
            </a>
          </li>
        </ul>
      </div>
      
      {/* mobile search bar */}
      <SearchBar 
        placeholder="Buscar productos..."
        onSearch={handleSearch}
        className="md:hidden p-4"
      />


    </header>
  );
}