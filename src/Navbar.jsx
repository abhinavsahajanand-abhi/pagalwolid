import { useState } from "react";
import { Link } from "react-router-dom";

const desktopNavLinkClass =
  "text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium block py-2 md:py-0";

const sidebarLinkClass =
  "block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-md font-medium transition-colors duration-300";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Header Section - matches your HTML, responsive */}
      <header className="bg-white shadow-lg sticky top-0 z-50 rounded-b-lg">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
          {/* Logo/Site Title */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight"
          >
            Pagalworlid
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link to="/" className={desktopNavLinkClass}>
              Home
            </Link>
            <Link to="/faq" className={desktopNavLinkClass}>
              FAQ
            </Link>
            <Link to="/about" className={desktopNavLinkClass}>
              About
            </Link>
            <Link to="/contact" className={desktopNavLinkClass}>
              Contact
            </Link>
            <Link to="/policy" className={desktopNavLinkClass}>
              Policy
            </Link>
            <Link to="/return-refund" className={desktopNavLinkClass}>
              Return & Refund
            </Link>
            <Link to="/shipping-policy" className={desktopNavLinkClass}>
              Shipping Policy
            </Link>
            <Link to="/terms-and-conditions" className={desktopNavLinkClass}>
              Terms & Conditions
            </Link>
          </nav>

          {/* Cart + Mobile Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="relative p-1 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer border-0 bg-transparent"
              aria-label="Refresh page"
            >
              <svg
                className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.19.982.707.982H19.5a1 1 0 00.993-.883L21 11H7m-2 4h14M7 19a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center min-w-[1rem]">
                0
              </span>
            </button>

            {/* Mobile menu button - visible only on md and below */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar menu - matches your aside, slides in from right on mobile */}
      <aside
        id="sidebar-menu"
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Menu</h3>
          <button
            id="close-sidebar"
            type="button"
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6 space-y-2">
          <Link to="/" className={sidebarLinkClass} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/faq" className={sidebarLinkClass} onClick={closeMenu}>
            FAQ
          </Link>
          <Link to="/about" className={sidebarLinkClass} onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/contact" className={sidebarLinkClass} onClick={closeMenu}>
            Contact Us
          </Link>
          <Link to="/policy" className={sidebarLinkClass} onClick={closeMenu}>
            Policy
          </Link>
          <Link to="/return-refund" className={sidebarLinkClass} onClick={closeMenu}>
            Return Policy
          </Link>
          <Link to="/shipping-policy" className={sidebarLinkClass} onClick={closeMenu}>
            Shipping Policy
          </Link>
          <Link to="/terms-and-conditions" className={sidebarLinkClass} onClick={closeMenu}>
            Terms & Conditions
          </Link>
        </nav>

        <h2 className="text-lg md:text-xl font-bold text-gray-800 px-6 pb-2">Shop by Category</h2>

        <nav id="category-nav" className="flex-grow px-6 pb-6 space-y-2 overflow-y-auto">
          <Link to="/" className={sidebarLinkClass} onClick={closeMenu}>
            All Products
          </Link>
        </nav>
      </aside>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          role="button"
          tabIndex={0}
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Escape" && closeMenu()}
          className="fixed inset-0 bg-black/40 z-40"
          aria-label="Close menu"
        />
      )}
    </>
  );
}
