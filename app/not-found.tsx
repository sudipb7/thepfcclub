import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-orange-500 font-heading">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-800 font-heading">
            Page Not Found
          </h2>
          <p className="text-neutral-600 max-w-md mx-auto">
            Oops! Looks like you&apos;ve wandered into uncharted territory.
            Let&apos;s get you back on track to your fitness journey.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
