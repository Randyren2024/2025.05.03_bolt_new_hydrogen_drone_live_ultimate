import React from 'react';
import { Link } from '../ui/Link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* Placeholder for HiTS logo */}
              <div className="text-blue-400 mr-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" stroke="#3B82F6" strokeWidth="2"/>
                  <path d="M15 20H25M20 15V25" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-white">HiTS</span>
            </div>
            <p className="text-gray-400 mb-6">
              The original innovator to develop air-cooled hydrogen fuel cell systems and the first inventor of air-cooled hydrogen fuel cells for drones in China.
            </p>
            {/* Removed social media links as not in PDF */}
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
              {/* Keeping blog link for now */}
              <li><Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/hydrogen-drones" className="text-gray-400 hover:text-blue-400 transition-colors">Hydrogen-Powered Drones</Link></li>
              <li><Link href="/products/lithium-drones" className="text-gray-400 hover:text-blue-400 transition-colors">Lithium Battery Drone Series</Link></li>
              {/* Can add more specific product category links later if needed */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">3/F, Bldg. 2, 602 Tongpu Rd., Putuo Dist., Shanghai 200062, China</span>
              </li>
              <li className="flex">
                <Phone className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-400">+86-21-31165822</span>
              </li>
              {/* Email not provided in PDF, omitting for now */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} HiTS. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-500">
                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
