import { useEffect, useRef, useState } from "react";

export function BlurFade({ children, className = "", delay = 0 }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const baseClasses =
    "transition-all duration-700 ease-out will-change-transform will-change-opacity will-change-filter";
  const hiddenClasses = "opacity-0 translate-y-6 blur-sm";
  const visibleClasses = "opacity-100 translate-y-0 blur-0";

  const classes = [
    baseClasses,
    isVisible ? visibleClasses : hiddenClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      className={classes}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
