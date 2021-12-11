import { useEffect } from "react";

export default function useHandleScroll(handler) {
  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [handler]);
}
