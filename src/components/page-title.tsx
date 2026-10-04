// Large page title fading from white to grey, as on the live Case Study and Post pages.
export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="bg-[linear-gradient(180deg,rgb(252,252,250)_0%,rgb(140,140,140)_100%)] bg-clip-text text-[36px] font-medium leading-[1.1] tracking-[-0.04em] text-transparent sm:text-[48px]">
      {children}
    </h1>
  );
}
