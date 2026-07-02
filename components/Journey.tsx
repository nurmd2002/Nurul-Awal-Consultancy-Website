import {
  ArrowRight,
  CheckSquare,
  ClipboardList,
  FileText,
  Mail,
  Phone,
  SearchCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Phone,
    title: "Consultation",
    description:
      "We understand your business, operations and halal certification needs.",
  },
  {
    number: "02",
    Icon: SearchCheck,
    title: "Assessment",
    description:
      "We evaluate your current processes and identify the requirements needed.",
  },
  {
    number: "03",
    Icon: FileText,
    title: "Documentation",
    description:
      "We prepare the required documents and organise your application process.",
  },
  {
    number: "04",
    Icon: Mail,
    title: "Application",
    description:
      "We assist in submitting your application according to MUIS requirements.",
  },
  {
    number: "05",
    Icon: CheckSquare,
    title: "Certification Support",
    description:
      "We follow up, respond to queries and support you until approval.",
  },
];

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-28">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute left-0 top-0 h-full w-[360px] bg-[radial-gradient(circle,#b89b3f_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute right-0 top-0 h-full w-[360px] bg-[radial-gradient(circle,#b89b3f_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-[270px] h-48 opacity-[0.07]">
        <div className="mx-auto h-full max-w-[1200px] bg-[linear-gradient(to_top,#0b4d2b_0%,transparent_80%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 flex items-center justify-center gap-8">
            <span className="h-px w-36 bg-[#177D3F]" />
            <p className="font-serif text-2xl font-bold text-[#177D3F]">
              Your Journey With Us
            </p>
            <span className="h-px w-36 bg-[#177D3F]" />
          </div>

          <div className="mx-auto mb-5 h-3 w-3 rotate-45 bg-[#c6aa47]" />

          <h2 className="font-serif text-6xl leading-tight text-[#063f24] md:text-7xl">
            A Clear Path to Halal
            <br />
            Certification
          </h2>

          <div className="mx-auto mt-6 flex w-28 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-[#c6aa47]" />
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <span className="h-px flex-1 bg-[#c6aa47]" />
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-neutral-700">
            We simplify every stage of the process so your business can move
            forward with clarity.
          </p>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="relative min-h-[430px] rounded-[24px] bg-gradient-to-b from-[#005c32] to-[#003f24] p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.20)]">
                <div className="flex items-start justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d8c680]/60 text-[#f1d36f]">
                    <step.Icon className="h-10 w-10" strokeWidth={1.8} />
                  </div>

                  <span className="font-serif text-5xl text-[#d8c680]">
                    {step.number}
                  </span>
                </div>

                <h3
                  className={`mt-16 font-serif text-3xl font-bold leading-tight ${
                    step.title === "Documentation" ? "-translate-x-5" : ""
                  }`}
                >
                  {step.title}
                </h3>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-px flex-1 bg-[#d8c680]/35" />
                  <span className="h-3 w-3 rotate-45 bg-[#d8c680]" />
                  <span className="h-px flex-1 bg-[#d8c680]/35" />
                </div>

                <p className="mt-6 text-lg leading-8 text-white/90">
                  {step.description}
                </p>

                <div className="absolute bottom-9 left-8 h-1 w-14 rounded-full bg-[#d8c680]" />
              </div>

              {index !== steps.length - 1 && (
                <div className="absolute -right-8 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#c6aa47] bg-white text-[#177D3F] shadow-lg lg:flex">
                  <ArrowRight className="h-6 w-6" strokeWidth={2.2} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-t-full border border-[#d8c680]/50 bg-[#fbf7ef]" />
    </section>
  );
}