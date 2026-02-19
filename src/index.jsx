import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import { products } from "./productData.js";

  const PRODUCTS_PER_PAGE = 10; // only 10 products on each pagination page

export default function IndexPage() {
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE) || 1;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfFirst = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const indexOfLast = indexOfFirst + PRODUCTS_PER_PAGE;
  // Only ever show 10 products on this page (slice twice to be sure)
  const currentProducts = products.slice(indexOfFirst, indexOfLast).slice(0, PRODUCTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

<main className="w-full px-6 py-10">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Products
        </h2>
      

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {currentProducts.map((product, index) => (
            <div
              key={`p${currentPage}-${indexOfFirst + index}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>

                <p className="text-xl font-bold mt-2">
                  {product.price}
                </p>

                <Link to={`/product/${product.id}`}>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
                    View
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center mt-16 flex-wrap gap-2">

          {/* Prev */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 text-sm rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40"
          >
            « Prev
          </button>

          {/* Page numbers — 10 products per page only */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 text-sm rounded-md border ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 text-sm rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40"
          >
            Next »
          </button>

        </div>

      </main>

      <Footer />
    </div>
  );
}
