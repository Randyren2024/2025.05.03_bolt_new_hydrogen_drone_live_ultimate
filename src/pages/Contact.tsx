import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/features/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-800/80 z-10"></div>
          {/* Keeping existing background image for now */}
          <img
            src="https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact HiTS
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Locations
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-3">
                      Headquarters
                    </h3>
                    <div className="flex items-start mb-3">
                      <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">
                        3/F, Bldg. 2, 602 Tongpu Rd.<br />
                        Putuo Dist., Shanghai 200062<br />
                        China
                      </span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Phone className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-600">+86-21-31165822</span>
                    </div>
                    {/* Email not provided in PDF, omitting */}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-3">
                      R&D Centers
                    </h3>
                    <div className="flex items-start mb-3">
                       <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                       <span className="text-gray-600">Shenzhen</span>
                    </div>
                     <div className="flex items-start">
                       <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                       <span className="text-gray-600">Chizhou</span>
                    </div>
                  </div>

                   <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-3">
                      Manufacturing Bases
                    </h3>
                    <div className="flex items-start mb-3">
                       <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                       <span className="text-gray-600">Chizhou</span>
                    </div>
                     <div className="flex items-start mb-3">
                       <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                       <span className="text-gray-600">Zaozhuang</span>
                    </div>
                     <div className="flex items-start">
                       <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                       <span className="text-gray-600">Zhangjiagang</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Removed Business Hours section as not in PDF */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Removed Map Section as not in PDF */}
    </Layout>
  );
};

export default Contact;
