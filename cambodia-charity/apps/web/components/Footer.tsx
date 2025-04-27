import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Cambodia Charity. All rights reserved.
        </div>
        <div className="space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
