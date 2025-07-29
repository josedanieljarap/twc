'use client'
import React from "react";

const DesktopCategories: React.FC = () => {
    return (
        <ul className="md:flex justify-center space-x-8 py-3 bg-gray-800 hidden mb-3">
            <li>
                        <a href="/panes" className="text-white hover:text-amber-200 transition-colors font-medium">
          Panes
        </a>
            </li>
            <li>
                <a href="#" className="text-white hover:text-amber-200 transition-colors font-medium">
                    Pasteles
                </a>
            </li>
        </ul>
    );
};

export default DesktopCategories; 
