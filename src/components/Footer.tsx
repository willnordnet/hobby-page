import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>Connect with me on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/Will1229" className="hover:text-gray-300 flex items-center">
            <Image src="/github.svg" alt="Me" width={24} height={24} className="mr-2" />
            Me
          </a>
          <a href="https://github.com/willnordnet" className="hover:text-gray-300 flex items-center">
            <Image src="/github.svg" alt="Me at work" width={24} height={24} className="mr-2" />
            Me at work
          </a>
          <a href="https://www.linkedin.com/in/gaozhixiang/" className="hover:text-gray-300 flex items-center">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
