import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center bg-cover bg-center py-24 lg:h-[88vh] lg:py-0"
      style={{
        backgroundImage: "url('/assets/hero-food.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1440px] px-20 max-lg:px-10 max-md:px-6">
        <p className="mb-6 font-serif text-xl font-bold tracking-wide text-[#44C46A] max-md:text-sm">
          Trusted Halal Consultancy Since 2002
        </p>

        <h1 className="max-w-4xl font-serif text-7xl leading-tight text-white max-lg:text-6xl max-md:text-5xl max-sm:text-[2rem] max-sm:leading-tight [overflow-wrap:break-word] [hyphens:auto]">
          Simplifying Your{" "}
          <br className="hidden sm:block" />
          Halal Certification{" "}
          <br className="hidden sm:block" />
          Journey
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200 max-md:text-base max-md:leading-8 max-sm:mt-6 max-sm:leading-7">
          With over 20+ years of experience, we have helped over 700+ F&amp;B
          businesses achieve Halal Certification with Honesty and Clarity. From
          documentation to approval, we're with you every step of the way.
        </p>

        <div className="mt-12 flex gap-6 max-sm:mt-8 max-sm:flex-col max-sm:gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-[#177D3F] px-10 py-5 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0E5E2F] max-sm:py-4 max-sm:text-center"
          >
            Schedule Consultation
          </Link>

          <Link
            href="/services"
            className="rounded-md border border-white/80 px-10 py-5 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-black max-sm:py-4 max-sm:text-center"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}