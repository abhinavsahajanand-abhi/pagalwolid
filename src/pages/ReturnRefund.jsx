export default function ReturnRefund() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <main className="flex-1 px-4 py-10">
        <div className="mx-auto max-w-3xl bg-white p-8 shadow-sm rounded-md">

          {/* ================= TITLE ================= */}
          <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Return &amp; Refund Policy</h1>

          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            At Camorex, customer satisfaction is important to us. We strive
            to offer quality products and a smooth shopping experience.
            If you are not completely satisfied with your purchase, we’re here
            to help.
          </p>

          
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          This Return & Refund Policy explains the terms under which returns, replacements, and refunds are accepted.
          </p>

          {/* ================= ELIGIBILITY ================= */}
          <section className="mt-10">
          <h2 class="text-xl font-bold text-gray-800 mb-3">Eligibility for Returns</h2>

            <p className="mt-3 text-sm text-gray-600">
              A product is eligible for return if it meets the following conditions:
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>The return request is raised within 7 days of delivery</li>
              <li>The product is unused, unworn, unwashed, and in its original condition</li>
              <li>Original packaging, tags, and accessories are intact</li>
              <li>The product has not been damaged after delivery</li>
            </ul>

            <p className="mt-3 text-sm italic text-gray-500">
              Returns requested after 7 days from delivery may not be accepted.
            </p>
          </section>

          {/* ================= NON RETURNABLE ================= */}
          <section className="mt-10">
                <h5 className="text-xl font-bold text-gray-800 mb-4">Non-Returnable Items</h5>

            <p className="mt-3 text-sm text-gray-600">
              The following items are not eligible for return or refund:
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>Products damaged due to misuse or negligence</li>
              <li>Items returned without original packaging or tags</li>
              <li>Products marked as non-returnable on the product page</li>
              <li>Innerwear, personal wear items, or clearance sale items (if applicable)</li>
            </ul>
          </section>

          {/* ================= HOW TO REQUEST ================= */}
          <section className="mt-10">
            <h2 class="text-xl font-bold text-gray-800 mb-3">How to Request a Return</h2>

            <p className="mt-3 text-sm text-gray-600">
              To initiate a return, please contact our customer support team with your order details:
            </p>

            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>
                Email:{" "}
                <a
                  href="mailto:sales@pagalworlid.com"
                  className="text-blue-600 hover:underline"
                >
                  sales@pagalworlid.com
                </a>
              </p>
              <p>
                Phone / WhatsApp:{" "}
                <span className="text-blue-600">
                  +91 78741 35575
                </span>
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-600">Please mention:</p>

            <ul className="mt-2 list-disc pl-6 space-y-2 text-sm text-gray-700">
              <li>Order ID</li>
              <li>Product name</li>
              <li>Reason for return</li>
              <li>Images or video (if the product is damaged or incorrect)</li>
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              Our team will review your request and guide you through the next steps.
            </p>
          </section>


          {/* ================= REFUND POLICY ================= */}
          <section className="mt-10">

{/* Main Title */}
    <h2 className="text-lg font-semibold text-gray-900">
    Refund Policy
</h2>

<p className="mt-3 text-sm text-gray-700 leading-relaxed">
  Once the returned product is received and inspected, we will notify you
  regarding the approval or rejection of your refund.
</p>

{/* Refund Timeline */}
<div className="mt-5">
  <p className="text-sm font-semibold text-gray-800">
    Refund Timeline:
  </p>
  <p className="mt-1 text-sm text-gray-700">
    Approved refunds are processed within 5–7 business days after inspection.
  </p>
</div>

{/* Refund Method */}
<div className="mt-5">
  <p className="text-sm font-semibold text-gray-800">
    Refund Method:
  </p>

  <ul className="mt-2 list-disc pl-6 space-y-2 text-sm text-gray-700">
    <li>
      <span className="font-semibold text-gray-800">
        Prepaid Orders:
      </span>{" "}
      Refund will be credited to the original payment method.
    </li>

    <li>
      <span className="font-semibold text-gray-800">
        Cash on Delivery (COD) Orders:
      </span>{" "}
      Refund will be processed via bank transfer or UPI (details will be requested).
    </li>
  </ul>
</div>

</section>



{/* ================= REPLACEMENT POLICY ================= */}
<section className="mt-10">
<h2 class="text-xl font-bold text-gray-800 mb-3">Replacement Policy</h2>

  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
    If you receive a damaged, defective, or incorrect product, you may request a replacement instead of a refund, subject to product availability.
  </p>

  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
    Replacement requests must be raised within 48 hours of delivery with proper proof (images/video).
  </p>
</section>


{/* ================= ORDER CANCELLATION ================= */}
<section className="mt-10">
<h2 class="text-xl font-bold text-gray-800 mb-3">Order Cancellation</h2>

  <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-gray-700">
    <li>
      Orders can be cancelled before dispatch by contacting customer support.
    </li>
    <li>
      Once an order has been shipped, cancellation may not be possible.
    </li>
    <li>
      If cancelled before dispatch, a full refund will be processed.
    </li>
  </ul>
</section>



{/* ================= IMPORTANT NOTES ================= */}
<section className="mt-10">
<h2 class="text-xl font-bold text-gray-800 mb-3">Important Notes</h2>

  <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-gray-700">
    <li>
      Refund amounts will not include any additional services or delivery charges unless the return is due to an error from our side.
    </li>
    <li>
      We reserve the right to refuse returns that do not meet the policy conditions.
    </li>
    <li>
      This policy is subject to change without prior notice.
    </li>
  </ul>
</section>

{/* ================= BUSINESS INFORMATION ================= */}
<section className="mt-12">
<h2 class="text-xl font-bold text-gray-800 mb-3">Business Information</h2>

  <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
    <p>
      <span className="font-medium">Legal Business Name:</span><br />
      BAKULBHAI DURLABHBHAI DOMADIYA HUF
    </p>

    <p className="mt-3">
      <span className="font-medium">GST Number:</span><br />
      24AAHHBOBOBL1ZL
    </p>

    <p className="mt-3">
      <span className="font-medium">Registered Address:</span><br />
      410, Canopus Mall, Ghod Dod Road, Surat, Gujarat – 395007, India
    </p>
  </div>
</section>


{/* ================= NEED HELP ================= */}
<section className="mt-12">

  <h2 class="text-xl font-bold text-gray-800 mb-3">Need Help?</h2>


  {/* Contact Box */}
  <p className="mt-6 text-sm text-gray-600">
    If you have any questions about returns or refunds, please contact us:
  </p>

  <div className="mt-4 rounded-md bg-indigo-50 p-4 text-sm text-gray-700">
    <p>
      📧 <span className="font-medium">Email:</span>{" "}
      <a
        href="mailto:sales@pagalworlid.com"
        className="text-blue-600 hover:underline"
      >
        sales@pagalworlid.com
      </a>
    </p>

    <p className="mt-2">
      📞 <span className="font-medium">Phone / WhatsApp:</span>{" "}
      <span className="text-blue-600">+91 78741 35575</span>
    </p>
  </div>
</section>


      </div>
      </main>
    </div>
  );
}
