"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_DATA = [
  {
    question: "What do I get in online coaching?",
    answer: `• Weekly Check-ins
• Diet Program customized as per your routine and food likability
• Workout program customized as per equipment availability
• Text support (except Sundays)
• Calls as per schedule (except Sundays)`,
  },
  {
    question: "What do I need to get started?",
    answer: `• A kitchen weighing scale
• A measuring tape
• A mirror
• Some dumbbells at home or a gym subscription, and your will to work out.

Students will be getting 15% off on every package upon providing their age proof and college/institution ID.`,
  },
  {
    question: "How to know if I'd be able to follow your program?",
    answer:
      "You will get a diet chart tailored according to your goals and needs, and a workout chart that will help you reach your goal.",
  },
  {
    question: "Is measuring food important?",
    answer: "Yes",
  },
  {
    question: "What if I don't have time to prepare meals and work out?",
    answer:
      "If you're someone who eats out mostly, you can tell your coach about it and they will sort your diet accordingly. And for a workout, you can get a customised plan that you can do within the time limit you have.",
  },
  {
    question: "How to get started?",
    answer: "By scheduling a call with our coach",
  },
  {
    question: "I have PCOD/PCOD can I enrol with you?",
    answer:
      "Yes, we have an in-house gynaecologist that'd be reviewing your diet.",
  },
  {
    question: "What if I don't want to workout?",
    answer:
      "There is a reason why we ask you to join the gym or buy dumbbells at home. Resistance training is imperative for fat loss. It helps you to retain your muscle mass. Do you want good looking biceps and a toned body? Do you want to age better? Do you want to make your bones stronger and lift weights, irrespective of your gender? Working out is the answer to all this.",
  },
  {
    question: "Do I have to take whey?",
    answer:
      "It's upto you, if you can complete your protein intake from food, great, then you won't need whey. Otherwise you can take it.",
  },
  {
    question: "Still confused?",
    answer: "You can chat with us on WhatsApp",
  },
];

function formatAnswer(answer: string) {
  if (answer.includes("•")) {
    const items = answer.split("\n").filter(Boolean);
    return (
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            {item.startsWith("•") ? (
              <>
                <span className="text-orange-500">•</span>
                <span>{item.substring(2)}</span>
              </>
            ) : (
              <p className="text-sm mt-2">{item}</p>
            )}
          </li>
        ))}
      </ul>
    );
  }
  return <p>{answer}</p>;
}

export function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((current) => {
      if (current.includes(index)) {
        return current.filter((i) => i !== index);
      }
      return [...current, index];
    });
  };

  return (
    <section className="px-4 py-12 md:px-8 sm:py-16 md:py-20 bg-neutral-50">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="text-center space-y-2 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-orange-500 font-heading mx-auto max-w-3xl">
            Frequently Asked Questions
          </h2>
          <p className="max-sm:text-sm font-medium text-neutral-600 max-w-3xl mx-auto">
            Everything you need to know about our fitness programs
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-2">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className="border bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <span className="font-medium font-heading text-neutral-800">
                  {item.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ bounce: 0 }}
                    className="text-neutral-500"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </span>
              </button>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-neutral-600 font-medium text-sm">
                      {formatAnswer(item.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
