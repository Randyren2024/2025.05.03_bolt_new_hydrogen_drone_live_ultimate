import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled = false }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
    // Here you would implement actual language switching functionality
  };
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
      >
        <Globe size={20} className="mr-1" />
        <span className="uppercase text-sm">{currentLanguage}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
          <button 
            onClick={() => toggleLanguage('en')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            English
          </button>
          <button 
            onClick={() => toggleLanguage('zh')}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            中文
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;