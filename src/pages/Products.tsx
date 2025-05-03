import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Card, { CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProductFilter from '../components/features/ProductFilter';
import ProductSearch from '../components/features/ProductSearch';
import { ArrowRight } from 'lucide-react';
import { Link } from '../components/ui/Link';
import { allProducts, Product } from '../data/products'; // Import allProducts and Product interface

const filterGroups = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { id: 'hydrogen-drones', label: 'Hydrogen-Powered Drones' },
      { id: 'lithium-drones', label: 'Lithium Battery Drone Series' },
      { id: 'fuel-cells', label: 'Air-Cooled Hydrogen Fuel Cells' },
    ]
  }
  // Can add more filter groups based on PDF specs later if needed (e.g., Payload, Endurance)
];

const Products: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleFilterChange = (newFilters: Record<string, string[]>) => {
    setFilters(newFilters);
  };
  
  const filterProducts = (products: Product[]) => {
    // Filter by search term
    let filtered = products;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(term) || 
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
    }
    
    // Filter by selected filters
    if (Object.keys(filters).length > 0) {
      filtered = filtered.filter(product => {
        return Object.entries(filters).every(([filterGroup, selectedOptions]) => {
          if (selectedOptions.length === 0) return true;
          return selectedOptions.some(option => product.tags.includes(option));
        });
      });
    }
    
    return filtered;
  };
  
  const filteredProducts = filterProducts(allProducts);
  
  return (
    <Layout>
      {/* Hero banner */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-800/80 z-10"></div>
          <img
            src="https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Drone flying"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              HiTS Product Catalog
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our comprehensive range of hydrogen-powered drones, lithium battery drones, and air-cooled hydrogen fuel cell systems.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products section with filter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with filters */}
            <div className="w-full lg:w-1/4">
              <ProductFilter 
                filterGroups={filterGroups}
                onFilterChange={handleFilterChange}
              />
            </div>
            
            {/* Main content */}
            <div className="w-full lg:w-3/4">
              {/* Search and sort controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="w-full sm:w-auto">
                  <ProductSearch />
                </div>
                <div className="text-gray-600">
                  Showing {filteredProducts.length} products
                </div>
              </div>
              
              {/* Products grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <Card hoverable className="h-full flex flex-col">
                        <CardImage 
                          src={product.image} 
                          alt={product.name} 
                          className="h-48"
                        />
                        <CardContent className="flex-grow">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                            {product.category}
                          </span>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="pt-4">
                          <Button
                            variant="outline"
                            size="md"
                            icon={<ArrowRight size={16} />}
                            iconPosition="right"
                            className="w-full"
                          >
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setFilters({});
                      setSearchTerm('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
