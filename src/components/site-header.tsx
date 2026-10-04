"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Logo } from "./logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-[1449px] items-center justify-between rounded-xl border border-line bg-[rgb(13_13_13/0.5)] p-3 backdrop-blur-[10px]">
        <Logo />
        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-heading transition hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/quote" variant="glow">
            Get In Touch
          </ButtonLink>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 text-heading md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d={open ? "M6 6l12 12M18 6 6 18" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mx-auto mt-2 flex max-w-[1449px] flex-col gap-1 rounded-xl border border-line bg-[rgb(13_13_13/0.9)] p-3 backdrop-blur-[10px] md:hidden"
        >
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 font-medium text-heading hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-1" onClick={() => setOpen(false)}>
            <ButtonLink href="/quote" variant="glow">
              Get In Touch
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
