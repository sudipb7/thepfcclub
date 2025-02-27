"use client";

import { useState } from "react";
import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link";

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
      name: "Akhila Vadrevu",
      price: 7499,
      discountedPrice: 4299,
      img: "https://thepfc.club/cdn/shop/files/PFCCoachAkhila.png?v=1691560438&width=720",
    },
    {
      name: "Himanshu Soni",
      price: 7499,
      discountedPrice: 4299,
      img: "https://thepfc.club/cdn/shop/files/PFCClubCoachHimanshu_8eb76b37-c43c-4760-a2b6-c0af6e039e09.png?v=1691084449",
    },
    {
      name: "Ajeenkya Patwordhan",
      price: 6999,
      discountedPrice: 299,
      img: "https://thepfc.club/cdn/shop/files/Ajeenkya.jpg?v=1717268158&width=720",
    },
    {
      name: "Ashutosh Ray",
      price: 7499,
      discountedPrice: 4299,
      img: "https://thepfc.club/cdn/shop/files/AshutoshRay_7faac3a6-5feb-4512-bc22-4d13c8b4100d.jpg?v=1715617745&width=720",
    },
    {
      name: "Rayshi Sood",
      price: 7499,
      discountedPrice: 299,
      img: "https://thepfc.club/cdn/shop/files/RayshiSood.jpg?v=1717400277&width=720",
    },
  ],
  "Essential+": [
    {
      name: "Somesh Pal",
      price: 11999,
      discountedPrice: 499,
      img: "https://thepfc.club/cdn/shop/files/somesh-pal-best-male-personal-fitness-trainer-online-in-india-pfc_3217950d-f877-4aff-aaa7-4a71d9efa4b6.png?v=1691088932",
    },
    {
      name: "Smruti Sahoo",
      price: 7599,
      discountedPrice: 499,
      img: "https://thepfc.club/cdn/shop/files/PFCClubCoachSmruti.jpg?v=1711447517&width=720",
    },
    {
      name: "Amit Suresh Thorat",
      price: 11999,
      discountedPrice: 4299,
      img: "https://thepfc.club/cdn/shop/files/Amit-Suresh-Thorat-free-male-fitness-personal-trainer-pfc-club-gym-workout-exercies_f3e57947-c900-431b-b3e3-fdb0d8d2b422.png?v=1691089110",
    },
    {
      name: "Vivek Gupta",
      price: null,
      discountedPrice: 499,
      img: "https://thepfc.club/cdn/shop/files/FacebookAd_50dc0308-6d05-4dc4-b8f3-acc59fcfdb41.png?v=1729229778&width=720",
    },
    {
      name: "Sujata Pal",
      price: null,
      discountedPrice: 499,
      img: "https://thepfc.club/cdn/shop/files/Sujata.jpg?v=1733637788&width=720",
    },
    {
      name: "Karunnesh Sharma",
      price: null,
      discountedPrice: 499,
      img: "https://thepfc.club/cdn/shop/files/Karunesh.jpg?v=1735137672&width=720",
    },
  ],
  Executive: [
    {
      name: "Ishaan Jain",
      price: 15999,
      discountedPrice: 799,
      img: "https://thepfc.club/cdn/shop/files/PFCClubCoachIshaan.jpg?v=1710138111&width=720",
    },
    {
      name: "Dipti Sardeshpande",
      price: 11999,
      discountedPrice: 799,
      img: "https://thepfc.club/cdn/shop/files/PFCClubCoachDipti_84a83df1-f8c6-4212-b8ac-f1cb7dc4a57b.png?v=1691084859",
    },
    {
      name: "Sagar Sengupta",
      price: 15999,
      discountedPrice: 1699,
      img: "https://thepfc.club/cdn/shop/files/SagarSenguptaPFCClub.jpg?v=1716969478&width=720",
    },
    {
      name: "Siddhartha Choudhury",
      price: 15999,
      discountedPrice: 15999,
      img: "https://thepfc.club/cdn/shop/files/PFCClubCoachSiddartha.jpg?v=1709040980&width=720",
    },
    {
      name: "Deepak R",
      price: null,
      discountedPrice: 799,
      img: "https://thepfc.club/cdn/shop/files/DeepakR.jpg?v=1734516466&width=720",
    },
    {
      name: "Kamal Saini",
      price: 22499,
      discountedPrice: 799,
      img: "https://thepfc.club/cdn/shop/files/FacebookAd.png?v=1698213383&width=720",
    },
  ],
  "Executive+": [
    {
      name: "Rashmi Agarwal",
      price: 22499,
      discountedPrice: 1299,
      img: "https://thepfc.club/cdn/shop/files/Rashmi-Agarwal-personal-female-trainer-in-india-usa-vietnam-canada-pfc_b537751a-2ea1-4a82-aba7-10a35a08cea8.png?v=1691077952",
    },
    {
      name: "Yash Rathod",
      price: 24999,
      discountedPrice: 1599,
      img: "https://thepfc.club/cdn/shop/files/yash-rathod-male-fitness-personal-trainer-india-usa-vietnam-canada-pfc-club_b3f760fc-f0aa-4343-9855-25cd2bbb88a4.png?v=1691078755",
    },
    {
      name: "Dr Manmeet Kaur",
      price: 24999,
      discountedPrice: 1599,
      img: "https://thepfc.club/cdn/shop/files/PFCClubCoachManmeetKaur.jpg?v=1710329021&width=720",
    },
  ],
  Elite: [
    {
      name: "Sumit Vasvani",
      price: null,
      discountedPrice: 1699,
      img: "https://thepfc.club/cdn/shop/files/PFCClubCoachSumit_bb046147-ed7c-4b93-bc25-cd6a6eda13bd.png?v=1691074559&width=720",
    },
    {
      name: "Hardik Bonthu",
      price: null,
      discountedPrice: 1699,
      img: "https://thepfc.club/cdn/shop/files/Hardik-Bonthu-best-personal-male-trainer-in-pfc_3eb2ec3e-e4e3-493d-81d9-ee36c3f1d4d6.png?v=1691075634",
    },
    {
      name: "Priyanka Lahiri",
      price: null,
      discountedPrice: 1699,
      img: "https://thepfc.club/cdn/shop/files/Priyanka-Lahiri-special-wellness-coach-in-india-usa-canada-vietnam-pfc_67f894e0-3226-4393-b147-32b07bd38914.png?v=1691075952",
    },
    {
      name: "Satej Gohel",
      price: 54999,
      discountedPrice: 1699,
      img: "https://thepfc.club/cdn/shop/files/Satej-Gohel-muscle-gainer-weightlifting-coach-pfc_575af576-84c8-4836-a3cb-95c9646dedab.png?v=1691078407",
    },
    {
      name: "Sagar Sengupta",
      price: 15999,
      discountedPrice: 1699,
      img: "https://thepfc.club/cdn/shop/files/SagarSenguptaPFCClub.jpg?v=1716969478&width=720",
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
      <div className="mt-8 sm:mt-10 md:mt-12 text-center">
        <Link
          href="/coaches"
          className="inline-flex items-center justify-center px-6 py-2.5 font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
        >
          View all coaches
        </Link>
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
  price: number | null;
  discountedPrice: number;
  img: string;
}) {
  return (
    <div className="rounded-md shadow-sm border p-2.5 w-44 cursor-pointer">
      {/* eslint-disable-next-line */}
      <img src={img} alt={name} className="w-full object-cover rounded" />
      <div className="space-y-0.5 mt-2">
        <h3 className="font-semibold text-neutral-800">{name}</h3>
        <p className="text-sm font-medium text-neutral-600">
          ₹{discountedPrice}{" "}
          <span className="text-xs line-through text-neutral-400">
            ₹{price}
          </span>
        </p>
      </div>
    </div>
  );
}
