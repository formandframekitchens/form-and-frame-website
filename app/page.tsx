export default function Home() {
  return (
    <main className="flex min-h-svh flex-1 flex-col items-center justify-center bg-white px-6 py-16 text-center font-sans text-zinc-950">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
        FORM &amp; FRAME
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
        Professional installation services in Luton and surrounding areas.
      </p>
      <button
        type="button"
        className="mt-8 rounded-lg bg-zinc-950 px-7 py-3 text-base font-medium text-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
      >
        Get a Quote
      </button>
    </main>
  );
}
