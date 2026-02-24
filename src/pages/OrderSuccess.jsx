import { Link } from "react-router-dom";
import AdSlot from "../components/AdSlot.jsx";

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

          {/* Ad above Continue Shopping – d3 (rectangle) */}
          <div className="w-full max-w-full overflow-visible min-h-[200px] sm:min-h-[280px] flex justify-center items-center my-6">
            <AdSlot divId="div-gpt-ad-1771592354782-0" size="rectangle" />
          </div>

          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>

          {/* Ad below Continue Shopping – reward (rectangle) */}
          <div className="w-full max-w-full overflow-visible min-h-[200px] sm:min-h-[280px] flex justify-center items-center mt-6">
            <AdSlot divId="div-gpt-ad-1771592484126-0" size="rectangle" />
          </div>

        </div>
      </main>
    </div>
  );
}
