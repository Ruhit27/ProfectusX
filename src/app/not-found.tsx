import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <div className="px-4 pb-32 pt-48 text-center">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 text-[38px] font-bold leading-[1.1] tracking-[-0.04em] text-heading">Page not found</h1>
      <p className="mt-4 text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-10">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </div>
  );
}
