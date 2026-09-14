import Link from "next/link";

export default async function DestinationDetailsPage({ params }) {
  const { city } = await params;

  return (
    <main className="flex min-h-full items-center justify-center px-6 pt-16 text-white">
      <section className="w-full max-w-xl rounded-2xl border border-white/15 bg-white/10 p-8 text-center shadow-xl backdrop-blur-sm">
        <p className="text-sm font-semibold tracking-[0.2em] text-amber-300 uppercase">
          Destination guide
        </p>
        <h1 className="mt-3 text-4xl font-bold">{city}</h1>
        <p className="mt-4 text-white/75">
          Welcome to {city}. A full travel guide for this destination will be
          added here.
        </p>
        <Link
          href="/destination"
          className="mt-8 inline-flex rounded-lg bg-amber-300 px-5 py-3 font-semibold text-black transition hover:bg-amber-200"
        >
          Back to destinations
        </Link>
      </section>
    </main>
  );
}
