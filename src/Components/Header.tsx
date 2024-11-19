// /components/Header.tsx
'use client'
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link'; // Import Link from next/link for routing
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: FC = () => {
  const navigation = [
    { name: 'Home', href: '/', isActive: true },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-md py-5 sm:px-6 h-[60px] sticky top-0 z-50">
      <div className="flex items-center justify-between h-full container mx-auto md:px-8">
        {/* Left section with clickable logo and links */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2"> {/* Combined logo and text as clickable */}
              <Image
                src="/logo.jpg" // Use logo.jpg
                alt="OneLot Logo"
                width={50}       
                height={40}      
                className="object-contain"
              />
              <span className="font-bold text-black text-lg">OneLot</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-bold text-base ${item.isActive ? 'text-dark-blue' : 'text-gray-700 hover:text-blue-500'}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right section with Login and Get Started button */}
        <div className="hidden md:flex items-center space-x-4 pr-2"> {/* Added pr-2 for right padding */}
          <a
            href="/login"
            className="font-bold text-base text-gray-700 hover:text-blue-500"
          >
            Login
          </a>
          <a
            href="/get-started"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold"
          >
            Get Started
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-gray-700 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden absolute top-16 left-0 w-full h-screen bg-white py-4 flex flex-col items-center space-y-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-bold text-base ${item.isActive ? 'text-dark-blue' : 'text-gray-700 hover:text-blue-500'}`} // Updated hover color to blue
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col items-center justify-center space-y-4">
              <a
                href="/login"
                className="font-bold text-base text-gray-700 hover:text-blue-500"
              >
                Login
              </a>
              <a
                href="/get-started"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-bold"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
