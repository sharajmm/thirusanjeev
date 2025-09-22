import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem, ShoppingContextType } from '../types';

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const useShoppingContext = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShoppingContext must be used within a ShoppingProvider');
  }
  return context;
};

interface ShoppingProviderProps {
  children: ReactNode;
}

export const ShoppingProvider: React.FC<ShoppingProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleFavorite = (product: Product) => {
    setFavorites(prevFavorites => {
      const exists = prevFavorites.find(item => item.id === product.id);
      if (exists) {
        return prevFavorites.filter(item => item.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const value: ShoppingContextType = {
    cart,
    favorites,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleFavorite,
    getTotalPrice,
    getCartItemCount,
  };

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  );
};