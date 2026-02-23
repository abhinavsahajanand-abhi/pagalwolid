const sections = [
  {
    title: 'Ordering & Payment',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: (
          <>
            We accept major credit cards (Visa, Mastercard, American Express), as well as PayPal and Apple Pay. All transactions are securely processed.{' '}
           
          </>
        ),
      },
      {
        q: 'Can I modify or cancel my order?',
        a: 'You can modify or cancel your order within 24 hours of placing it. Please contact us immediately with your order number, and we will do our best to assist you.',
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    items: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping typically takes 3-5 business days within the domestic US. International shipping times vary and can be estimated at checkout.',
      },
      {
        q: 'Do you offer international shipping?',
        a: (
          <>
            Yes, we ship to over 50 countries worldwide. Please note that customs fees and import taxes may apply and are the responsibility of the customer.{' '}
          
          </>
        ),
      },
    ],
  },
  {
    title: 'Returns & Exchanges',
    items: [
      {
        q: 'What is your return policy?',
        a: (
          <>
            We offer a 30-day return policy for unused items in their original packaging. Please see our{' '}
            <a href="#" className="text-blue-600 underline hover:text-blue-700">Return Policy</a>
            {' '}for more details.
          </>
        ),
      },
    ],
  },
];

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-gray-500"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
        <h1 className="text-center text-2xl font-bold text-[#282c3f] sm:text-3xl">
          Frequently Asked Questions
        </h1>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-6 sm:p-8 text-left">
            {sections.map((section, si) => (
              <div key={section.title} className={si > 0 ? 'mt-10' : ''}>
                <h2 className="text-lg font-bold text-[#282c3f] sm:text-xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-2">
                  {section.items.map((item, ii) => (
                    <div
                      key={`${si}-${ii}`}
                      className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0"
                    >
                      <div className="flex w-full items-start justify-between gap-3">
                        <span className="font-bold text-gray-900">{item.q}</span>
                        <ChevronDown />
                      </div>
                      <p className="mt-2 text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
