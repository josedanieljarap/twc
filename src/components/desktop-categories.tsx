'use client'
import React from "react";
import Link from "next/link";

const DesktopCategories: React.FC = () => {
    return (
        <ul className="md:flex justify-center space-x-8 py-3 bg-gray-800 hidden mb-3">
            <li>
                <Link href="/panes" className="text-white hover:text-amber-200 transition-colors font-medium">
                    Panes
                </Link>
            </li>
            <li>
                <Link href="/pasteles" className="text-white hover:text-amber-200 transition-colors font-medium">
                    Pasteles
                </Link>
            </li>
        </ul>
    );
};

export default DesktopCategories; 
