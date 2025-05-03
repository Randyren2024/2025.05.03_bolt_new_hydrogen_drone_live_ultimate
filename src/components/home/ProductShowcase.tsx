import React from 'react';
import Card, { CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: 'phoenix-h25',
    name: 'Phoenix H25',
    category: 'Multi-purpose Quadcopter',
    description: 'Optimized power and strong system integration, adapting to various mission equipment and sensors, widely used in land surveying, forest security, wind power inspection, and maritime law enforcement.',
    image: '协氢产品图片整理250310/产品-2青鸾H25-1.jpg',
    featured: true
  },
  {
    id: 'atlas-h100',
    name: 'Atlas H100',
    category: 'Heavy-lift Quadcopter',
    description: 'Advanced technology, strong load capacity, stable flight performance, and high-precision positioning. Customizable payload system meets diverse application needs, suitable for curtain wall/solar panel cleaning, material hoisting, and forest firefighting.',
    image: '协氢产品图片整理250310/产品-1擎天H100-1.jpg',
    featured: true
  },
  {
    id: 'hydrogen-two-wheeler',
    name: 'Hydrogen-Electric Shared Two-Wheeler',
    category: 'Hydrogen Mobility',
    description: 'An eco-friendly shared two-wheeler powered by hydrogen-electric technology, offering a sustainable urban transportation solution.',
    image: '协氢产品图片整理250310/产品-3氢电共享两轮车-1.jpg',
    featured: true
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover our industry-leading hydrogen-powered drones engineered for specific applications.
            </p>
          </div>
          <Link href="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center mt-4 md:mt-0">
            View All Products <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card hoverable className="h-full flex flex-col">
                <CardImage 
                  src={product.image} 
                  alt={product.name} 
                  className="h-56 md:h-64"
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
      </div>
    </section>
  );
};

export default ProductShowcase;
