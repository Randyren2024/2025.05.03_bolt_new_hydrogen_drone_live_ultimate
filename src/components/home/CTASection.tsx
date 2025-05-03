import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with the World Leader in Hydrogen-Powered Drone Technology
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our experts to explore how our innovative hydrogen fuel cell systems and drones can revolutionize your operations with unparalleled endurance, eco-friendliness, and performance.
          </p>
          {/* Removed buttons and support link as requested */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
