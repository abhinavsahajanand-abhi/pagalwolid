import { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InterstitialAd from "../components/InterstitialAd.jsx";

const InterstitialContext = createContext(null);

export function useInterstitial() {
  const ctx = useContext(InterstitialContext);
  if (!ctx) throw new Error("useInterstitial must be used inside InterstitialProvider");
  return ctx;
}

export function InterstitialProvider({ children }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingProductId, setPendingProductId] = useState(null);

  const showOnIndex = useCallback(() => {
    setPendingProductId(null);
    setIsOpen(true);
  }, []);

  const showForProduct = useCallback((productId) => {
    setPendingProductId(productId);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    const id = pendingProductId;
    setIsOpen(false);
    setPendingProductId(null);
    if (id != null) {
      navigate(`/product/${id}`);
    }
  }, [pendingProductId, navigate]);

  return (
    <InterstitialContext.Provider value={{ showOnIndex, showForProduct, close }}>
      {children}
      <InterstitialAd isOpen={isOpen} onClose={close} />
    </InterstitialContext.Provider>
  );
}
