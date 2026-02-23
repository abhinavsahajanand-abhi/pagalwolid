import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import AdSlot from "./AdSlot.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      {/* d1 – below header, every page; responsive container */}
      <div className="w-full max-w-[100vw] overflow-x-hidden container mx-auto px-3 sm:px-6 md:px-12 py-2">
        <AdSlot divId="div-gpt-ad-1771592250497-0" size="banner" />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* d2 – above footer, every page; responsive container */}
      <div className="w-full max-w-[100vw] overflow-x-hidden container mx-auto px-3 sm:px-6 md:px-12 py-4">
        <AdSlot divId="div-gpt-ad-1771592286821-0" size="banner" />
      </div>
      <Footer />
    </div>
  );
}
