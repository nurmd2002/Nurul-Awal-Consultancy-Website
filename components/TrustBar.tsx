const trustItems = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="28" cy="22" r="10" />
        <path d="M12 54c3-12 11-18 24-18" />
        <path d="M44 34l3.5 7 7.5 1-5.5 5.5 1.5 7.5-7-3.8-7 3.8 1.5-7.5L33 42l7.5-1z" />
      </svg>
    ),
    title: "Professional Guidance",
    description: "Experienced halal consultants with 20+ years of industry knowledge.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="18" y="14" width="32" height="42" rx="3" />
        <path d="M25 14v-4h18v4" />
        <path d="M25 28l4 4 8-9" />
        <path d="M25 40l4 4 8-9" />
        <path d="M40 30h5" />
        <path d="M40 42h5" />
      </svg>
    ),
    title: "Committed Support",
    description: "From documentation to approval, we are committed to supporting you every step of the way.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="12" />
        <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />
        <path d="M26 32l4 4 9-10" />
      </svg>
    ),
    title: "Clear & Efficient",
    description: "By making things clear, we help businesses achieve Halal Certification with ease and efficiency.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M32 8l22 8v15c0 14-9 24-22 29C19 55 10 45 10 31V16z" />
        <path d="M22 32l7 7 14-16" />
      </svg>
    ),
    title: "Trusted by Businesses",
    description: "Helped over 700+ F&B businesses across Singapore, since 2002."
  },
];

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-20">
      <div className="absolute left-0 top-0 h-80 w-80 opacity-[0.07] bg-[radial-gradient(circle,#b89b3f_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute right-0 top-0 h-80 w-80 opacity-[0.07] bg-[radial-gradient(circle,#b89b3f_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-12 h-64 opacity-[0.09]">
        <div className="h-full bg-[linear-gradient(to_top,#0b4d2b_0%,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-px w-28 bg-[#c6aa47]" />
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <p className="font-serif text-lg font-bold tracking-[0.14em] text-[#c6aa47] uppercase">
              Trusted Halal Consultancy Since 2002
            </p>
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <span className="h-px w-28 bg-[#c6aa47]" />
          </div>

          <h2 className="font-serif text-6xl leading-tight text-[#063f24]">
            Why Businesses Trust Us
          </h2>

          <div className="mx-auto mt-6 flex w-32 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-[#c6aa47]" />
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <span className="h-px flex-1 bg-[#c6aa47]" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`px-12 py-6 text-center ${
                index !== trustItems.length - 1
                  ? "lg:border-r lg:border-[#d8c680]/35"
                  : ""
              }`}
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#177D3F]/9 text-[#063f24]">
                {item.icon}
              </div>

              <div className="mx-auto mt-7 flex w-24 items-center justify-center gap-3">
                <span className="h-px flex-1 bg-[#c6aa47]/70" />
                <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
                <span className="h-px flex-1 bg-[#c6aa47]/70" />
              </div>

              <h3 className="mt-6 font-serif text-[30px] font-bold leading-tight text-[#063f24]">
                {item.title}
              </h3>

              <p className="mx-auto mt-5 max-w-[260px] text-[17px] leading-8 text-neutral-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl items-center justify-center gap-6">
          <span className="h-px flex-1 bg-[#d8c680]/55" />
          <span className="text-5xl text-[#177D3F]">✥</span>
          <span className="h-px flex-1 bg-[#d8c680]/55" />
        </div>
      </div>
    </section>
  );
}