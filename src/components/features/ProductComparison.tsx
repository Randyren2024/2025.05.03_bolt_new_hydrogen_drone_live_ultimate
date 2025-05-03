import React from 'react';
import { X, Check } from 'lucide-react';
import Button from '../ui/Button';

interface ProductSpec {
  name: string;
  value: string | number | boolean;
}

interface Product {
  id: string;
  name: string;
  image: string;
  specs: Record<string, ProductSpec>;
}

interface ProductComparisonProps {
  products: Product[];
  onRemoveProduct: (productId: string) => void;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ 
  products, 
  onRemoveProduct 
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No products selected for comparison.</p>
        <Button variant="primary" className="mt-4">
          Add Products
        </Button>
      </div>
    );
  }
  
  // Get all unique spec keys across all products
  const allSpecKeys = Array.from(
    new Set(
      products.flatMap(product => Object.keys(product.specs))
    )
  );
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Features
            </th>
            {products.map(product => (
              <th key={product.id} className="px-6 py-3 bg-gray-50 text-center">
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mx-auto">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-contain w-full h-full" 
                    />
                    <button 
                      onClick={() => onRemoveProduct(product.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <h3 className="font-medium text-gray-900 mt-2">{product.name}</h3>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allSpecKeys.map(specKey => (
            <tr key={specKey} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {specKey}
              </td>
              {products.map(product => {
                const spec = product.specs[specKey];
                
                return (
                  <td key={`${product.id}-${specKey}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {spec ? (
                      typeof spec.value === 'boolean' ? (
                        spec.value ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-red-500 mx-auto" size={20} />
                        )
                      ) : (
                        spec.value
                      )
                    ) : (
                      '—'
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparison;