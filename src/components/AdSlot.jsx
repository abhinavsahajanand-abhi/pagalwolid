import { useEffect, useRef } from "react";

export default function AdSlot({ divId, size = "banner", className = "" }) {
  const divRef = useRef(null);
  const refreshedInViewRef = useRef(false);

  useEffect(() => {
    if (!divId || typeof window === "undefined") return;
    const runDisplay = () => {
      try {
        if (!window.googletag || !divRef.current || !document.getElementById(divId)) return;
        const doDisplay = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              try {
                window.googletag.cmd.push(function () {
                  window.googletag.display(divId);
                });
              } catch (e) {
                console.warn("Ad display error:", e);
              }
            });
          });
        };
        if (window.googletag.apiReady) {
          doDisplay();
        } else {
          window.googletag = window.googletag || { cmd: [] };
          window.googletag.cmd.push(doDisplay);
        }
      } catch (e) {
        console.warn("Ad display error:", e);
      }
    };
    runDisplay();
  }, [divId]);

  useEffect(() => {
    if (!divId || !divRef.current || typeof window === "undefined" || !window.googletag) return;
    const el = divRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || refreshedInViewRef.current) return;
        refreshedInViewRef.current = true;
        try {
          window.googletag.cmd.push(function () {
            const pubads = window.googletag.pubads();
            if (!pubads) return;
            const slots = pubads.getSlots();
            const slot = slots.find((s) => s.getSlotElementId() === divId);
            if (slot) pubads.refresh([slot]);
          });
        } catch (_) {}
      },
      { rootMargin: "50px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [divId]);

  const isRectangle = size === "rectangle";
  const sizeClass = isRectangle
    ? "w-full max-w-full min-w-0 min-h-[280px] mx-auto overflow-visible sm:max-w-[336px]"
    : "w-full max-w-full min-w-0 min-h-[90px] sm:min-h-[280px] mx-auto overflow-visible sm:max-w-[728px]";

  return (
    <div className="w-full max-w-full min-w-0 overflow-visible flex flex-col items-center">
      <p className="text-xs text-gray-500 text-center mb-1">Advertisement</p>
      <div
        ref={divRef}
        id={divId}
        className={`${sizeClass} ${className}`}
        style={{ overflow: "visible", maxWidth: "100%" }}
      />
    </div>
  );
}
