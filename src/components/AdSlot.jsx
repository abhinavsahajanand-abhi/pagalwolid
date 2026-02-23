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
    ? "w-[300px] min-h-[250px]"
    : "w-full max-w-[728px] min-h-[90px] mx-auto";

  return (
    <div
      ref={divRef}
      id={divId}
      className={`${sizeClass} ${className}`}
      style={{ minHeight: isRectangle ? 250 : 90 }}
    />
  );
}
