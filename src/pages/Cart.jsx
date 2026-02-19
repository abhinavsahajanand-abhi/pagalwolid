import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useCart } from "../context/CartContext";
import { products } from "../productData";

function parsePrice(priceStr) {
  if (typeof priceStr === "number") return priceStr;
  const num = parseInt(String(priceStr).replace(/[^0-9]/g, ""), 10);
  return isNaN(num) ? 0 : num;
}

function formatMoney(amount) {
  return `₹${Number(amount).toFixed(2)}`;
}

export default function Cart() {
  const { items, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const cartWithProducts = items
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return {
        ...item,
        product: product || null,
        priceEach: product ? parsePrice(product.price) : 0,
      };
    })
    .filter((row) => row.product);

  const subtotal = cartWithProducts.reduce(
    (sum, row) => sum + row.priceEach * row.quantity,
    0
  );
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Your Cart
          </h1>

          {cartWithProducts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
              <p className="text-gray-600 text-lg mb-6">Your cart is empty.</p>
              <button
                onClick={() => navigate("/")}
                className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 space-y-6">
                {cartWithProducts.map((row) => (
                  <div
                    key={row.id}
                    className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-4 w-full md:w-auto">
                      <img
                        src={row.product.image}
                        alt={row.product.name}
                        className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800 break-words" >
                          {row.product.name}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          Product ID: #{row.product.id}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0 flex-shrink-0">
                      <div className="text-lg font-bold text-gray-900">
                        {formatMoney(row.priceEach)}
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(row.id, row.quantity - 1)
                          }
                          className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full hover:bg-gray-300 transition"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold min-w-[1.5rem] text-center">
                          {row.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(row.id, row.quantity + 1)
                          }
                          className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full hover:bg-gray-300 transition"
                        >
                          +
                        </button>
                      </div>

                    
                    </div>
                  </div>
                ))}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium">Subtotal</span>
                    <span className="font-semibold text-gray-800">
                      {formatMoney(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-medium">Discount</span>
                    <span className="font-semibold text-red-500">
                      -{formatMoney(discount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-gray-900">
                      {formatMoney(total)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
               
                <button
                  onClick={() => navigate("/checkout")}
                  className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
