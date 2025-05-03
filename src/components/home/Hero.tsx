import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Video or Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 z-10"></div>
        <img
          src="http://1303876058.vod-qcloud.com/7db8808bvodcq1303876058/4b385e701397757910893402727/r0fs6Rm3XtoA.png"
          alt="Drone flying over landscape"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
            The World's Leading Provider of <span className="text-blue-400">Hydrogen-Powered</span> Drones & Air-Cooled Hydrogen Fuel Cell Systems
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Committed to become the original innovator to develop air-cooled hydrogen fuel cell systems and the first inventor of air-cooled hydrogen fuel cells for drones in China.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Explore Products
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">Long</span>
              <span className="text-sm text-gray-300">Endurance</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">Eco-</span>
              <span className="text-sm text-gray-300">Friendly</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">Fast</span>
              <span className="text-sm text-gray-300">Refueling</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
