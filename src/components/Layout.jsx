import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import AdSlot from "./AdSlot.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      {/* d1 – full width on mobile so ad is not cut off; contained on larger screens */}
      <div className="w-full max-w-full overflow-visible py-2 px-0 sm:container sm:mx-auto sm:px-6 md:px-12">
        <AdSlot divId="div-gpt-ad-1771592250497-0" size="banner" />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* d2 – above footer; min-height so slot has size when GPT runs */}
      <div className="w-full max-w-full overflow-visible min-h-[120px] py-4 px-0 sm:container sm:mx-auto sm:px-6 md:px-12">
        <AdSlot divId="div-gpt-ad-1771592286821-0" size="banner" />
      </div>
      <Footer />
    </div>
  );
}
