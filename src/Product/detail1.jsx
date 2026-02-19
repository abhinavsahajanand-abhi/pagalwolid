import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { products } from "../productData";
import productDetailsJson from "../../data-2.0.json";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product =
    products.find((item) => item.id === productId) || products[0];

  // Use data from JSON file when user opens this product (matched by id)
  const jsonProduct = useMemo(
    () => productDetailsJson.find((item) => item.id === productId) || null,
    [productId]
  );

  const productImages = useMemo(() => {
    if (jsonProduct) {
      const imgs = [];
      for (let i = 1; i <= 10; i++) {
        const key = `img${i}`;
        if (jsonProduct[key]) imgs.push(jsonProduct[key]);
      }
      if (imgs.length > 0) return imgs;
    }
    return [product.image];
  }, [jsonProduct, product.image]);

  const displayTitle = jsonProduct?.title ?? product.name;
  const displayPrice = jsonProduct != null ? `₹${jsonProduct.price}` : product.price;
  const displayDescription = jsonProduct?.description ?? "";
  const displayCategory = jsonProduct?.category ?? "Korean_Winter_Wear";

  const goPrev = () =>
    setCurrentImageIndex((i) =>
      i === 0 ? productImages.length - 1 : i - 1
    );

  const goNext = () =>
    setCurrentImageIndex((i) =>
      i === productImages.length - 1 ? 0 : i + 1
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">

        {/* PRODUCT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* LEFT IMAGE */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={productImages[currentImageIndex]}
              alt={displayTitle}
              className="w-full h-auto object-cover"
            />

            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-300 transition"
            >
              ‹
            </button>

            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 px-3 py-2 rounded-full hover:bg-gray-300 transition"
            >
              ›
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {displayTitle}
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {displayPrice}
            </p>

            <div className="text-gray-800 leading-relaxed text-base text-justify">
              {displayDescription ? (
                <p className="mb-6 text-justify">
                  {displayDescription.replace(/\r?\n/g, " ")}
                </p>
              ) : (
                <p className="mb-6 text-justify">
                  Premium quality product. Perfect for everyday wear, outings, and special occasions.
                </p>
              )}
            </div>

            {/* Quantity & Add to Cart - horizontally centered */}
            <div className="flex flex-col items-center mt-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
                >
                  −
                </button>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (!isNaN(val) && val >= 1) setQuantity(val);
                  }}
                  className="w-14 h-10 text-center border border-gray-300 rounded-lg"
                />

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => {
                  addToCart(productId, quantity);
                  navigate("/cart");
                }}
                className="mt-6 w-full sm:w-auto bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10 text-gray-700">
              <h3 className="font-bold mb-3 text-lg">
                Product Information:
              </h3>

              <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                <li>
                  <span className="font-medium">Category:</span> {displayCategory}
                </li>
                <li>
                  <span className="font-medium">Price:</span> {displayPrice}
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ALL PRODUCTS SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            All Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {products
              .filter((item) => item.id !== productId)
              .map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 break-words">
                      {item.name}
                    </h3>

                    <span className="block text-xl font-bold text-gray-900 mb-4">
                      {item.price}
                    </span>

                    <button className="inline-block w-full bg-indigo-600 text-white py-2 px-4 rounded-full font-medium hover:bg-indigo-700 transition">
                      View
                    </button>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}