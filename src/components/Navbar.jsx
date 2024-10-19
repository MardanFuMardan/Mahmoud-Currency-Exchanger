import React, { useState } from 'react';
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = ({ toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light-neutral100 dark:bg-dark-neutral100 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* استخدام items-center لمحاذاة العناصر */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-dark-neutral200 dark:text-light-neutral200">
              Mahmoud Currency Exchanger
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-4"> {/* التأكد من أن القائمة والأيقونات في نفس المستوى */}
            <a href="#home" className="text-gray-800 dark:text-white hover:text-gray-500">Home</a>
            <a href="#converter" className="text-gray-800 dark:text-white hover:text-gray-500">Currency Converter</a>
            <a href="#multi-converter" className="text-gray-800 dark:text-white hover:text-gray-500">Multi-Currency</a>
            <a href="#about" className="text-gray-800 dark:text-white hover:text-gray-500">About</a>
            <a href="#why-us" className="text-gray-800 dark:text-white hover:text-gray-500">Why Us</a>
            <a href="#contact" className="text-gray-800 dark:text-white hover:text-gray-500">Contact</a>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="focus:outline-none">
              <MoonIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <button onClick={toggleMenu} className="md:hidden focus:outline-none">
              <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* القائمة الخاصة بالـ Burger Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200">Home</a>
          <a href="#converter" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200">Currency Converter</a>
          <a href="#multi-converter" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200">Multi-Currency</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200">About</a>
          <a href="#why-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200">Why Us</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
