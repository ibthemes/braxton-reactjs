

import { useEffect, useRef } from "react";

interface ParallaxBackgroundProps {
  speed?: number;
}

export default function ParallaxBackground({
  speed = 0.95,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    const yPos = (scrollTop - offsetTop) * speed;
    ref.current.style.transform = `translateY(${yPos}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ref} id="imageBackground" className="image-background" />;
}
