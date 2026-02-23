export default function ShippingPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-12">

            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Shipping Policy
            </h1>

            <div className="space-y-8 text-gray-600 leading-relaxed">

              <div>
                <p>
                  At Camorex, we are committed to delivering your orders in a timely, secure, and reliable manner.
                </p>
              </div>

              {/* Order Processing */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Order Processing Time
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All orders are processed within 1–2 business days</li>
                  <li>No processing on Sundays or public holidays</li>
                  <li>Tracking details will be shared after dispatch</li>
                </ul>
              </div>

              {/* Delivery Timeline */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Shipping & Delivery Timeline
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Estimated Delivery Time:</strong> 5–10 business days
                  </li>
                  <li>Delivery timelines may vary due to courier or weather conditions</li>
                  <li>Delays may occasionally occur</li>
                </ul>
              </div>

              {/* Shipping Locations */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Shipping Locations
                </h2>
                <p className="mb-2">Currently, we deliver across India.</p>
                <p>International shipping is not available at this time.</p>
              </div>

              {/* Shipping Charges */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Shipping Charges
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Shipping charges will be displayed at checkout</li>
                  <li>Any additional charges will be communicated transparently</li>
                </ul>
              </div>

              {/* COD */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Cash on Delivery (COD)
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>COD available on select products</li>
                  <li>Depends on courier serviceability</li>
                  <li>COD orders may be verified before dispatch</li>
                </ul>
              </div>

              {/* Courier Partners */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Courier Partners
                </h2>
                <p className="mb-2">
                  We work with trusted third-party logistics providers.
                </p>
                <p className="mb-2 font-medium">
                  Delhivery, Blue Dart, DTDC, Ecom Express, XpressBees, Shadowfax, India Post, etc.
                </p>
              </div>

              {/* Order Tracking */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Order Tracking
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Tracking shared via SMS, email, or WhatsApp</li>
                  <li>Use tracking link to monitor delivery</li>
                </ul>
              </div>

              {/* Delivery Issues */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Delivery Issues
                </h2>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Delayed delivery</li>
                  <li>Order not received</li>
                  <li>Damaged package</li>
                </ul>
                <p>
                  Contact support within 48 hours of expected delivery date.
                </p>
              </div>

              {/* Incorrect Address */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Incorrect Address / Failed Delivery
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide accurate shipping details</li>
                  <li>Re-delivery charges may apply if address is incorrect</li>
                </ul>
              </div>

              {/* Business Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Business Information
                </h2>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 text-sm">
                  <p className="mb-2">
                    <strong>Legal Business Name:</strong><br />
                    BAKULBHAI DURLABHBHAI DOMADIYA HUF
                  </p>
                  <p className="mb-2">
                    <strong>GST Number:</strong><br />
                    24AAHHB0806L1ZL
                  </p>
                  <p>
                    <strong>Registered Address:</strong><br />
                    410, Canopus Mall, Ghod Dod Road, Surat, Gujarat – 395007, India
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Contact Us
                </h2>
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                  <p className="mb-1">
                    <strong>📧 Email:</strong> sales@pagalworlid.com
                  </p>
                  <p className="mb-1">
                    <strong>📞 Phone / WhatsApp:</strong> +91 78741 35575
                  </p>
                  <p>
                    <strong>Support Hours:</strong> Monday to Saturday: 10:00 AM – 6:00 PM
                    <br />
                    <span className="text-xs">
                      (Sunday & Public Holidays Closed)
                    </span>
                  </p>
                </div>
              </div>

            </div>

      </div>
        </section>
      </main>
    </div>
  );
}
