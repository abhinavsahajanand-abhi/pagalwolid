import { useEffect, useRef } from "react";

const INTERSTITIAL_DIV_ID = "div-gpt-ad-1771592422927-0";

export default function InterstitialAd({ isOpen, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;
    const runDisplay = () => {
      try {
        if (window.googletag && document.getElementById(INTERSTITIAL_DIV_ID)) {
          window.googletag.cmd.push(function () {
            window.googletag.display(INTERSTITIAL_DIV_ID);
          });
        }
      } catch (e) {
        console.warn("Interstitial ad display error:", e);
      }
    };
    if (window.googletag && window.googletag.apiReady) {
      runDisplay();
    } else {
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(runDisplay);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Advertisement"
    >
      <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-[90vw] max-h-[90vh] flex items-center justify-center min-w-[320px] min-h-[300px]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-lg"
          aria-label="Close"
        >
          ×
        </button>
        <div
          id={INTERSTITIAL_DIV_ID}
          className="min-w-[320px] min-h-[50px]"
          style={{ minHeight: 50 }}
        />
      </div>
    </div>
  );
}
