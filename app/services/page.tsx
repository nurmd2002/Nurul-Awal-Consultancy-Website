import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const services = [
  {
    id: "new-application-process",
    number: "Service 01",
    title: "New Application Process",
    image: "/assets/service-application.png",
    description:
      "We guide businesses through every stage of the MUIS halal certification application process, ensuring documentation, preparation and submission are completed efficiently.",
    features: [
      "Eligibility Assessment",
      "Documentation Preparation",
      "Application Submission",
      "MUIS Liaison & Follow-up",
      "Certification Approval Support",
    ],
    button: "Book Free Consultation",
  },
  {
    id: "renewal",
    number: "Service 02",
    title: "Renewal",
    image: "/assets/service-renewal.png",
    description:
      "Maintain compliance beyond certification through renewal support, documentation updates and continuous halal advisory.",
    features: [
      "Renewal Planning",
      "Compliance Review",
      "Documentation Update",
      "Renewal Submission",
      "Post-Certification Support",
    ],
    button: "Book Free Consultation",
    reverse: true,
  },
  {
    id: "maintenance",
    number: "Service 03",
    title: "Maintenance",
    image: "/assets/service-maintenance.png",
    description:
      "We help businesses keep their halal-related documents organised, updated and ready for ongoing compliance requirements.",
    features: [
      "Document Organisation",
      "Record Maintenance",
      "Compliance Readiness",
      "Ongoing Advisory",
    ],
    button: "Book Free Consultation",
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

export default function ServicesPage() {
  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />

      <section
        className="relative min-h-[600px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(251,247,239,0.98) 0%, rgba(251,247,239,0.9) 38%, rgba(251,247,239,0.35) 68%, rgba(251,247,239,0.05) 100%), url('/assets/services-hero.png')",
        }}
      >
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1400px] items-center px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-8xl leading-tight text-[#063f24] md:text-8xl">
              Our
              <br />
              Services
            </h1>

            <GoldDivider />

            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">
              End-to-end halal consultancy services to help your business
              achieve and maintain halal certification with confidence.
            </p>
          </div>
        </div>

        
      </section>
      <SectionDivider />

      <section className="relative overflow-hidden bg-[#fbf7ef] px-8 pt-12 pb-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="font-serif text-xl font-bold uppercase tracking-[0.16em] text-[#c6aa47]">
              Our Services
            </p>

            <h2 className="mt-6 font-serif text-6xl text-[#063f24]">
              Supporting Your Halal Journey
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-neutral-700">
              From first-time applications to ongoing compliance, our services
              are designed to make the halal certification journey clearer,
              smoother and more manageable.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service) => (
              <div
                id={service.id}
                key={service.title}
                className="scroll-mt-32 rounded-[40px] border border-[#d8b75b]/35 bg-white/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm lg:p-12"
              >
                <div className="grid items-center gap-14 lg:grid-cols-2">
                  <div
                    className={`overflow-hidden rounded-[30px] ${
                      service.reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-[460px] w-full rounded-[30px] object-cover"
                    />
                  </div>

                  <div className={service.reverse ? "lg:order-1" : ""}>
                    <p className="font-serif text-lg uppercase tracking-[0.2em] text-[#c6aa47]">
                      {service.number}
                    </p>

                    <h3 className="mt-4 font-serif text-5xl leading-tight text-[#063f24]">
                      {service.title}
                    </h3>

                    <GoldDivider />

                    <p className="mt-8 text-lg leading-9 text-neutral-700">
                      {service.description}
                    </p>

                    <div className="mt-9 space-y-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#177D3F]">
                            <CheckCircle2
                              className="h-5 w-5 text-[#177D3F]"
                              strokeWidth={2.2}
                            />
                          </span>

                          <span className="text-lg text-neutral-800">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="group mt-10 inline-flex items-center rounded-md border border-[#c6aa47] px-8 py-4 font-semibold text-[#063f24] transition hover:bg-[#063f24] hover:text-white"
                    >
                      {service.button}

                      <ArrowRight
                        className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf7ef] px-8 pb-28">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[36px] border border-[#c6aa47] bg-gradient-to-br from-[#064727] via-[#07582f] to-[#04351f] px-10 py-20 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
            <p className="font-serif text-2xl text-[#d8b75b]">
              Ready to Get Started?
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
              Let us simplify your
              <br />
              halal certification journey.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Our team is ready to provide tailored guidance and reliable
              support for your business.
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
      </section>

      <Footer />
    </main>
  );
}