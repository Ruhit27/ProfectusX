import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-[1040px] flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted sm:flex-row">
        <p>
          ©{new Date().getFullYear()} {site.name} All right reserved.
        </p>
        <p>{site.credit}</p>
      </div>
    </footer>
  );
}
