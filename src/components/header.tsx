'use client'

import { useState, useEffect, useRef } from "react"


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
        <div className="bg-green-200">
          logo y nombre
        </div>

        {/* desktop search bar*/}
        <div className="bg-green-500 hidden md:block">
          desktop search bar
        </div>

        {/* mobile navbar button */}
        <button 
          ref={buttonRef}
          className="bg-yellow-500 md:hidden" onClick={() => setIsOpen(!isOpen)}
        >
          boton de mobile navbar
        </button>

        {/* mobile navbar */}
        {isOpen && (
          <nav 
            ref={menuRef}
            className="bg-yellow-200 absolute right-0 top-6 md:hidden"
          >
            <ul>
              <li>category one</li>
              <li>category two</li>
              <li>category three</li>
              <li className="bg-purple-200">desktop navbar</li>
            </ul>
          </nav>
        )}

        {/* desktop navbar */}
        <nav className="bg-purple-200 hidden md:block">
          deskop navbar
        </nav>
      </div>

      {/* segunda fila del header */}
      {/* desktop categories */}
      <div className="bg-blue-500 hidden md:block">
        <ul className="flex justify-between">
          <li>category one</li>
          <li>category two</li>
          <li>category three</li>
        </ul>
      </div>
      
      {/* mobile search bar */}
      <div className="bg-green-500 md:hidden">
        mobile search bar
      </div>


    </header>
  );
}