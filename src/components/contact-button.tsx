'use client'
import React from "react";
import Link from "next/link";
import PhoneIcon from "./icons/phone-icon";

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  className = ""
}) => {
  return (
    <Link
      href="/contacto"
      className={`md:items-center space-x-2 px-4 py-2 cursor-pointer font-medium hidden md:flex ${className}`}
    >
      <PhoneIcon />
      <span>Contáctanos</span>
    </Link>
  );
};

export default ContactButton; 