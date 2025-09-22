import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Product } from "../types";
import { useShoppingContext } from "../context/ShoppingContext";

interface ProductCardProps {
  product: Product;
  showBuyNow?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showBuyNow = true,
}) => {
  const { addToCart, toggleFavorite, favorites } = useShoppingContext();

  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    // In a real app, this would navigate to checkout
    alert("Added to cart! Proceeding to checkout...");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-white text-gray-400 hover:text-red-500"
          }`}
        >
          <Heart
            className="w-5 h-5"
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
        {product.bestseller && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Bestseller
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-800">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-500 capitalize">
            {product.category}
          </span>
        </div>

        <div className="space-y-2">
          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>

          {showBuyNow && (
            <button
              onClick={handleBuyNow}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
