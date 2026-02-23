import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white max-w-2xl w-full rounded-2xl shadow-lg p-10 text-center">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Thank You for Your Order!
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-4">
            Your purchase has been confirmed. We've received your order
            and are preparing it for shipment.
          </p>

          <p className="text-gray-600 text-sm mb-8">
            We'll let you know when it's on its way. Expect delivery within{" "}
            <span className="font-semibold">3–5 business days</span>.
          </p>

          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    </div>
  );
}
