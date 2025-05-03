import React from 'react';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "The HydroDrone Industrial 500 has revolutionized our inspection operations. The extended flight time allows us to cover our entire facility in a single flight, saving us valuable resources.",
    author: "Michael Chen",
    position: "Operations Director",
    company: "Global Energy Solutions",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '2',
    content: "We've reduced our agricultural monitoring costs by 40% since implementing HydroDrone's solution. The environmental benefits also align perfectly with our sustainability goals.",
    author: "Sarah Johnson",
    position: "Agricultural Technologist",
    company: "FarmTech Innovations",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '3',
    content: "The support team at HydroDrone is exceptional. They helped us customize a solution for our unique surveillance requirements, and the result has exceeded our expectations.",
    author: "David Rodriguez",
    position: "Security Systems Manager",
    company: "Secure Horizons",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from organizations that have transformed their operations with our hydrogen-powered drones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg shadow-md p-8 text-gray-800 relative"
            >
              {/* Quotation mark */}
              <div className="absolute top-4 right-6 text-blue-100 opacity-30">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4 24H8V32.4H16.4V24H14.4ZM14.4 24C14.4 18.704 18.704 14.4 24 14.4V8C15.176 8 8 15.176 8 24H14.4Z" fill="currentColor"/>
                  <path d="M32.4 24H26V32.4H34.4V24H32.4ZM32.4 24C32.4 18.704 36.704 14.4 42 14.4V8C33.176 8 26 15.176 26 24H32.4Z" fill="currentColor"/>
                </svg>
              </div>
              
              <p className="italic text-gray-600 mb-6">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;