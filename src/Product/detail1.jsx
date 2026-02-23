import { useParams, useNavigate } from "react-router-dom";
import AdSlot from "../components/AdSlot.jsx";
import ProductLink from "../components/ProductLink.jsx";
import { useState, useMemo, useEffect } from "react";
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
  const [failedImageUrls, setFailedImageUrls] = useState(() => new Set());

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

  // Skip images that failed to load; show only valid ones
  const validImages = useMemo(
    () => productImages.filter((url) => !failedImageUrls.has(url)),
    [productImages, failedImageUrls]
  );
  const safeIndex = Math.min(
    currentImageIndex,
    Math.max(0, validImages.length - 1)
  );
  const currentImageUrl = validImages[safeIndex];

  // Reset failed list and index when product changes
  useEffect(() => {
    setFailedImageUrls(new Set());
    setCurrentImageIndex(0);
  }, [productId]);

  const handleImageError = () => {
    if (currentImageUrl)
      setFailedImageUrls((prev) => new Set(prev).add(currentImageUrl));
  };

  const goPrev = () =>
    setCurrentImageIndex((i) =>
      i === 0 ? validImages.length - 1 : i - 1
    );
  const goNext = () =>
    setCurrentImageIndex((i) =>
      i === validImages.length - 1 ? 0 : i + 1
    );

  const displayTitle = jsonProduct?.title ?? product.name;
  const displayPrice = jsonProduct != null ? `₹${jsonProduct.price}` : product.price;
  const displayDescription = jsonProduct?.description ?? "";
  const displayCategory = jsonProduct?.category ?? "Korean_Winter_Wear";

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">

        {/* PRODUCT SECTION - items-start so left column height = image height (arrows stay on image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* LEFT IMAGE - skip missing/broken images, show next */}
          <div className="relative rounded-xl overflow-hidden shadow-lg w-full">
            {currentImageUrl ? (
              <img
                src={currentImageUrl}
                alt={displayTitle}
                className="w-full h-auto object-cover block"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                No image available
              </div>
            )}
            {/* Overlay so arrows stay vertically centered for any image height */}
            {validImages.length > 0 && (
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-2">
              <button
                onClick={goPrev}
                className="pointer-events-auto bg-gray-200/90 text-gray-800 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 transition shadow-md text-3xl font-bold leading-none"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                className="pointer-events-auto bg-gray-200/90 text-gray-800 w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-300 transition shadow-md text-3xl font-bold leading-none"
              >
                ›
              </button>
            </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
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

            {/* Quantity, Ad, Add to Cart – quantity first, then ad in middle, then button */}
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

              {/* d3 – above Add to Cart, middle; responsive */}
              <div className="flex justify-center w-full max-w-[100vw] min-w-0 my-6 overflow-x-hidden">
                <AdSlot divId="div-gpt-ad-1771592354782-0" size="rectangle" />
              </div>

              <button
                onClick={() => {
                  addToCart(productId, quantity);
                  navigate("/cart");
                }}
                className="w-full sm:w-auto bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md"
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
              <ProductLink
                key={item.id}
                productId={item.id}
                className="block"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">

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

                    <span className="inline-block w-full bg-indigo-600 text-white py-2 px-4 rounded-full font-medium hover:bg-indigo-700 transition">
                      View
                    </span>
                  </div>

                </div>
              </ProductLink>
            ))}

          </div>
        </section>

      </main>
    </div>
  );
}