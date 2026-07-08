import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Compass,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Target,
  Telescope,
  Timer,
  UsersRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const whyChoose = [
  { title: "Professional Guidance", text: "Experienced support throughout your halal certification journey.", Icon: Compass },
  { title: "Personalised Approach", text: "Tailored solutions based on your business needs and challenges.", Icon: Sparkles },
  { title: "Documentation Expertise", text: "Assistance with preparation, submission and compliance requirements.", Icon: ClipboardCheck },
  { title: "Ongoing Support", text: "Helping businesses maintain halal standards beyond certification.", Icon: Handshake },
];

const values = [
  { title: "Integrity", text: "Upholding the highest ethical and halal standards.", Icon: ShieldCheck },
  { title: "Professionalism", text: "Delivering guidance with experience, reliability and respect.", Icon: BadgeCheck },
  { title: "Efficiency", text: "Streamlining the halal certification process without compromising quality.", Icon: Timer },
  { title: "Commitment", text: "Dedicated to supporting our clients throughout their halal journey.", Icon: HeartHandshake },
];

const journey = [
  {
    title: "Founded with a Vision",
    year: "2002",
    text: "Nurul-Awal Consultants & Services was founded to help businesses navigate Halal Certification with clarity, integrity and professionalism.",
    Icon: Sprout,
  },
  {
    title: "Building Trust",
    year: "Growth",
    text: "Through reliable guidance and personalised support, the consultancy built long-standing trust with clients.",
    Icon: UsersRound,
  },
  {
    title: "Continuing the Legacy",
    year: "2016",
    text: "Mazlinah Jamaldin continued the business after Mohamed Jamaldin’s passing, carrying forward the same commitment to service.",
    Icon: Building2,
  },
  {
    title: "Supporting Businesses",
    year: "Today",
    text: "Today, Nurul-Awal continues helping businesses achieve and maintain Halal Certification according to MUIS requirements.",
    Icon: Star,
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-5">
      <span className="h-px w-12 bg-[#c6aa47]" />
      <p className="font-serif text-lg font-bold uppercase tracking-[0.12em] text-[#c6aa47]">
        {children}
      </p>
      <span className="h-px w-12 bg-[#c6aa47]" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#063f24] px-8 py-32 text-white max-md:px-5 max-md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#177D3F,#032015_75%)]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <div className="mx-auto mb-7 flex w-80 max-w-full items-center justify-center gap-5">
            <span className="h-px flex-1 bg-[#d8b75b]" />
            <span className="h-3 w-3 rotate-45 bg-[#d8b75b]" />
            <span className="h-px flex-1 bg-[#d8b75b]" />
          </div>

          <p className="font-serif text-xl font-bold uppercase tracking-[0.18em] text-[#d8b75b] max-md:text-base">
            About Nurul-Awal
          </p>

          <h1 className="mx-auto mt-7 max-w-5xl font-serif text-7xl leading-tight max-lg:text-6xl max-md:text-4xl">
            More Than Halal Certification.
            <br />
            A Trusted Partner Since 2002.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/90 max-md:mt-6 max-md:text-base max-md:leading-8">
            For over two decades, we have guided businesses through every stage
            of the halal certification journey with professionalism, integrity
            and personalised support.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center rounded-md border-2 border-[#d8b75b] bg-white px-10 py-5 font-serif text-lg font-bold text-[#177D3F] transition hover:-translate-y-1 max-md:px-8 max-md:py-4"
          >
            Enquire Now
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section id="our-story" className="relative overflow-hidden px-8 py-20 max-md:px-3 max-md:py-14">
        <div className="absolute left-0 top-0 h-full w-[280px] opacity-[0.1] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[1.35fr_1fr] max-lg:gap-10">
          <div className="rounded-[32px] border border-[#d8b75b]/40 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.10)] max-md:p-2">
            <div className="overflow-hidden rounded-[28px] bg-white">
              <Image
                src="/assets/story.png"
                alt="Nurul-Awal consulting process illustration"
                width={1000}
                height={1414}
                priority
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>

          <div>
            <SectionLabel>Our Story</SectionLabel>

            <h2 className="font-serif text-6xl leading-tight text-[#063f24] max-md:text-4xl">
              Serving Businesses
              <br />
              Since 2002
            </h2>

            <div className="mt-7 flex w-28 items-center gap-3">
              <span className="h-px flex-1 bg-[#c6aa47]" />
              <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
              <span className="h-px flex-1 bg-[#c6aa47]" />
            </div>

            <p className="mt-8 text-lg leading-9 text-neutral-700 max-md:mt-6 max-md:text-base max-md:leading-8">
              Nurul-Awal Consultants & Services was founded in 2002 by the late Haji. Mohamed
              Jamaldin bin Abdul Latif who, after more than 30 years of service with
              Singapore&apos;s National Environment Agency (NEA), recognised that
              many business owners, particularly non-Muslims, were struggling to
              obtain Halal Certification.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700 max-md:text-base max-md:leading-8">
              Driven by a genuine desire to help, he dedicated himself to
              understanding the MUIS Halal Certification requirements and established
              Nurul-Awal Consultants & Services to guide businesses through the
              certification process with clarity, confidence and professionalism.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700 max-md:text-base max-md:leading-8">
              Since 2003, Mazlinah has worked alongside her father,
              supporting clients and managing the consultancy&apos;s administrative
              processes. Following his passing in 2016, she took over the
              business and continues his legacy alongside her family, with the same commitment to
              service.
            </p>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="relative bg-[#f3f8f1] px-8 py-20 max-md:px-5 max-md:py-14">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] border border-[#d8b75b]/35 bg-white p-10 shadow-sm max-md:p-7">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#063f24]">
              <Telescope className="h-12 w-12 text-[#d8b75b]" />
            </div>
            <h3 className="font-serif text-5xl text-[#177D3F] max-md:text-4xl">Our Vision</h3>
            <p className="mt-6 text-lg leading-9 text-neutral-700 max-md:text-base max-md:leading-8">
              To be a trusted halal consultancy partner, empowering businesses
              of all sizes to achieve halal certification with confidence while
              upholding the highest standards of compliance, integrity and
              excellence within the halal industry.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#d8b75b]/35 bg-white p-10 shadow-sm max-md:p-7">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#063f24]">
              <Target className="h-12 w-12 text-[#d8b75b]" />
            </div>
            <h3 className="font-serif text-5xl text-[#177D3F] max-md:text-4xl">Our Mission</h3>
            <p className="mt-6 text-lg leading-9 text-neutral-700 max-md:text-base max-md:leading-8">
              To simplify the halal certification journey through professional,
              reliable and personalised halal consultancy services, enabling
              businesses to achieve and maintain halal certification efficiently
              and confidently.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 max-md:px-5 max-md:py-14">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="font-serif text-xl font-bold uppercase tracking-[0.12em] text-[#177D3F] max-md:text-base">
            Why Businesses Choose Us
          </p>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#d8b75b]/35 bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl max-md:p-7"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#177D3F]/10">
                  <item.Icon className="h-12 w-12 text-[#063f24]" strokeWidth={1.8} />
                </div>

                <h3 className="mt-7 font-serif text-3xl font-bold text-[#063f24]">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-neutral-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ef] px-8 py-20 max-md:px-5 max-md:py-14">
        <div className="mx-auto grid max-w-[1280px] items-start gap-16 lg:grid-cols-2 max-lg:gap-12">
          <div id="core-values" className="w-full">
            <SectionLabel>Our Core Values</SectionLabel>

            <div className="grid grid-cols-1 overflow-hidden rounded-[32px] border border-[#d8b75b]/40 bg-white md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="border-b border-r border-[#d8b75b]/30 p-10 text-center last:border-b-0 max-md:p-7"
                >
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#063f24]">
                    <value.Icon className="h-16 w-16 text-[#d8b75b]" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 font-serif text-3xl text-[#177D3F]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-neutral-700">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="our-journey" className="w-full">
            <SectionLabel>Our Journey</SectionLabel>

            <div className="relative mt-5 pl-20 max-md:pl-16">
              <div className="absolute bottom-8 left-9 top-5 w-[4px] bg-[#063f24] max-md:left-7" />

              <div className="space-y-10">
                {journey.map((item) => (
                  <div key={item.title} className="relative">
                    <div className="absolute -left-[92px] top-0 flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-[#b7d5ae] bg-[#063f24] shadow-md max-md:-left-16 max-md:h-16 max-md:w-16">
                      <item.Icon className="h-11 w-11 text-white max-md:h-9 max-md:w-9" strokeWidth={1.8} />
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-[#177D3F] max-md:text-2xl">
                      {item.title}{" "}
                      <span className="text-[#177D3F]">({item.year})</span>
                    </h3>

                    <p className="mt-3 text-xl leading-9 text-black max-md:text-base max-md:leading-8">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-20 max-md:px-5 max-md:py-14">
        <div className="absolute left-0 top-0 h-full w-[320px] opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute right-0 top-0 h-full w-[320px] opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <div className="relative overflow-hidden rounded-[42px] border border-[#d8b75b]/80 bg-gradient-to-br from-[#064727] via-[#07582f] to-[#04351f] px-10 py-20 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] max-md:px-6 max-md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,125,63,0.8),transparent_68%)]" />
            <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:15px_15px]" />

            <div className="relative z-10 mx-auto mb-8 flex w-72 max-w-full items-center justify-center gap-5">
              <span className="h-px flex-1 bg-[#d8b75b]" />
              <Sparkles className="h-10 w-10 text-[#d8b75b]" />
              <span className="h-px flex-1 bg-[#d8b75b]" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl">
              <p className="font-serif text-3xl text-[#d8b75b] max-md:text-2xl">
                Ready to Work Together?
              </p>

              <h2 className="mx-auto mt-7 max-w-5xl font-serif text-6xl leading-tight text-white drop-shadow-md md:text-7xl max-md:text-4xl">
                Let us simplify your halal
                <br />
                certification journey.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-2xl leading-10 text-white/90 max-md:text-lg max-md:leading-8">
                Our team is here to guide you every step of the way
                <br />
                with professional and personalised support.
              </p>

              <Link
                href="/contact"
                className="group mt-12 inline-flex items-center gap-6 rounded-lg border-2 border-[#d8b75b] bg-white px-14 py-5 font-serif text-xl font-bold uppercase tracking-wide text-[#063f24] shadow-lg transition hover:-translate-y-1 hover:bg-[#fffaf0] max-md:mt-8 max-md:gap-4 max-md:px-8 max-md:py-4 max-md:text-lg"
              >
                Schedule a Consultation
                <ArrowRight className="h-7 w-7 text-[#b8902f] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}