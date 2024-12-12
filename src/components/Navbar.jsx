import React from 'react'

const Navbar = () => {
  return (
    <div>
         {/* Navbar */}
      <nav className="bg-gold p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-green">Albert & Nidhi's Wedding</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-yellow-300">About</a>
            </li>
            <li>
              <a href="#venue" className="hover:text-yellow-300">Venue</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-300">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;