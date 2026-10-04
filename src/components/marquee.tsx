export function Marquee({
  children,
  duration = 40,
  reverse = false,
}: {
  children: React.ReactNode;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
        <div aria-hidden="true" className="flex gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
