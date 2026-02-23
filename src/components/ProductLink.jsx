import { useInterstitial } from "../context/InterstitialContext.jsx";

/**
 * Link to product page. Clicking shows interstitial ad; closing the ad navigates to the product.
 */
export default function ProductLink({ productId, children, className = "" }) {
  const { showForProduct } = useInterstitial();

  const handleClick = (e) => {
    e.preventDefault();
    showForProduct(productId);
  };

  return (
    <a href={`/product/${productId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
