import { cn } from "../lib/utils";
import React from "react";

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className = "",
}) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        pauseOnHover &&
          "hover:[&_.marquee-track]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className={cn(
          "marquee-track flex w-max shrink-0 items-center gap-6 md:gap-8 will-change-transform"
        )}
        style={{
          animationName: "marquee-scroll",
          animationDuration: "var(--marquee-duration, var(--duration, 20s))",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {React.Children.map(children, (child, idx) => (
          <div className="shrink-0" key={`a-${idx}`}>
            {child}
          </div>
        ))}
        {React.Children.map(children, (child, idx) => (
          <div className="shrink-0" key={`b-${idx}`}>
            {child}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}
