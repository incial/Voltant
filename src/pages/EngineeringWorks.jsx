import React from 'react';
import Header from '../components/EngineeringWorks/Header';
import Content from '../components/EngineeringWorks/Content';
import Footer from '../components/EngineeringWorks/Footer';

const EngineeringWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default EngineeringWorks; 