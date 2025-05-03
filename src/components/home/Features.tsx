import React from 'react';
import { Clock, Zap, CloudSnow, Feather, DollarSign, Leaf } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <Clock size={40} className="text-blue-500" />,
    title: "Long Endurance",
    description: "Hydrogen fuel cells provide significantly longer flight times compared to traditional batteries, enabling extended missions."
  },
  {
    icon: <CloudSnow size={40} className="text-blue-500" />,
    title: "Cold Resistance",
    description: "Hydrogen fuel cells perform reliably in low temperatures, expanding operational capabilities in cold environments."
  },
  {
    icon: <Zap size={40} className="text-blue-500" />,
    title: "Fast Refueling",
    description: "Refueling with hydrogen is much faster than recharging batteries, minimizing downtime."
  },
  {
    icon: <Feather size={40} className="text-blue-500" />,
    title: "Lightweight",
    description: "Hydrogen fuel cell systems offer a better power-to-weight ratio, allowing for increased payload capacity."
  },
  {
    icon: <DollarSign size={40} className="text-blue-500" />,
    title: "Cost Efficiency",
    description: "Hydrogen fuel cells can be more cost-effective over their lifespan, especially for frequent and long-duration operations."
  },
  {
    icon: <Leaf size={40} className="text-blue-500" />,
    title: "Eco-Friendly",
    description: "Hydrogen power produces zero carbon emissions, with water as the only byproduct, supporting environmentally conscious applications."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advantages of Hydrogen Fuel Cells
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative hydrogen fuel cell technology offers significant advantages over traditional battery-powered drones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid columns for 6 items */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
