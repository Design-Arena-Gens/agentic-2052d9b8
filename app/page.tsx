'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from '../components/ProductCard'
import { SearchBar } from '../components/SearchBar'
import { CategoryFilter } from '../components/CategoryFilter'
import { CartDrawer } from '../components/CartDrawer'
import { Product } from '../types/Product'

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    description: 'Advanced smartwatch with health monitoring',
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 129.99,
    image: '/api/placeholder/300/300',
    category: 'Sports',
    description: 'Comfortable running shoes for all terrains',
    rating: 4.6,
    reviews: 203
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 79.99,
    image: '/api/placeholder/300/300',
    category: 'Home',
    description: 'Programmable coffee maker with timer',
    rating: 4.4,
    reviews: 156
  },
  {
    id: 5,
    name: 'Yoga Mat',
    price: 39.99,
    image: '/api/placeholder/300/300',
    category: 'Sports',
    description: 'Non-slip yoga mat for all fitness levels',
    rating: 4.7,
    reviews: 92
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 59.99,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with great sound',
    rating: 4.3,
    reviews: 167
  },
  {
    id: 7,
    name: 'Desk Lamp',
    price: 49.99,
    image: '/api/placeholder/300/300',
    category: 'Home',
    description: 'LED desk lamp with adjustable brightness',
    rating: 4.5,
    reviews: 78
  },
  {
    id: 8,
    name: 'Water Bottle',
    price: 24.99,
    image: '/api/placeholder/300/300',
    category: 'Sports',
    description: 'Insulated water bottle keeps drinks cold for 24 hours',
    rating: 4.6,
    reviews: 134
  }
]

export default function Home() {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  useEffect(() => {
    let filtered = products

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory, sortBy])

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ShopApp
        </h1>
        <p className="text-lg text-gray-600">
          Discover amazing products at great prices
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/4">
          <div className="card p-4">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Products ({filteredProducts.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <CartDrawer />
    </div>
  )
}