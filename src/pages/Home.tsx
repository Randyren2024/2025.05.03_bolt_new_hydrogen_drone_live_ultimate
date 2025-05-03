import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductShowcase from '../components/home/ProductShowcase';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <ProductShowcase />
      <CTASection />
    </Layout>
  );
};

export default Home;
