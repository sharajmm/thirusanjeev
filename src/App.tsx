import React, { useState } from "react";
import { ShoppingProvider } from "./context/ShoppingContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "aluminum":
      case "copper":
      case "brass":
      case "steel":
        return <CategoryPage category={currentPage} searchTerm={searchTerm} />;
      case "cart":
        return <CartPage />;
      case "contact":
        return <ContactPage />;
      case "favorites":
        return <FavouritesPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ShoppingProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {renderCurrentPage()}

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold">Sanz Mart</h3>
                </div>
                <p className="text-gray-400">
                  Premium kitchen ware for the modern home. Quality
                  craftsmanship meets timeless design.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setCurrentPage("aluminum")}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Aluminum
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("copper")}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Copper
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("brass")}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Brass
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("steel")}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Steel
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Newsletter</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>

            <hr className="my-8 border-gray-700" />

            <div className="text-center text-gray-400">
              <p>
                &copy; 2025 Sanz Mart. All rights reserved. Premium Kitchen
                Excellence.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ShoppingProvider>
  );
}

export default App;
