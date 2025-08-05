
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Will&apos;s hobby corner</h1>
        <div className="text-right">
          <a href="mailto:hello@willgao.me" className="text-lg">hello@willgao.me</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
