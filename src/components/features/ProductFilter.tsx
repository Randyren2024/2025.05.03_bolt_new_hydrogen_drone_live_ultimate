import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

interface ProductFilterProps {
  filterGroups: FilterGroup[];
  onFilterChange: (filters: Record<string, string[]>) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ filterGroups, onFilterChange }) => {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    filterGroups.reduce((acc, group) => ({...acc, [group.id]: true}), {})
  );
  
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  
  const toggleGroup = (groupId: string) => {
    setExpandedGroups({
      ...expandedGroups,
      [groupId]: !expandedGroups[groupId]
    });
  };
  
  const handleFilterChange = (groupId: string, optionId: string) => {
    const currentGroupFilters = selectedFilters[groupId] || [];
    let newGroupFilters: string[];
    
    if (currentGroupFilters.includes(optionId)) {
      newGroupFilters = currentGroupFilters.filter(id => id !== optionId);
    } else {
      newGroupFilters = [...currentGroupFilters, optionId];
    }
    
    const newFilters = {
      ...selectedFilters,
      [groupId]: newGroupFilters
    };
    
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Products</h3>
      
      <div className="space-y-4">
        {filterGroups.map((group) => (
          <div key={group.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <button
              className="flex justify-between items-center w-full text-left font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => toggleGroup(group.id)}
            >
              {group.name}
              {expandedGroups[group.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            
            {expandedGroups[group.id] && (
              <div className="mt-2 space-y-2 pl-1">
                {group.options.map((option) => (
                  <label key={option.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={(selectedFilters[group.id] || []).includes(option.id)}
                      onChange={() => handleFilterChange(group.id, option.id)}
                      className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;