import Image from "next/image";

const FEATURES = [
  {
    title: "🥗 Uncomplicated Nutrition",
    description:
      "A scientific, sustainable, and efficient approach to diet and nutrition. Say goodbye to quick fixes and crash diets—embrace a lifestyle that works for you.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "🏋️ Effective Workouts",
    description:
      "Train at home or in the gym with expert guidance. Choose from online personal coaching or structured goal-based training to build strength and endurance.",
    image:
      "https://images.unsplash.com/photo-1543627633-0643fe92d06f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGV4ZXJjaXNlfGVufDB8fDB8fHww",
  },
  {
    title: "🤝 Community & Support",
    description:
      "Join a thriving fitness community! Connect with like-minded individuals across Twitter, Telegram, WhatsApp, Facebook, and Instagram for motivation and accountability.",
    image:
      "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGV4ZXJjaXNlfGVufDB8fDB8fHww",
  },
];

export function Features() {
  return (
    <section className="px-4 py-12 md:px-8 sm:py-16 md:py-20 bg-neutral-50">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="text-center space-y-2 mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-orange-500 font-heading mx-auto max-w-3xl">
            Achieve Your Fitness Goals with Ease
          </h2>
          <p className="max-sm:text-sm font-medium text-neutral-600 max-w-3xl mx-auto">
            Personalized Plans for Lasting Results
          </p>
        </div>
        <div className="grid place-items-center sm:grid-cols-2 gap-y-4 sm:gap-x-4 md:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="hover:rotate-2 transition-transform duration-100 ease-in-out"
            >
              <div className="p-4 pb-0">
                <div className="w-full aspect-square bg-background rounded-md rounded-b-none border border-b-0 shadow-sm relative overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-0.5 p-4 bg-background border shadow rounded-md">
                <h3 className="font-semibold text-neutral-800 font-heading tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm font-medium text-neutral-600">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
