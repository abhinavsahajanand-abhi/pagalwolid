import { useEffect, useRef, useState } from "react";

const INTERSTITIAL_DIV_ID = "div-gpt-ad-1771592422927-0";

export default function InterstitialAd({ isOpen, onClose }) {
  const containerRef = useRef(null);
  const [adFilled, setAdFilled] = useState(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;
    setAdFilled(false);
  }, [isOpen]);

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

  const timeoutRef = useRef(null);
  const handlerRef = useRef(null);
  useEffect(() => {
    if (!isOpen || typeof window === "undefined" || !window.googletag) return;
    handlerRef.current = (e) => {
      if (e.slot.getSlotElementId() !== INTERSTITIAL_DIV_ID) return;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (e.isEmpty) {
        onCloseRef.current();
      } else {
        setAdFilled(true);
      }
    };
    const handler = (e) => handlerRef.current?.(e);
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      onCloseRef.current();
    }, 1500);
    window.googletag.cmd.push(function () {
      const pubads = window.googletag.pubads();
      if (pubads) pubads.addEventListener("slotRenderEnded", handler);
    });
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      try {
        window.googletag?.pubads?.()?.removeEventListener("slotRenderEnded", handler);
      } catch (_) {}
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const showPopup = adFilled;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-transparent p-2 sm:p-4 min-h-0 overflow-hidden transition-opacity duration-200 ${
        showPopup ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Advertisement"
      aria-hidden={!showPopup}
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
