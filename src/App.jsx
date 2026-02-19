import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import IndexPage from './index.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import ReturnRefund from './pages/ReturnRefund.jsx'
import About from './pages/About.jsx'
import Policy from './pages/PrivacyPolicy.jsx'
import ShippingPolicy from './pages/ShippingPolicy.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import Detail1 from "./Product/detail1";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/return-refund" element={<ReturnRefund />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/product/:id" element={<Detail1 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </>
  )
}

export default App
