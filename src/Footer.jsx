export default function Footer() {
  const quickLinks = [
    { label: 'Shop', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/FAQ' },
    { label: 'Contact', href: '/contact' },
    { label: 'Policy', href: '/policy' },
    { label: 'Return Policy', href: '/return-refund' },
    { label: 'Shipping Policy', href: '/shipping-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ];

  return (
    <footer className="bg-white py-8 rounded-t-lg shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Pagalworlid</h4>
            <p className="text-gray-600 leading-relaxed">
              Pagalworlid is an online fashion e-commerce store offering clothing for men and women in India.
            </p>
          </div>

          {/* Quick Links - centered on md and up */}
          <div className="md:text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Pagalworlid. Owned and operated by BAKULBHAI DURLABHBHAI DOMADIYA HUF, India.
          </p>
        </div>
      </div>
    </footer>
  );
}
