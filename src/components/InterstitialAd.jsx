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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent p-2 sm:p-4 min-h-0 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Advertisement"
      onClick={onClose}
    >
      <div
        className="relative bg-transparent rounded-xl overflow-y-auto overflow-x-hidden max-w-[95vw] w-full sm:max-w-[480px] flex flex-col items-center justify-start min-h-0 py-2 px-2 sm:p-4"
        style={{ maxHeight: "calc(100dvh - 24px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          id={INTERSTITIAL_DIV_ID}
          className="w-full min-w-0 min-h-[200px] sm:min-h-[280px] max-w-[480px] overflow-visible"
          style={{ maxHeight: "calc(100dvh - 80px)" }}
        />
      </div>
    </div>
  );
}
