const RESULTS_DATA = [
  {
    metric: "15k+",
    label: "active members",
    color: "bg-yellow-50 text-yellow-600",
    logo: "THEPFC",
  },
  {
    metric: "92%",
    label: "success rate",
    color: "bg-pink-50 text-pink-600",
    logo: "THEPFC",
  },
  {
    metric: "30kg",
    label: "avg. transformation",
    color: "bg-green-50 text-green-600",
    logo: "THEPFC",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I've lost 25kg and completely transformed my lifestyle. The personalized approach and constant support made all the difference!",
    author: "Sarah Chen",
    role: "Lost 25kg in 8 months",
    image: "https://avatar.vercel.sh/sarah",
    logo: "/company-logo.png",
  },
  {
    quote:
      "From barely being able to run 1km to completing my first marathon. The structured training plans provided by The PFC Club have been remarkable!",
    author: "Michael Roberts",
    role: "Marathon Achievement",
    image: "https://avatar.vercel.sh/michael",
    logo: "/company-logo.png",
  },
];

export function Results() {
  return (
    <section className="px-4 py-12 md:px-8 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="text-center space-y-2 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-orange-500 font-heading mx-auto max-w-3xl">
            Real results from real members
          </h2>
          <p className="max-sm:text-sm font-medium text-neutral-600 max-w-3xl mx-auto">
            Join thousands who have transformed their lives with us
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mb-6 max-w-3xl mx-auto">
          {RESULTS_DATA.map((item) => (
            <div
              key={item.label}
              className={`${item.color} p-6 rounded-lg border shadow-sm`}
            >
              <div className="space-y-2">
                <div className="font-heading text-4xl font-bold">
                  {item.metric}
                </div>
                <div className="font-medium capitalize">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.author}
              className="bg-neutral-50 p-6 rounded-lg border shadow-sm"
            >
              <div className="space-y-4">
                <p className="text-neutral-600 font-medium">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line */}
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-neutral-800">
                      {item.author}
                    </div>
                    <div className="text-sm text-neutral-600">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/transformations"
            className="inline-flex items-center justify-center px-6 py-2.5 font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
          >
            See more transformations
          </a>
        </div>
      </div>
    </section>
  );
}
