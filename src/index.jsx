import { useState, useEffect } from "react";
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

  // Scroll to top when page (pagination) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Featured Products
        </h2>
      

        {/* GRID - same as detail1.jsx All Products section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {currentProducts.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              key={`p${currentPage}-${indexOfFirst + index}`}
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <span className="block text-xl font-bold text-gray-900 mb-4">
                  {product.price}
                </span>

                <span className="inline-block w-full bg-indigo-600 text-white py-2 px-4 rounded-full font-medium hover:bg-indigo-700 transition text-center">
                  View
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION - single line, scrolls on small screens */}
        <div className="mt-12 md:mt-16 overflow-x-auto">
          <div className="flex justify-center items-center flex-nowrap gap-2 min-w-max px-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="flex-shrink-0 px-3 py-2 text-sm rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition"
            >
              « Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`flex-shrink-0 min-w-[2.25rem] px-3 py-2 text-sm rounded-md border transition ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="flex-shrink-0 px-3 py-2 text-sm rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition"
            >
              Next »
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
