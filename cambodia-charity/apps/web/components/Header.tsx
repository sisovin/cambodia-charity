import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">Cambodia Charity</div>
        <div className="space-x-4">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
