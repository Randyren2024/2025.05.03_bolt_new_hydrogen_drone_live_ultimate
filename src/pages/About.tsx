import React from 'react';
import Layout from '../components/layout/Layout';
import { Check, TrendingUp, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-800/80 z-10"></div>
          {/* Keeping existing background image for now */}
          <img
            src="https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Drone manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About HiTS
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              The world's leading provider of hydrogen-powered drones & air-cooled hydrogen fuel cell systems.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Company Overview
            </h2>
            <p className="text-xl text-gray-600 mb-10 text-center">
              HiTS is the original innovator to develop air-cooled hydrogen fuel cell systems and the first inventor of air-cooled hydrogen fuel cells for drones in China. HiTS holds a leading R&D foundation and numerous patents in the field of air-cooled hydrogen fuel cells. HiTS has three major business divisions: air-cooled hydrogen fuel cells, hydrogen-powered drones, and hydrogen production & storage.
            </p>
            
            {/* Keeping existing feature/icon structure for now, can be updated later if needed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Original innovator and first inventor of air-cooled hydrogen fuel cells for drones in China.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">R&D and Patents</h3>
                <p className="text-gray-600">
                  Holding a leading R&D foundation and numerous patents in air-cooled hydrogen fuel cells.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Divisions</h3>
                <p className="text-gray-600">
                  Air-cooled hydrogen fuel cells, hydrogen-powered drones, and hydrogen production & storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story - Adapted to focus on locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image for locations - using a factory image */}
            <div className="md:w-1/2">
              <img 
                src="协氢产品图片整理250310/工厂-无人机生产车间池州.jpg"
                alt="HiTS Manufacturing Base in Chizhou"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Global Presence
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Additionally, HiTS has established a drone R&D center in Shenzhen, a fuel cell R&D center in Chizhou, and three manufacturing bases located in Chizhou, Zaozhuang, and Zhangjiagang.
                </p>
                {/* Removed other story paragraphs */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Removed Timeline section as no corresponding info in PDF */}
      
      {/* Removed Team section as no corresponding info in PDF */}
    </Layout>
  );
};

export default About;
