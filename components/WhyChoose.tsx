const points = [
  "Over 20 years of halal consultancy experience",
  "Clear guidance from documentation to approval",
  "Personalised support tailored to your business",
  "Reliable follow-up throughout the certification process",
];

const commitments = [
  "Personalised consultancy",
  "Professional documentation support",
  "Guidance until certification approval",
  "Long-term renewal and compliance support",
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-28">
      {/* Islamic pattern corners */}
      <div className="absolute left-0 top-0 h-full w-[300px] opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute right-0 top-0 h-full w-[300px] opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Mosque silhouette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 opacity-[0.1]">
        <div className="h-full bg-[linear-gradient(to_top,#0b4d2b_0%,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-5">
            <span className="h-px w-12 bg-[#c6aa47]" />
            <p className="font-serif text-lg font-bold uppercase tracking-[0.12em] text-[#c6aa47]">
              Why Choose Us
            </p>
            <span className="h-px w-12 bg-[#c6aa47]" />
          </div>

          <h2 className="font-serif text-6xl leading-tight text-[#063f24]">
            Your Trusted Halal
            <br />
            Certification Partner
          </h2>

          <div className="mt-8 flex w-28 items-center gap-3">
            <span className="h-px flex-1 bg-[#c6aa47]" />
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <span className="h-px flex-1 bg-[#c6aa47]" />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
            We combine professional halal consultancy experience with sincere,
            personalised guidance to help businesses move forward confidently.
          </p>

          <div className="mt-10 max-w-xl space-y-0">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-5 border-b border-[#d8c680]/35 py-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#177D3F] text-sm font-bold text-white">
                  ✓
                </span>

                <p className="text-lg text-neutral-800">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#c6aa47]/70 bg-gradient-to-br from-[#014727] via-[#07582f] to-[#063f24] p-12 text-white shadow-[0_30px_90px_rgba(0,0,0,0.24)]">
          <div className="absolute right-0 top-0 h-full w-[220px] opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:15px_15px]" />

          <div className="relative z-10">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#d8c680] text-4xl text-[#d8c680]">
              🤝
            </div>

            <p className="font-serif text-lg font-bold uppercase tracking-[0.12em] text-[#d8c680]">
              Our Commitment
            </p>

            <div className="mt-5 flex w-28 items-center gap-3">
              <span className="h-px flex-1 bg-[#d8c680]" />
              <span className="h-3 w-3 rotate-45 bg-[#d8c680]" />
              <span className="h-px flex-1 bg-[#d8c680]" />
            </div>

            <h3 className="mt-6 font-serif text-5xl leading-tight">
              More Than Consultancy.
              <br />
              A Trusted Partnership.
            </h3>

            <div className="mt-7 flex w-28 items-center gap-3">
              <span className="h-px flex-1 bg-[#d8c680]" />
              <span className="h-3 w-3 rotate-45 bg-[#d8c680]" />
              <span className="h-px flex-1 bg-[#d8c680]" />
            </div>

            <p className="mt-8 text-lg leading-9 text-white/90">
              We believe every business deserves clear, honest and professional
              guidance throughout its halal certification journey. Our role
              extends beyond submitting applications—we partner with you to
              ensure confidence, compliance and long-term success.
            </p>

            <div className="mt-9">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-[#d8c680]/25 py-5 last:border-b-0"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8c680] text-sm text-[#d8c680]">
                    ✓
                  </span>

                  <p className="text-lg text-white/95">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}