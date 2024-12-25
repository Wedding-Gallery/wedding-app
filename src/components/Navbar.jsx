import React from 'react';
import logo3 from '../assets/images/logo3.jpeg'; // Update the logo path as per your directory
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#C1FF72] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo3} alt="Wedding Logo" className="w-10 h-10 rounded-2xl " />
          </Link>
          <h1 className="text-xl font-bold text-green-800">A&N's Wedding</h1>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/about" className="hover:text-yellow-500 text-green-900 font-medium">About</a>
          </li>
          <li>
            <a href="#venue" className="hover:text-yellow-500 text-green-900 font-medium">Venue</a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-yellow-500 text-green-900 font-medium">Gallery</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
