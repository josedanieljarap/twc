'use client'
import React from "react";
import PhoneIcon from "./icons/phone-icon";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  onClick,
  className = ""
}) => {
  return (
    <a
      href="/contacto"
      className={`md:items-center space-x-2 px-4 py-2 cursor-pointer font-medium hidden md:flex ${className}`}
    >
      <PhoneIcon />
      <span>Contáctanos</span>
    </a>
  );
};

export default ContactButton; 