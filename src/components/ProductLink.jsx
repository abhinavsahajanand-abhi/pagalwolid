import { Link, useNavigate } from "react-router-dom";
import { useInterstitial } from "../context/InterstitialContext.jsx";

/**
 * Link to product page. On localhost: go directly. On live: show interstitial ad if it loads.
 */
export default function ProductLink({ productId, children, className = "" }) {
  const { showForProduct } = useInterstitial();
  const navigate = useNavigate();
  const isLocalhost =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

  const handleClick = (e) => {
    e.preventDefault();
    if (isLocalhost) {
      navigate(`/product/${productId}`);
    } else {
      showForProduct(productId);
    }
  };

  return (
    <Link to={`/product/${productId}`} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
