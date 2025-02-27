const BLOG_POSTS = [
  {
    title: "The Science Behind Effective Fat Loss",
    description:
      "Learn about the proven strategies and scientific principles that drive successful fat loss, and how to apply them to your fitness journey.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=60",
    category: "Weight Loss",
    readTime: "5 min read",
    date: "Mar 15, 2024",
  },
  {
    title: "Building Muscle: A Beginner's Guide",
    description:
      "Everything you need to know about building muscle effectively, including workout plans, nutrition tips, and recovery strategies.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=60",
    category: "Muscle Gain",
    readTime: "7 min read",
    date: "Mar 12, 2024",
  },
  {
    title: "Understanding Back Pain: Separating Myths from Facts",
    description:
      "Back pain is a very common problem, and it can be really confusing. There are a lot of beliefs out there about what causes it and how to deal with it, but not all of them are helpful. ",
    image:
      "https://images.unsplash.com/photo-1504279664890-136a82299d1b?w=800&auto=format&fit=crop&q=60",
    category: "Nutrition",
    readTime: "6 min read",
    date: "Mar 10, 2024",
  },
  {
    title: "Home Workouts That Actually Work",
    description:
      "Discover effective home workout routines that deliver results, no gym required. Perfect for busy professionals and home fitness enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&auto=format&fit=crop&q=60",
    category: "Training",
    readTime: "4 min read",
    date: "Mar 8, 2024",
  },
];

export function Blog() {
  return (
    <section className="px-4 py-12 md:px-8 sm:py-16 md:py-20 bg-neutral-50">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="text-center space-y-2 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-orange-500 font-heading mx-auto max-w-3xl">
            Latest Fitness Tips & Insights
          </h2>
          <p className="max-sm:text-sm font-medium text-neutral-600 max-w-3xl mx-auto">
            Expert advice to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="group bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
              {/* eslint-disable-next-line */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-orange-500">
                    {post.category}
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-600">{post.readTime}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-neutral-800 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2">
                  {post.description}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-sm text-neutral-500">{post.date}</span>
                  <button className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">
                    Read more →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-2.5 font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            View all articles →
          </a>
        </div>
      </div>
    </section>
  );
}
