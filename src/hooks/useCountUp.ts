import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLElement>(null);
  const inView = useInView(elementRef as React.RefObject<Element>, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { count, ref: elementRef };
}
