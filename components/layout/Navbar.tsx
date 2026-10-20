"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig, navItems } from "@/utils/site";
import { cn } from "@/utils/cn";

const MOBILE_BREAKPOINT = "(min-width: 1024px)";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  // Close the mobile panel when the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra paint of the open menu.
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on Escape and when resizing up to desktop.
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const desktopQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const onBreakpointChange = () => {
      if (desktopQuery.matches) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onBreakpointChange);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        isScrolled || isMenuOpen
          ? "border-line bg-base/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="page-shell flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-md"
          aria-label={`${siteConfig.name} — home`}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg border border-accent/25 bg-accent/10 font-mono text-sm font-semibold text-accent"
          >
            NI
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">
              {siteConfig.name}
            </span>
            <span className="hidden text-[11px] text-slate-500 sm:block">
              {siteConfig.headline}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative inline-flex h-9 items-center rounded-lg px-3.5 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-white"
                    : "text-slate-400 hover:text-white",
                )}
              >
                {item.name}
                {isActive(item.href) ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-[13px] h-px bg-accent"
                  />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.links.cv}
            download
            className="inline-flex h-9 items-center rounded-lg border border-line px-3.5 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
          >
            Résumé
          </a>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-base transition-colors hover:bg-accent-soft hover:text-base"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-lg border border-line text-slate-300 transition-colors hover:text-white lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="size-5"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!isMenuOpen}
        className="border-t border-line bg-surface lg:hidden"
      >
        <ul className="page-shell flex flex-col py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center rounded-lg px-3 text-[15px] transition-colors",
                  isActive(item.href)
                    ? "bg-accent/10 text-accent"
                    : "text-slate-400 hover:bg-surface-raised hover:text-white",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="page-shell flex gap-3 pb-5">
          <a
            href={siteConfig.links.cv}
            download
            className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-line text-sm text-slate-300"
          >
            Résumé
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 flex-1 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-base"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
