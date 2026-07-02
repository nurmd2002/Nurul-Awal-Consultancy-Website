import Link from "next/link";

function MosqueLine() {
  return (
    <svg
      viewBox="0 0 1400 260"
      className="absolute bottom-0 left-0 h-[260px] w-full text-[#0b3f25]/45"
      preserveAspectRatio="none"
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.75">
        <path d="M0 250H1400" />
        <path d="M60 250V160" />
        <path d="M35 160c0-42 25-72 55-72s55 30 55 72v90" />
        <path d="M90 88V50" />
        <path d="M78 50c8-12 20-17 34-13" />

        <path d="M205 250V90" />
        <path d="M190 90h30" />
        <path d="M205 90c-16-32-16-58 0-86c16 28 16 54 0 86z" />
        <path d="M205 4V-22" />

        <path d="M315 250V150" />
        <path d="M285 150c0-48 33-83 75-83s75 35 75 83v100" />
        <path d="M360 67V30" />
        <path d="M347 30c9-12 22-17 38-12" />

        <path d="M520 250V120" />
        <path d="M505 120h30" />
        <path d="M520 120c-15-30-15-55 0-80c15 25 15 50 0 80z" />

        <path d="M1020 250V135" />
        <path d="M990 135c0-48 33-83 75-83s75 35 75 83v115" />
        <path d="M1065 52V18" />
        <path d="M1053 18c9-12 22-17 38-12" />

        <path d="M1220 250V85" />
        <path d="M1205 85h30" />
        <path d="M1220 85c-16-32-16-58 0-86c16 28 16 54 0 86z" />

        <path d="M1295 250V150" />
        <path d="M1265 150c0-48 33-83 75-83s75 35 75 83v100" />
      </g>
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-28">
      {/* cream Islamic side pattern */}
      <div className="absolute left-0 top-0 h-full w-[320px] opacity-[0.16] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute right-0 top-0 h-full w-[320px] opacity-[0.16] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[42px] border border-[#d8b75b]/80 bg-gradient-to-br from-[#064727] via-[#07582f] to-[#04351f] px-10 py-24 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
          {/* card pattern */}
          <div className="absolute inset-0 opacity-[0.13] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:15px_15px]" />

          {/* inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,125,63,0.75),transparent_68%)]" />

          <MosqueLine />

          {/* decorative side arches */}
          <div className="absolute -left-12 top-32 h-80 w-52 rounded-r-full border-y border-r border-[#d8b75b]" />
          <div className="absolute -left-12 top-48 h-52 w-36 rounded-r-full border-y border-r border-[#d8b75b]" />

          <div className="absolute -right-12 top-32 h-80 w-52 rounded-l-full border-y border-l border-[#d8b75b]" />
          <div className="absolute -right-12 top-48 h-52 w-36 rounded-l-full border-y border-l border-[#d8b75b]" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mx-auto mb-8 flex w-80 items-center justify-center gap-5">
              <span className="h-px flex-1 bg-[#d8b75b]" />
              <span className="text-3xl text-[#d8b75b]">✥</span>
              <span className="h-px flex-1 bg-[#d8b75b]" />
            </div>

            <p className="font-serif text-xl font-bold uppercase tracking-[0.24em] text-[#d8b75b]">
              Ready to Begin?
            </p>

            <h2 className="mx-auto mt-8 max-w-5xl font-serif text-6xl leading-tight text-white drop-shadow-md md:text-7xl">
              Start Your Halal Certification
              <br />
              Journey With Confidence
            </h2>

            <div className="mx-auto mt-8 flex w-36 items-center justify-center gap-4">
              <span className="h-px flex-1 bg-[#d8b75b]" />
              <span className="h-3 w-3 rotate-45 bg-[#d8b75b]" />
              <span className="h-px flex-1 bg-[#d8b75b]" />
            </div>

            <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl leading-10 text-white/90">
              Speak with us today and let us guide your business
              <br />
              from documentation to approval.
            </p>

            <div className="mt-12 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 rounded-md border-2 border-[#d8b75b] bg-white px-12 py-5 font-serif text-lg font-bold uppercase tracking-wide text-[#177D3F] shadow-lg transition hover:-translate-y-1 hover:bg-[#fffaf0]"
              >
                <span className="text-2xl text-[#177D3F]">✥</span>
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-5">
          <span className="h-px flex-1 bg-[#d8b75b]" />
          <span className="text-4xl text-[#d8b75b]">✥</span>
          <span className="h-px flex-1 bg-[#d8b75b]" />
        </div>
      </div>
    </section>
  );
}