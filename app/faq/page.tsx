"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const faqs = [
  {
    q: "What is Halal Certification?",
    a: "Halal Certification is an official recognition issued by MUIS that confirms a business complies with the relevant MUIS halal requirements. It shows that your products, ingredients and operational practices meet recognised MUIS halal standards.",
  },
  {
    q: "Why should my business become Halal Certified?",
    a: "Halal Certification can strengthen your business credibility, broaden your customer reach and create new commercial opportunities. It also demonstrates your commitment to quality, transparency and proper halal practices.",
  },
  {
    q: "Which businesses can apply for Halal Certification?",
    a: "Many food-related businesses can apply, including restaurants, cafés, bakeries, caterers, food manufacturers, central kitchens, food kiosks and other eligible establishments. The correct scheme depends on your business operations.",
  },
  {
    q: "How long does the application process usually take?",
    a: "The timeline depends on your business type, documentation readiness and operational preparation. A well-prepared application can help reduce delays and make the process smoother.",
  },
  {
    q: "What documents will I need?",
    a: "Common documents include business registration details, menu or product lists, ingredient information, supplier details, floor plans and operating procedures. We will advise you on the specific documents needed for your business.",
  },
  {
    q: "How can Nurul-Awal Consultants & Services help?",
    a: "We provide support with eligibility assessment, documentation preparation, ingredient reviews, application guidance, audit preparation, renewal assistance and ongoing compliance support.",
  },
  {
    q: "What happens after I receive my Halal Certificate?",
    a: "After certification, businesses must continue maintaining halal compliance through proper documentation, operational controls and record keeping. We can continue supporting you with maintenance and renewal planning.",
  },
  {
    q: "When should I begin preparing for renewal?",
    a: "It is best to begin preparing several months before your certificate expires. Starting early gives enough time to review documents, update records and complete the renewal process without unnecessary pressure.",
  },
  {
    q: "What if I change my menu, ingredients or suppliers?",
    a: "Changes to menu items, ingredients, suppliers or operations may require updates to your halal records. We recommend checking with us before making major changes so we can guide you properly.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes. We provide an initial consultation to understand your business, discuss your certification goals and recommend the most suitable pathway for your halal certification journey.",
  },
];

function GoldDivider() {
  return (
    <div className="mt-6 flex w-48 items-center gap-3">
      <span className="h-px flex-1 bg-[#c6aa47]" />
      <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
      <span className="h-px flex-1 bg-[#c6aa47]" />
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />

      <section
        className="relative min-h-[560px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(251,247,239,0.98) 0%, rgba(251,247,239,0.9) 40%, rgba(251,247,239,0.45) 68%, rgba(251,247,239,0.08) 100%), url('/assets/faq-hero.png')",
        }}
      >
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-10">
          <div className="max-w-3xl">
            <p className="font-serif text-xl font-bold uppercase tracking-[0.16em] text-[#c6aa47]">
              Frequently Asked Questions
            </p>

            <h1 className="mt-6 font-serif text-6xl leading-tight text-[#063f24] md:text-7xl">
              Everything You Need
              <br />
              to Know.
            </h1>

            <GoldDivider />

            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">
              Find answers to common questions about halal certification,
              renewals, compliance and our consultancy services.
            </p>
          </div>
        </div>

        
      </section>
      <SectionDivider />

      <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-28">
        <div className="absolute left-0 top-0 h-full w-[320px] opacity-[0.1] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute right-0 top-0 h-full w-[320px] opacity-[0.1] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="h-fit rounded-[36px] border border-[#d8b75b]/35 bg-white/80 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm lg:sticky lg:top-32">
            <p className="font-serif text-lg font-bold uppercase tracking-[0.16em] text-[#c6aa47]">
              Need Help?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#063f24]">
              Frequently Asked Questions
            </h2>

            <GoldDivider />

            <p className="mt-7 text-lg leading-8 text-neutral-700">
              Our consultants have answered the questions businesses ask most
              often before starting their halal certification journey.
            </p>

            <div className="mt-10 rounded-[24px] border border-[#d8b75b]/40 bg-[#fbf7ef] p-7">
              <p className="font-serif text-2xl text-[#063f24]">
                Still have questions?
              </p>

              <p className="mt-3 leading-7 text-neutral-700">
                Speak with us directly and we’ll guide you based on your
                business needs.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center rounded-md bg-[#177D3F] px-7 py-4 font-semibold text-white transition hover:bg-[#063f24]"
              >
                Schedule a Consultation
                <ArrowRight
                  className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </aside>

          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-[24px] border border-[#d8b75b]/35 bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-8 px-8 py-7 text-left"
                  >
                    <span className="font-serif text-2xl font-semibold text-[#063f24]">
                      {String(index + 1).padStart(2, "0")}. {faq.q}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c6aa47] text-[#063f24]">
                      {isOpen ? (
                        <Minus className="h-5 w-5" strokeWidth={2.2} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={2.2} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#d8b75b]/25 px-8 pb-8 pt-6">
                      <p className="text-lg leading-9 text-neutral-700">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf7ef] px-8 pb-28">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[36px] border border-[#c6aa47] bg-gradient-to-br from-[#064727] via-[#07582f] to-[#04351f] px-10 py-20 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:15px_15px]" />

            <div className="relative z-10">
              <div className="mx-auto mb-6 flex w-72 items-center justify-center gap-5">
                <span className="h-px flex-1 bg-[#d8b75b]" />
                <Sparkles
                  className="h-9 w-9 text-[#d8b75b]"
                  strokeWidth={1.8}
                />
                <span className="h-px flex-1 bg-[#d8b75b]" />
              </div>

              <p className="font-serif text-2xl text-[#d8b75b]">
                Ready to Begin?
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
                Start your halal certification
                <br />
                journey with confidence.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
                Whether you are applying for the first time, renewing your
                certificate or looking for advice, our team is here to help.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-6 rounded-lg border-2 border-[#d8b75b] bg-white px-12 py-5 font-serif text-lg font-bold uppercase tracking-wide text-[#063f24] shadow-lg transition hover:-translate-y-1 hover:bg-[#fffaf0]"
              >
                Schedule a Consultation
                <ArrowRight
                  className="h-7 w-7 text-[#b8902f] transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.2}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}