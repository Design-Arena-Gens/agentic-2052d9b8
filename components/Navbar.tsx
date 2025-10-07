'use client'

import { ShoppingCart, Search } from 'lucide-react'
import { useCart } from '../context/CartContext'

export function Navbar() {
  const { getTotalItems, toggleCart } = useCart()

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary-600">ShopApp</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}