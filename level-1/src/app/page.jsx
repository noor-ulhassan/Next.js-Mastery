import Image from "next/image";
import { Poppins } from "next/font/google";
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16 dark:bg-black">
      <section className="w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Next.js fundamentals
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Optimized images with next/image
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          Images in the public folder can be rendered with the Next.js Image
          component for automatic optimization and layout-shift prevention.
        </p>
        <p className="mt-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          next/font/google self-hosts Geist for this page.
        </p>

        <div className="mt-8 rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={394}
            height={80}
            priority
            sizes="(max-width: 640px) 100vw, 394px"
            className="h-auto w-full dark:invert"
          />
        </div>
      </section>
    </main>
  );
}
