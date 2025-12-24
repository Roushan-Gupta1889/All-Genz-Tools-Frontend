import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures hash navigation (/#section) scrolls to the target element in SPA routing.
 */
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // No hash: scroll to top on route change
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace("#", "");
    let attempts = 0;

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < 10) window.setTimeout(scroll, 60);
    };

    // Let the next route paint first
    window.setTimeout(scroll, 0);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
