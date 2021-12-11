import { useEffect } from "react";
// https://usehooks.com/
export default function useDetectClickOut(ref, handler) {
  useEffect(() => {
    const listener = (eve) => {
      if (!ref.current || ref.current.contains(eve.target)) {
        return;
      }
      handler(eve);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
