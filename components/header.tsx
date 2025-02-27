"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Plans" },
  { href: "/coaches", label: "Coaches" },
  { href: "/transformations", label: "Transformations" },
  { href: "/blog", label: "Blog" },
  { href: "/tools", label: "Tools" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? X : Menu;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 ${
        isScrolled ? "shadow-sm border-b" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-screen-xl h-16 bg-background px-4 md:px-8">
        <div className="relative overflow-hidden h-8 w-16">
          <Image
            src="/logo.png"
            alt="ThePFCClub"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </div>
        <nav className="hidden md:flex items-center gap-x-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? link.href === pathname
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center text-sm font-medium px-3 py-1.5 transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-neutral-600 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-x-1.5">
          <button className="hidden h-9 w-9 md:inline-flex justify-center items-center rounded-md hover:bg-neutral-100 transition-colors">
            <Search className="size-4 shrink-0" />
          </button>
          <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium shadow-sm font-heading text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors">
            Schedule a free call
          </button>
        </div>
        <div className="md:hidden flex items-center gap-x-1.5">
          <button className="h-8 w-8 inline-flex justify-center items-center rounded-md hover:bg-neutral-100 transition-colors">
            <Search className="size-4 shrink-0" />
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="h-8 w-8 inline-flex justify-center items-center rounded-md hover:bg-neutral-100 transition-colors"
          >
            <Icon className="size-4 shrink-0" />
          </button>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ left: "-100%", opacity: 0.4 }}
              animate={{ left: "0", opacity: 1 }}
              exit={{ left: "-100%", opacity: 0.4 }}
              transition={{ duration: 0.15, type: "spring", bounce: 0.1 }}
              className="md:hidden fixed top-16 h-[calc(100dvh-4rem)] inset-x-0 bg-background flex flex-col items-center justify-between p-4"
            >
              <div className="flex flex-col w-full items-center justify-center gap-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? link.href === pathname
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full inline-flex items-center font-medium px-3 py-1.5 transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-neutral-600 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="space-y-1 w-full">
                <button className="w-full inline-flex items-center justify-center px-3 py-1.5 font-medium font-heading text-white bg-orange-500 rounded-md shadow-sm hover:bg-orange-600 transition-colors">
                  Schedule a free call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
