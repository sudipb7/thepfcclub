"use client";

import { useState } from "react";
import { Marquee } from "@/components/magicui/marquee";

const TIERS = [
  {
    title: "Essential",
    description:
      "Get started with fundamental coaching for sustainable fitness.",
  },
  {
    title: "Essential+",
    description: "Enhanced guidance with added support for better results.",
  },
  {
    title: "Executive",
    description:
      "Advanced strategies for professionals with performance-driven goals.",
  },
  {
    title: "Executive+",
    description:
      "Personalized coaching with deeper insights and progress tracking.",
  },
  {
    title: "Elite",
    description:
      "Premium, one-on-one coaching for the highest level of training and results.",
  },
];

const COACHES = {
  Essential: [
    {
      name: "Jack",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Sarah",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/sarah",
    },
    {
      name: "Marcus",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/marcus",
    },
    {
      name: "Nina",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/nina",
    },
    {
      name: "Carlos",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/carlos",
    },
    {
      name: "Sophia",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/sophia",
    },
    {
      name: "Ryan",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/ryan",
    },
    {
      name: "Maya",
      price: "$99",
      discountedPrice: "$79",
      img: "https://avatar.vercel.sh/maya",
    },
  ],
  "Essential+": [
    {
      name: "Mike",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/mike",
    },
    {
      name: "Emma",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/emma",
    },
    {
      name: "Daniel",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/daniel",
    },
    {
      name: "Olivia",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/olivia",
    },
    {
      name: "Thomas",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/thomas",
    },
    {
      name: "Isabella",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/isabella",
    },
    {
      name: "Lucas",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/lucas",
    },
    {
      name: "Sophie",
      price: "$149",
      discountedPrice: "$129",
      img: "https://avatar.vercel.sh/sophie",
    },
  ],
  Executive: [
    {
      name: "David",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/david",
    },
    {
      name: "Lisa",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/lisa",
    },
    {
      name: "Michael",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/michael",
    },
    {
      name: "Jennifer",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/jennifer",
    },
    {
      name: "William",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/william",
    },
    {
      name: "Elizabeth",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/elizabeth",
    },
    {
      name: "Christopher",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/christopher",
    },
    {
      name: "Samantha",
      price: "$249",
      discountedPrice: "$199",
      img: "https://avatar.vercel.sh/samantha",
    },
  ],
  "Executive+": [
    {
      name: "Alex",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/alex",
    },
    {
      name: "Rachel",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/rachel",
    },
    {
      name: "Jonathan",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/jonathan",
    },
    {
      name: "Victoria",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/victoria",
    },
    {
      name: "Benjamin",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/benjamin",
    },
    {
      name: "Natalie",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/natalie",
    },
    {
      name: "Andrew",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/andrew",
    },
    {
      name: "Katherine",
      price: "$349",
      discountedPrice: "$299",
      img: "https://avatar.vercel.sh/katherine",
    },
  ],
  Elite: [
    {
      name: "James",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/james",
    },
    {
      name: "Charlotte",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/charlotte",
    },
    {
      name: "Richard",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/richard",
    },
    {
      name: "Alexandra",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/alexandra",
    },
    {
      name: "Sebastian",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/sebastian",
    },
    {
      name: "Gabriella",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/gabriella",
    },
    {
      name: "Maxwell",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/maxwell",
    },
    {
      name: "Isabella",
      price: "$499",
      discountedPrice: "$449",
      img: "https://avatar.vercel.sh/isabella_elite",
    },
  ],
};

export function Coaches() {
  const [activeTier, setActiveTier] = useState(TIERS[0]);
  const firstRow = COACHES[activeTier.title as keyof typeof COACHES].slice(
    0,
    COACHES[activeTier.title as keyof typeof COACHES].length / 2
  );
  const secondRow = COACHES[activeTier.title as keyof typeof COACHES].slice(
    COACHES[activeTier.title as keyof typeof COACHES].length / 2
  );

  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 py-12 md:px-8 sm:py-16 md:py-20">
      <div className="text-center space-y-2 mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-orange-500 font-heading mx-auto max-w-3xl">
          Expert Coaching Tailored to Your Needs
        </h2>
        <p className="max-sm:text-sm font-medium text-neutral-600 max-w-3xl mx-auto">
          Find the perfect coaching plan to match your goals and lifestyle. From
          foundational guidance to elite-level coaching, our expert trainers
          help you achieve sustainable fitness success.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mx-auto max-w-4xl">
        <div className="space-y-2 flex-1">
          {TIERS.map((tier) => {
            const isActive = activeTier.title === tier.title;
            return (
              <button
                key={tier.title}
                onClick={() => setActiveTier(tier)}
                className={`w-full inline-flex items-center justify-center flex-col px-3 py-1.5 rounded-md border space-y-0.5 transition-colors ${
                  isActive
                    ? "bg-neutral-100 shadow"
                    : "hover:bg-neutral-50 shadow-sm"
                }`}
              >
                <p className="w-full text-start font-medium tracking-tight">
                  {tier.title}
                </p>
                <span className="text-sm w-full text-start text-neutral-600 tracking-tight">
                  {tier.description}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex-1 relative flex overflow-hidden aspect-square">
          <Marquee pauseOnHover vertical className="[--duration:15s]">
            {firstRow.map((row) => (
              <CoachCard key={row.name} {...row} />
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:15s]">
            {secondRow.map((row) => (
              <CoachCard key={row.name} {...row} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
      </div>
    </section>
  );
}

function CoachCard({
  name,
  price,
  discountedPrice,
  img,
}: {
  name: string;
  price: string;
  discountedPrice: string;
  img: string;
}) {
  return (
    <div className="rounded-md shadow-sm border p-2.5 w-44">
      <img
        src={`${img}.png`}
        alt={name}
        className="w-full object-cover rounded"
      />
      <div className="space-y-0.5 mt-2">
        <h3 className="font-semibold text-neutral-800">{name}</h3>
        <p className="text-sm font-medium text-neutral-600">
          {discountedPrice}{" "}
          <span className="text-xs line-through text-neutral-400">{price}</span>
        </p>
      </div>
    </div>
  );
}
