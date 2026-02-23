import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function Checkout() {
  const navigate = useNavigate();
  const { items } = useCart();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
    email: "",
  });

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
  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = (e) => {
    e.preventDefault();

    if (step < 9) {
      setStep(step + 1);
    } else {
      navigate("/order-success");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16 space-y-10">

          {/* ===== ORDER SUMMARY ===== */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Order
            </h2>

            {cartWithProducts.length === 0 ? (
              <p className="text-gray-600 mb-6">Your cart is empty.</p>
            ) : (
              <div className="space-y-4 mb-6">
                {cartWithProducts.map((row) => (
                  <div
                    key={row.id}
                    className="flex items-center space-x-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <img
                      src={row.product.image}
                      alt={row.product.name}
                      className="w-24 h-24 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 break-words">
                        {row.product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Quantity: {row.quantity}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Price: {formatMoney(row.priceEach)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Subtotal</span>
                <span>{formatMoney(subtotal)}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Shipping</span>
                <span>{formatMoney(shipping)}</span>
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900 border-t border-gray-300 mt-4 pt-4">
                <span>Total</span>
                <span>{formatMoney(total)}</span>
              </div>
            </div>
          </div>

          {/* ===== CUSTOMER DETAILS ===== */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Customer Details
            </h2>

            <form onSubmit={nextStep} className="space-y-6">

              {/* STEP 1 - FULL NAME */}
              {step === 1 && (
                <InputField
                  label="Full Name"
                  name="fullName"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 2 - ADDRESS */}
              {step === 2 && (
                <>
                  <InputField
                    label="Address Line 1"
                    name="address1"
                    formData={formData}
                    handleChange={handleChange}
                  />
                  <InputField
                    label="Address Line 2"
                    name="address2"
                    formData={formData}
                    handleChange={handleChange}
                  />
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <InputField
                  label="City"
                  name="city"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <InputField
                  label="State"
                  name="state"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <InputField
                  label="Pincode"
                  name="pincode"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 6 */}
              {step === 6 && (
                <InputField
                  label="Country"
                  name="country"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 7 */}
              {step === 7 && (
                <InputField
                  label="Phone Number"
                  name="phone"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 8 */}
              {step === 8 && (
                <InputField
                  label="Email"
                  name="email"
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {/* STEP 9 - CONFIRMATION */}
              {step === 9 && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-2 text-sm">
                  {/* <p><strong>Name:</strong> {formData.fullName}</p>
                  <p><strong>Address:</strong> {formData.address1} {formData.address2}</p>
                  <p><strong>City:</strong> {formData.city}</p>
                  <p><strong>State:</strong> {formData.state}</p>
                  <p><strong>Pincode:</strong> {formData.pincode}</p>
                  <p><strong>Country:</strong> {formData.country}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Email:</strong> {formData.email}</p> */}
                </div>
              )}

              {/* NEXT BUTTON */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition shadow-md"
              >
                {step === 9 ? "Next" : "Next"}
              </button>
            </form>

            {/* NOTE BLOCK */}
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm">
  <p className="text-sm text-gray-700 leading-relaxed">
    Please ensure that the information you provide is accurate and complete.
    Your name, contact details, and address will be used for order processing
    and timely delivery. Any mistakes in the details may cause delays or
    failed deliveries. Double-check your entries before proceeding to the
    next step. Providing a valid phone number and email address will also
    help us contact you for updates regarding your order. We value your
    trust and make every effort to ensure a smooth and hassle-free shopping
    experience. Thank you for choosing us!
  </p>
</div>
</div>

        </section>
      </main>
    </div>
  );
}

function InputField({ label, name, formData, handleChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );
}
