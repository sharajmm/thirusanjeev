import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";

interface CategoryPageProps {
  category: "aluminum" | "copper" | "brass" | "steel";
  searchTerm: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  searchTerm,
}) => {
  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const filteredProducts = categoryProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryTitles = {
    aluminum: "Aluminum Collection",
    copper: "Copper Collection",
    brass: "Brass Collection",
    steel: "Steel Collection",
  };

  const categoryDescriptions = {
    aluminum:
      "Lightweight and durable aluminum kitchenware for everyday cooking.",
    copper:
      "Premium copper cookware with excellent heat conductivity for professional results.",
    brass:
      "Traditional brass items combining functionality with timeless elegance.",
    steel:
      "Durable steel products for professional blacksmith work and cooking.",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
            {categoryTitles[category]}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {categoryDescriptions[category]}
          </p>
          <div className="mt-6">
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              {filteredProducts.length} Products Available
            </span>
          </div>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredProducts.length} results for "
              <span className="font-semibold">{searchTerm}</span>" in {category}{" "}
              category
            </p>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              {searchTerm
                ? `No ${category} products match your search "${searchTerm}"`
                : `No products available in ${category} category`}
            </p>
          </div>
        )}

        {/* Category Benefits */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center capitalize">
            Why Choose {category}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {category === "aluminum" && (
              <>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Lightweight</h4>
                  <p className="text-gray-600 text-sm">
                    Easy to handle and perfect for daily use
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Affordable</h4>
                  <p className="text-gray-600 text-sm">
                    Great value for money without compromising quality
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Durable</h4>
                  <p className="text-gray-600 text-sm">
                    Long-lasting construction for years of use
                  </p>
                </div>
              </>
            )}

            {category === "copper" && (
              <>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Heat Conduction</h4>
                  <p className="text-gray-600 text-sm">
                    Superior heat distribution for even cooking
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Professional Grade</h4>
                  <p className="text-gray-600 text-sm">
                    Used by professional chefs worldwide
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Beautiful Patina</h4>
                  <p className="text-gray-600 text-sm">
                    Develops character and beauty over time
                  </p>
                </div>
              </>
            )}

            {category === "brass" && (
              <>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Antimicrobial</h4>
                  <p className="text-gray-600 text-sm">
                    Natural antimicrobial properties
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Traditional</h4>
                  <p className="text-gray-600 text-sm">
                    Time-honored craftsmanship and design
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Versatile</h4>
                  <p className="text-gray-600 text-sm">
                    Perfect for storage and serving
                  </p>
                </div>
              </>
            )}

            {category === "steel" && (
              <>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Durable</h4>
                  <p className="text-gray-600 text-sm">
                    Built tough for heavy-duty blacksmith work
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Professional</h4>
                  <p className="text-gray-600 text-sm">
                    Industrial-grade quality for professionals
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-500 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Long-lasting</h4>
                  <p className="text-gray-600 text-sm">
                    Resistant to wear and corrosion
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
