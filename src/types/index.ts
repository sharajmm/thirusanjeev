export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "aluminum" | "copper" | "brass" | "steel";
  description: string;
  rating: number;
  reviews: number;
  bestseller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ShoppingContextType {
  cart: CartItem[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (product: Product) => void;
  getTotalPrice: () => number;
  getCartItemCount: () => number;
}
