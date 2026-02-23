import { Link } from "react-router-dom";

/**
 * Link to product page. Interstitial ad shows only on first visit to index, not on product click.
 */
export default function ProductLink({ productId, children, className = "" }) {
  return (
    <Link to={`/product/${productId}`} className={className}>
      {children}
    </Link>
  );
}
