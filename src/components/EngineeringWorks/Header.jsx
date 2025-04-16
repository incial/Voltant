import React from 'react';

const Header = () => {
  return (
    <header className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/header-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Engineering Works</h1>
      </div>
    </header>
  );
};

export default Header; 