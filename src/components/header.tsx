'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "public/logo-panaderia-F.png"
import { useState, useEffect, useRef } from "react"
import HamburgerButton from "./hamburger-button"
import SearchBar from "./search-bar"
import MobileNav from "./mobile-nav"
import DesktopCategories from "./desktop-categories"
import ContactButton from "./contact-button"


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
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={150}
            className="p-2 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Search Bar - Centro */}
        <SearchBar 
          placeholder="Buscar panes, pasteles..."
          onSearch={handleSearch}
          className="w-120 hidden pt-3 md:block"
        />

        {/* Contáctanos - Derecha */}
        <ContactButton />

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
      <div>
      {/* desktop categories */}
        <DesktopCategories />
      
      {/* mobile search bar */}
        <SearchBar 
          placeholder="Buscar productos..."
          onSearch={handleSearch}
          className="md:hidden p-4"
        />
      </div>
    </header>
  );
}