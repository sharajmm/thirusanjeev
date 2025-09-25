import React, { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useShoppingContext } from "../context/ShoppingContext";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  searchTerm,
  setSearchTerm,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favorites, getCartItemCount } = useShoppingContext();

  const navigation = [
    { name: "Home", key: "home" },
    { name: "Aluminum", key: "aluminum" },
    { name: "Copper", key: "copper" },
    { name: "Brass", key: "brass" },
    { name: "Steel", key: "steel" },
    { name: "Contact", key: "contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top section with logo and icons */}
        <div className="flex items-center justify-between py-4">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage("home")}
          >
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Sanz Mart</h1>
              <p className="text-sm text-gray-500">Kitchen Excellence</p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`text-gray-600 hover:text-orange-500 transition-colors font-medium ${
                  currentPage === item.key
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage("favorites")}
              className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Heart className="w-6 h-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setCurrentPage("cart")}
              className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar - hidden on home page */}
        {currentPage !== "home" && (
          <div className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors ${
                  currentPage === item.key ? "text-orange-500 bg-orange-50" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
