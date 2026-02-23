import { useEffect, useRef } from "react";

/**
 * GPT ad slot – renders the div with the given divId and calls googletag.display when mounted.
 * divId must match the id used in googletag.defineSlot (in index.html).
 */
export default function AdSlot({ divId, size = "banner", className = "" }) {
  const divRef = useRef(null);

  useEffect(() => {
    if (!divId || typeof window === "undefined") return;
    const runDisplay = () => {
      try {
        if (window.googletag && divRef.current && document.getElementById(divId)) {
          window.googletag.cmd.push(function () {
            window.googletag.display(divId);
          });
        }
      } catch (e) {
        console.warn("Ad display error:", e);
      }
    };
    if (window.googletag && window.googletag.apiReady) {
      runDisplay();
    } else {
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(runDisplay);
    }
  }, [divId]);

  const isRectangle = size === "rectangle";
  const sizeClass = isRectangle
    ? "w-full max-w-[300px] min-h-[250px] mx-auto overflow-visible"
    : "w-full max-w-[728px] min-h-[280px] mx-auto overflow-visible";

  return (
    <div className="w-full min-w-0 overflow-visible">
      <p className="text-xs text-gray-500 text-center mb-1">Advertisement</p>
      <div
        ref={divRef}
        id={divId}
        className={`${sizeClass} ${className}`}
        style={{ overflow: "visible" }}
      />
    </div>
  );
}
