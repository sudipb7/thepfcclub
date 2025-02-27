import { cn } from "@/lib/utils";
import { DotPattern } from "./magicui/dot-pattern";

export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-screen-xl">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="relative p-4 py-36 md:p-8 md:py-40 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 md:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-orange-500 font-heading max-w-3xl">
          Your Path to Success with Online Fitness Coach & Diet Plans
        </h1>
        <p className="sm:text-lg lg:text-xl font-medium text-neutral-600 max-w-3xl">
          With PFC Club transform your health & fitness with personalised diet,
          training and workout plans. Join online or offline!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
              >
                <img
                  src={`https://avatar.vercel.sh/${index}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-neutral-600 font-medium">
            Used by 11,000+ People
          </span>
        </div>
        <button className="inline-flex items-center justify-center px-6 py-2.5 font-medium font-heading text-white bg-orange-500 rounded-full [box-shadow:0px_0px_0px_2px_#e5e5e7] hover:bg-orange-600 transition-colors">
          Schedule a free call
        </button>
      </div>
    </section>
  );
}
