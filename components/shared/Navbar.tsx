"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/app/favicon.ico'

type NavItemType ={
 name: string;
 href: string;
}[]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems:NavItemType = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-1000 w-full border-b border-white/8 bg-[#090A0F]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-19.5 max-w-360 items-center px-6 sm:px-8 lg:px-14">

        {/* ───────────────── BRAND ───────────────── */}
        <Link
          href={navItems[0]?.href}
          className="group flex shrink-0 items-center gap-3"
        >
          {/* Logo */}
          <div className="flex h-11 w-11 items-center justify-center">
            <Image alt="Nafiul Islam Logo" src={logo} />
          </div>

          {/* Name + Role */}
          <div className="block">
            {/* Name */}
            <p className="text-[16px] font-semibold leading-tight text-white">
              Md. Nafiul Islam
            </p>
            {/* Role shortly */}
            <p className="mt-1 text-[12px] text-white/55">
              Aspiring Full-Stack Developer
            </p>
          </div>
        </Link>

        {/* ───────────── DESKTOP NAVIGATION ───────────── */}
        <div className="ml-auto hidden items-center gap-10 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative py-2 text-[14px] font-medium transition-colors duration-200 ${
                index === 0
                  ? "text-[#B58CFF]"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {item.name}

              {/* Active indicator */}
              {index === 0 && (
                <>
                  <span className="absolute -bottom-4.75 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-[#B58CFF]" />

                  <span className="absolute -bottom-5.75 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#B58CFF] shadow-[0_0_10px_#B58CFF]" />
                </>
              )}
            </Link>
          ))}
        </div>

        {/* ───────────── DESKTOP ACTIONS ───────────── */}
        <div className="ml-10 hidden items-center gap-5 lg:flex">

          {/* Let's Connect */}
          <Link
            href="#contact"
            className="group flex h-12 items-center gap-3 rounded-full bg-[#B58CFF] px-7 text-[14px] font-semibold text-[#0B0712] transition-all duration-300 hover:bg-[#C3A2FF] hover:shadow-[0_0_25px_rgba(181,140,255,0.25)]"
          >
            <span>Let&apos;s Connect</span>

            <svg
              className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* ───────────── MOBILE MENU BUTTON ───────────── */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-[#11131B] lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ───────────────── MOBILE MENU ───────────────── */}
      <div
        className={`overflow-hidden border-t border-white/6] bg-[#090A0F] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 sm:px-8">

          {/* Mobile Navigation */}
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`border-b border-white/6 py-4 text-[15px] font-medium transition-colors ${
                  index === 0
                    ? "text-[#B58CFF]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="mt-5 flex items-center gap-3">

            {/* Connect */}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-12 flex-1 items-center justify-center gap-3 rounded-full bg-[#B58CFF] text-sm font-semibold text-[#0B0712]"
            >
              Let&apos;s Connect

              <svg
                className="h-4.5 w-4.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;