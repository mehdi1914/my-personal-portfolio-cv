import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function NavActions() {
  const cartItemsCount = 3; // Example count

  return (
    <div className="flex items-center gap-6">
      <button 
        className="relative p-2"
        aria-label={`Shopping cart with ${cartItemsCount} items`}
      >
        <ShoppingCart className="w-6 h-6 text-gray-200" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-purple-600 rounded-full">
            {cartItemsCount}
          </span>
        )}
      </button>

      <a
        href="#contact"
        className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:scale-105 transition-all duration-300"
      >
        Contact Us
      </a>
    </div>
  );
}