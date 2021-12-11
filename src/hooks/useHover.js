// https://usehooks.com //
import { useState, useEffect, useRef } from "react";

export default function useHover() {
  const [isHover, setHover] = useState(false);
  const ref = useRef(null);
  const MouseOver = () => setHover(true);
  const MouseLeave = () => setHover(false);
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", MouseOver);
      node.addEventListener("mouseout", MouseLeave);
      return () => {
        node.removeEventListener("mouseover", MouseOver);
        node.removeEventListener("mouseout", MouseLeave);
      };
    }
  }, []);
  return [ref, isHover];
}
