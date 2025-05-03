import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement actual search functionality
    console.log('Searching for:', searchTerm);
  };
  
  return (
    <div className="relative">
      {isExpanded ? (
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoFocus
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors"
          >
            <Search size={20} />
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="p-2 hover:bg-blue-100 rounded-full transition-colors"
        >
          <Search size={20} className="text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default ProductSearch;