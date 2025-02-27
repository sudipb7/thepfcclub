import React from "react";

import { Faq } from "@/components/faq";
import { Blog } from "@/components/blog";
import { Hero } from "@/components/hero";
import { Coaches } from "@/components/coaches";
import { Results } from "@/components/results";
import { Features } from "@/components/features";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Coaches />
      <Blog />
      <Results />
      <Faq />
    </main>
  );
}
