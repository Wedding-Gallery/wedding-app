import React from 'react';
import log4 from '../assets/images/log4.jpeg'; // Update the logo path as per your directory
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#C1FF72] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={log4} alt="Wedding Logo" className="w-10 h-10 rounded-2xl " />
          </Link>
          <Link to="/home">
          <h1 className="text-xl font-bold text-green-800">A&N's Wedding</h1>
          </Link>
        </div>
        <ul className="flex space-x-6">
  <li>
    <Link to="/about" className="hover:text-yellow-500 text-green-900 font-medium">About</Link>
  </li>
  <li>
    <Link to="/venue" className="hover:text-yellow-500 text-green-900 font-medium">Venue</Link> {/* This stays as anchor */}
  </li>
  <li>
    <Link to="/gallery" className="hover:text-yellow-500 text-green-900 font-medium">Gallery</Link>
  </li>
 
</ul>
      </div>
    </nav>
  );
};

export default Navbar;
