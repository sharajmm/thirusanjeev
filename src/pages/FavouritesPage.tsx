import React from 'react';
import { Heart } from 'lucide-react';
import { useShoppingContext } from '../context/ShoppingContext';
import ProductCard from '../components/ProductCard';

const FavouritesPage: React.FC = () => {
  const { favorites } = useShoppingContext();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-8">Start adding products to your favorites to see them here!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Favorites</h1>
          <p className="text-gray-600">
            You have {favorites.length} favorite {favorites.length === 1 ? 'product' : 'products'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;