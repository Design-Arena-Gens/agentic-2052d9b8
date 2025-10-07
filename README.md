# ShopApp - Modern Shopping Application

A modern, responsive shopping application built with Next.js 14, React, and Tailwind CSS.

## Features

- 🛍️ Product catalog with search and filtering
- 🛒 Shopping cart with add/remove/update functionality
- 📱 Responsive design for all devices
- ⚡ Fast performance with Next.js
- 🎨 Modern UI with Tailwind CSS
- 🔍 Real-time search and category filtering
- ⭐ Product ratings and reviews display

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API

## Project Structure

```
├── app/
│   ├── api/placeholder/     # Placeholder image API
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── CartDrawer.tsx      # Shopping cart sidebar
│   ├── CategoryFilter.tsx  # Category filtering
│   ├── Navbar.tsx          # Navigation bar
│   ├── ProductCard.tsx     # Product display card
│   └── SearchBar.tsx       # Search functionality
├── context/
│   └── CartContext.tsx     # Shopping cart state management
└── types/
    └── Product.ts          # Product type definitions
```

## Features in Detail

### Product Catalog
- Displays products in a responsive grid
- Shows product images, names, prices, ratings, and descriptions
- Includes placeholder images via API route

### Shopping Cart
- Add/remove products with quantity controls
- Real-time total calculation
- Persistent cart state during session
- Slide-out drawer interface

### Search & Filtering
- Real-time search across product names and descriptions
- Category-based filtering
- Sort by name, price, or rating

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly interface elements

## Deployment

This application is ready for deployment on Vercel:

```bash
vercel deploy --prod
```

The app includes all necessary configuration files for immediate deployment.