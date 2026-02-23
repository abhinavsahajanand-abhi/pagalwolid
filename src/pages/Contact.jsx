import { useState } from 'react';

function IconEmail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-indigo-600">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-indigo-600">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-indigo-600">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ fullName: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: send form data
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-1 px-4 py-10 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-gray-600">
            We're here to help! At Pagalworlid, customer satisfaction is our priority. If you have any questions regarding your order or our products, please feel free to reach out.
          </p>
        </div>

        {/* Two columns */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left - Form */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-gray-800">Send us a message</h2>
              <p className="mt-1 text-sm text-gray-600">Our support team will respond to your query as soon as possible.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Subject (e.g., Order Status, Refund)"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Message"
                  />
                </div>
                <div className="flex justify-center pt-2">
                  <button type="submit" className="rounded-lg bg-indigo-600 px-8 py-2.5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right - Customer Support Details */}
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-bold text-gray-800">Customer Support Details</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex gap-3">
                    <IconEmail />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-sm text-gray-600">sales@pagalworlid.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <IconPhone />
                    <div>
                      <p className="font-medium text-gray-800">Phone / WhatsApp</p>
                      <p className="text-sm text-gray-600">+91 78741 35575</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <IconClock />
                    <div>
                      <p className="font-medium text-gray-800">Support Hours</p>
                      <p className="text-sm text-gray-600">Monday to Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        <a href="#" className="text-blue-600 hover:underline">Email & Messaging</a> (Sunday & Public Holiday Closed)
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-800">Registered Office Address</h3>
                <p className="mt-1 text-sm text-gray-600">
                  410, Canopus Mall, Ghod Dod Road, Surat, Gujarat - 395007 India
                </p>

                <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <h3 className="font-bold text-gray-800">Business Information</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    <li><strong>Legal Name:</strong> BAKULBHAI DURLABHBHAI DOMADIYA HUF</li>
                    <li><strong>Nature:</strong> Clothing & Fashion E-commerce</li>
                    <li><strong>GST Number:</strong> 24AAHHBOBOBL1ZL</li>
                  </ul>
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-800">How Can We Help You?</h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600">
                  <li>Order status and delivery updates</li>
                  <li>Product-related inquiries</li>
                  <li>Returns and refunds</li>
                  <li>Payment and billing support</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  We operate as a registered Indian business committed to transparency. For more info, please review our Privacy Policy and Terms & Conditions.
                </p>
                <button type="button" className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Mobile Apps & Add-Ons
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-800">Thank You for Reaching Out</h2>
          <p className="mt-2 text-gray-600">
            Thank you for choosing Pagalworlid. We appreciate your trust and look forward to assisting you.
          </p>
        </div>
      </main>
    </div>
  );
}
