"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/app/favicon.ico'
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

type NavItemType = {
  name: string;
  href: string;
}[]

const navItems: NavItemType = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Tech Stack", href: "/tech-stack" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname()
  // console.log(path);


  return (
    <nav className="sticky top-0 z-1000 w-full border-b border-[rgba(255,255,255,0.08)] bg-[rgba(10, 18, 32, 0.75)] text-white backdrop-blur-xl">
      <div className="mx-auto flex h-19.5 max-w-360 items-center justify-between px-6 sm:px-8 lg:px-14">

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
        <div className="hidden items-center gap-10 lg:flex">
          {
            navItems.map((item, index) => {
              const isActive = path === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative py-2 text-[14px] font-medium transition-colors duration-200 ${isActive
                    ? "text-[#1d96ff]"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  {item.name}

                  {/* Active indicator */}
                  {isActive && (
                    <>
                      <span className="absolute -bottom-1.75 left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-[#1d96ff]" />

                      <span className="absolute -bottom-2.75 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1d96ff] shadow-[0_0_10px_#55acf8]" />
                    </>
                  )}
                </Link>
              )
            })
          }
        </div>

        {/* ──────────── DESKTOP ACTIONS ───────────── */}
        <div className="ml-10 hidden items-center gap-5 lg:flex">

          {/* Let's Connect */}
          <Link
            href="#contact"

          >
            <Button className="group flex items-center gap-2 rounded-full  bg-[#0485F7]  px-7 text-[14px] font-semibold  transition-all duration-200 hover:shadow-[0_0_20px_rgba(181,140,255,0.25)]">
              <span>Let&apos;s Connect</span>
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>


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
        className={`overflow-hidden border-t border-white/20 bg-[#090A0F] transition-all duration-400 lg:hidden ${isMenuOpen
          ? "max-h-125 opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-5 sm:px-8">

          {/* Mobile Navigation */}
          <div className="flex flex-col ">
            {navItems.map((item, index) => {
              const isActive = path === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group relative p-2 text-[14px]  border-b border-white/5 font-medium transition-colors duration-200 ${isActive
                    ? "text-shadow-taupe-200 bg-[#1d96ff] rounded-lg px-4"
                    : "text-white/60 hover:text-white hover:bg-[#1d96ff]/10 rounded-sm"
                    }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Actions */}
          <div className="mt-5 flex items-center gap-3">

            {/* Connect */}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full"
            >
              <Button className="flex w-full items-center justify-center gap-3 rounded-full text-sm font-semibold">
                Let&apos;s Connect
                <ArrowRight />
              </Button>


            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;