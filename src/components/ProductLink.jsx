import { useInterstitial } from "../context/InterstitialContext.jsx";

/**
 * Clicking this shows the interstitial ad, then navigates to the product when closed.
 */
export default function ProductLink({ productId, children, className = "" }) {
  const { showForProduct } = useInterstitial();

  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      onClick={() => showForProduct(productId)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showForProduct(productId);
        }
      }}
    >
      {children}
    </div>
  );
}
