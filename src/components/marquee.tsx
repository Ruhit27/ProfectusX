export function Marquee({
  children,
  duration = 40,
  reverse = false,
  vertical = false,
  className = "",
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
  vertical?: boolean;
  className?: string;
}) {
  const axis = vertical ? "flex-col animate-marquee-y" : "w-max animate-marquee-x";
  return (
    <div className={`group overflow-hidden ${vertical ? "fade-y" : "fade-x"} ${className}`}>
      <div
        className={`flex gap-4 group-hover:[animation-play-state:paused] ${axis}`}
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className={`flex shrink-0 gap-4 ${vertical ? "flex-col" : ""}`}>{children}</div>
        <div aria-hidden="true" className={`flex shrink-0 gap-4 ${vertical ? "flex-col" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
