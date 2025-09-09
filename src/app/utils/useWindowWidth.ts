"use client";

import { useEffect, useState } from "react";

const useWindowWidth = (): number | undefined => {
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useWindowWidth;