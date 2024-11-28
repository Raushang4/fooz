import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">FOOZ</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors">Products</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}