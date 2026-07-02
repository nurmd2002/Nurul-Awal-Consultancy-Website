import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "☷",
    title: "Halal Certification Application",
    description:
      "We guide businesses through every stage of the MUIS Halal Certification process, from consultation and documentation preparation to submission and certification approval.",
    features: [
      "Initial Consultation",
      "Documentation Preparation",
      "Application Submission",
      "MUIS Liaison",
    ],
  },
  {
    number: "02",
    icon: "↻",
    title: "Renewal & Maintenance",
    description:
      "Maintain your halal certification with confidence through renewal support, compliance guidance and ongoing documentation management.",
    features: [
      "Renewal Applications",
      "Compliance Reviews",
      "Documentation Updates",
      "Continuous Support",
      "Business Advisory",
    ],
  },
];

function MosqueSilhouette({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`absolute bottom-0 ${
        side === "left" ? "left-0" : "right-0 scale-x-[-1]"
      } h-[520px] w-[390px] opacity-[0.23]`}
    >
      <svg viewBox="0 0 360 500" className="h-full w-full text-[#d8b75b]">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M20 470h320" />
          <path d="M40 470V300" />
          <path d="M40 300c0-55 40-95 85-95s85 40 85 95v170" />
          <path d="M70 470V320c0-38 24-68 55-68s55 30 55 68v150" />
          <path d="M100 470V345c0-18 11-32 25-32s25 14 25 32v125" />
          <path d="M125 205V145" />
          <path d="M107 145c10-22 26-34 48-34" />
          <path d="M125 125c13-9 28-12 45-6" />
          <path d="M235 470V180" />
          <path d="M220 180h30" />
          <path d="M218 210h34" />
          <path d="M222 250h26" />
          <path d="M222 290h26" />
          <path d="M222 330h26" />
          <path d="M222 370h26" />
          <path d="M235 180c-14-30-14-58 0-84c14 26 14 54 0 84z" />
          <path d="M235 96V62" />
          <path d="M224 62c8-10 18-14 31-10" />
          <path d="M280 470V340" />
          <path d="M262 340c0-33 18-57 40-57s40 24 40 57v130" />
          <path d="M282 283V244" />
          <path d="M271 244c7-11 17-15 31-11" />
          <path d="M18 330c0-25 13-42 32-42s32 17 32 42" />
          <path d="M50 288V250" />
          <path d="M39 250c8-10 18-14 31-10" />
          <path d="M40 390h170" />
          <path d="M40 425h170" />
          <path d="M235 425h100" />
        </g>
      </svg>
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-28">
      <div className="absolute left-0 top-0 h-full w-[320px] opacity-[0.16] bg-[radial-gradient(circle,#d8b75b_1.1px,transparent_1.1px)] [background-size:18px_18px]" />
      <div className="absolute right-0 top-0 h-full w-[320px] opacity-[0.16] bg-[radial-gradient(circle,#d8b75b_1.1px,transparent_1.1px)] [background-size:18px_18px]" />

      <div className="absolute left-0 top-0 h-full w-[320px] bg-gradient-to-r from-[#fbf7ef]/0 via-[#fbf7ef]/30 to-[#fbf7ef]" />
      <div className="absolute right-0 top-0 h-full w-[320px] bg-gradient-to-l from-[#fbf7ef]/0 via-[#fbf7ef]/30 to-[#fbf7ef]" />

      <MosqueSilhouette side="left" />
      <MosqueSilhouette side="right" />

      <div className="absolute left-[8%] top-[340px] text-5xl text-[#d8b75b]/35">
        ☾
      </div>
      <div className="absolute right-[8%] top-[340px] text-5xl text-[#d8b75b]/35">
        ☾
      </div>

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-14 bg-[#177D3F]" />
            <p className="text-lg font-bold uppercase tracking-wide text-[#177D3F]">
              Our Services
            </p>
            <span className="h-[2px] w-14 bg-[#177D3F]" />
          </div>

          <h2 className="font-serif text-5xl leading-tight text-black md:text-6xl">
            Comprehensive Halal
            <br />
            Consultancy Solutions
          </h2>

          <div className="mx-auto mt-6 flex w-24 items-center justify-center gap-2">
            <span className="h-[2px] flex-1 bg-[#177D3F]" />
            <span className="h-2 w-2 rounded-full bg-[#177D3F]" />
            <span className="h-[2px] flex-1 bg-[#177D3F]" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            Whether you're applying for Halal Certification for the first time or
            maintaining an existing certification, our consultants provide
            personalised guidance tailored to your business.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative min-h-[560px] rounded-[28px] border border-neutral-200 bg-white/95 p-10 shadow-[0_22px_70px_rgba(0,0,0,0.10)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
            >
              <span className="absolute right-9 top-7 font-serif text-6xl text-[#177D3F]/10">
                {service.number}
              </span>

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#177D3F]/10 text-4xl text-[#177D3F]">
                {service.icon}
              </div>

              <div className="flex gap-5">
                <div className="mt-2 h-20 w-[3px] bg-[#177D3F]" />

                <h3 className="font-serif text-3xl leading-tight text-black">
                  {service.title}
                </h3>
              </div>

              <p className="mt-7 text-base leading-7 text-neutral-700">
                {service.description}
              </p>

              <div className="mt-7 space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#177D3F] text-xs text-white">
                      ✓
                    </span>
                    <span className="text-sm text-neutral-800">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-9 inline-flex items-center gap-8 border-b-2 border-[#177D3F] pb-2 text-lg font-bold text-[#177D3F] transition hover:gap-10"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}