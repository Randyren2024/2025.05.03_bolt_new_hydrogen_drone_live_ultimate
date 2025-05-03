import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Search } from 'lucide-react';
import { Link } from '../ui/Link';
import LanguageSwitcher from '../features/LanguageSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-blue-600 mr-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" stroke="#0F62FE" strokeWidth="2"/>
                <path d="M15 20H25M20 15V25" stroke="#0F62FE" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              HiTS
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-medium`}>
              <ul className="flex space-x-8">
                <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
                <li><Link href="/products" className="hover:text-blue-500 transition-colors">Products</Link></li>
                <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <button className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <Search size={20} />
              </button>
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="text-gray-800 font-medium">
            <ul className="space-y-4">
              <li><Link href="/" className="block hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="/products" className="block hover:text-blue-500 transition-colors">Products</Link></li>
              <li><Link href="/about" className="block hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="block hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <div className="mt-4 flex items-center">
            <LanguageSwitcher isScrolled={true} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
