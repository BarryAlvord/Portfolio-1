import { useEffect, useState } from "react";

const useDeviceWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWitdh = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWitdh);
    return () => window.removeEventListener("resize", handleWitdh);
  }, []);
  return width;
};

export default useDeviceWidth;
