import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { ArrowLeft, Download, ArrowRight, Check } from 'lucide-react';
import { useParams } from 'react-router-dom'; // Assuming react-router-dom is used for routing
import { allProducts, Product } from '../data/products'; // Import allProducts and Product interface

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // Get product ID from URL
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Find the product data based on the ID from the URL
    const foundProduct = allProducts.find(p => p.id === productId);
    setProduct(foundProduct);
    if (foundProduct && foundProduct.galleryImages && foundProduct.galleryImages.length > 0) {
      setSelectedImage(foundProduct.galleryImages[0]);
    } else if (foundProduct && foundProduct.image) {
      setSelectedImage(foundProduct.image);
    }
  }, [productId]); // Re-run effect if productId changes

  if (!product) {
    // Handle case where product is not found
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The requested product could not be found.</p>
          <a href="/products" className="flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <a href="/products" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </a>
          </div>
          
          {/* Product Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
          </div>
          
          {/* Product Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              {selectedImage && (
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <img 
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}
              
              {product.galleryImages && product.galleryImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className={`cursor-pointer bg-white rounded-md shadow-sm p-2 transition-all ${
                        selectedImage === image ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-24 object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div>
              <p className="text-xl text-gray-700 mb-8">
                {product.description}
              </p>
              
              {product.keyFeatures && product.keyFeatures.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Features
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" size="lg" className="flex-1">
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="flex-1" icon={<Download size={18} />}>
                  Download Specs
                </Button>
              </div>
            </div>
          </div>
          
          {/* Specifications */}
          {product.specs && product.specs.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.specs.map((spec, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-sm text-gray-500 font-medium">
                      {spec.name}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.applications.map((application, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {application}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Removed Case Studies section as no corresponding info in PDF */}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
