"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Plans", href: "/plans" },
      { label: "Coaches", href: "/coaches" },
      { label: "Transformations", href: "/transformations" },
      { label: "Tools", href: "/tools" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Youtube, href: "https://youtube.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 md:px-8">
        <div className="grid gap-8 sm:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4 col-span-2 md:col-span-3 lg:col-span-2">
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
            <p className="text-sm font-medium text-neutral-600 max-w-xs">
              Subscribe to our newsletter to get updates on new features,
              offers, and fitness tips.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm rounded-md border outline-none focus-visible:ring-2 focus-visible:ring-orange-500/20 focus-visible:border-orange-500 max-w-xs transition-all"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-neutral-600 hover:text-neutral-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3 mt-12 pt-12 border-t">
          <div className="space-y-3">
            <h3 className="font-heading font-semibold">Contact Information</h3>
            <div className="space-y-2 text-sm font-medium text-neutral-600">
              <p className="flex items-center gap-2">
                <Phone className="size-4" />
                <Link
                  href="tel:+919970163396"
                  className="hover:text-neutral-800 transition-colors"
                >
                  +91 99701 63396
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4" />
                <Link
                  href="mailto:contact@projectfitco.com"
                  className="hover:text-neutral-800 transition-colors"
                >
                  contact@projectfitco.com
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="size-4 shrink-0 mt-1" />
                <span>
                  123 Fitness Street, Healthy Layout
                  <br />
                  Wellness City - 560001
                </span>
              </p>
              <p>GST: 29ABCDE1234F1Z5</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading font-semibold">Working Hours</h3>
            <div className="space-y-2 text-sm font-medium text-neutral-600">
              <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p>Saturday: 7:00 AM - 8:00 PM</p>
              <p>Sunday: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-heading font-semibold">Download Our App</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </Link>
              <Link
                href="#"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line */}
                <img
                  src="/play-store-badge.png"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-12 border-t text-sm">
          <div className="text-neutral-600">
            © {new Date().getFullYear()} The PFC Club. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-800 transition-colors"
              >
                <social.icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
