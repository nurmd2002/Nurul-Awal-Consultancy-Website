import {
  ChefHat,
  Coffee,
  Croissant,
  Factory,
  FileText,
  Handshake,
  Headset,
  UserRound,
  Compass,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  { title: "Restaurants", description: "Casual dining, fine dining & more.", Icon: UtensilsCrossed },
  { title: "Cafes & Bakeries", description: "Cafes, dessert shops, bakeries and patisseries.", Icon: Coffee },
  { title: "Snack Bars", description: "Snack shops and mini bars.", Icon: Croissant },
  { title: "Food Manufacturers", description: "Packaged food, beverages and food production.", Icon: Factory },
  { title: "Catering Businesses", description: "Event, corporate and institutional caterers.", Icon: ChefHat },
];

const whyChoose = [
  { title: "Professional Guidance", text: "Experienced support throughout your halal certification journey.", Icon: Compass },
  { title: "Personalised Approach", text: "Tailored solutions based on your business needs and challenges.", Icon: UserRound },
  { title: "Documentation Expertise", text: "Assistance with preparation, submission and compliance requirements.", Icon: FileText },
  { title: "Ongoing Support", text: "Helping businesses maintain halal standards beyond certification.", Icon: Headset },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-5">
      <span className="h-px flex-1 bg-[#d8b75b]/60" />
      <div className="relative">
        <div className="h-4 w-4 rotate-45 border border-[#c6aa47] bg-[#fbf7ef]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-[#c6aa47]" />
        </div>
      </div>
      <span className="h-px flex-1 bg-[#d8b75b]/60" />
    </div>
  );
}

export default function PremiumHomeSections() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-8 pb-24 pt-12">
      <div className="absolute left-0 top-0 h-full w-[280px] opacity-[0.08] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute right-0 top-0 h-full w-[280px] opacity-[0.08] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="mx-auto mb-16 max-w-4xl text-center">
  <div className="mb-5 flex items-center justify-center gap-5">
    <span className="h-px w-16 bg-[#177D3F]" />
    <p className="font-serif text-lg font-bold uppercase tracking-[0.14em] text-[#177D3F]">
      Who We Serve
    </p>
    <span className="h-px w-16 bg-[#177D3F]" />
  </div>

  <h2 className="font-serif text-5xl leading-tight text-[#063f24] md:text-6xl">
    Industries We Support
  </h2>

  <div className="mx-auto mt-6 flex w-24 items-center justify-center gap-3">
    <span className="h-px flex-1 bg-[#177D3F]" />
    <span className="h-2 w-2 rounded-full bg-[#177D3F]" />
    <span className="h-px flex-1 bg-[#177D3F]" />
  </div>

  <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-700">
    We support businesses across Singapore's food industry, providing
    professional halal consultancy tailored to the unique requirements
    of each establishment.
  </p>
</div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item) => (
            <div
              key={item.title}
              className="relative flex min-h-[390px] flex-col items-center justify-center rounded-[24px] border border-[#d8c680]/35 bg-white/80 px-7 py-10 text-center shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-x-2"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#177D3F]/8">
                <item.Icon className="h-12 w-12 text-[#177D3F]" strokeWidth={1.8} />
              </div>

              <div className="mt-8 w-32">
                <Ornament />
              </div>

              <h3 className="mt-8 font-serif text-3xl font-bold leading-tight text-[#063f24]">
                {item.title}
              </h3>

              <p className="mt-6 max-w-[210px] text-lg leading-8 text-neutral-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Ornament />
        </div>

        <div className="mx-auto mt-14 max-w-5xl text-center">
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#177D3F]" />
            <p className="font-serif text-lg font-bold uppercase tracking-[0.14em] text-[#177D3F]">
              Our Services
            </p>
            <span className="h-px w-16 bg-[#177D3F]" />
          </div>

          <h2 className="font-serif text-5xl leading-tight text-black md:text-6xl">
            Comprehensive Halal
            <br />
            Consultancy Solutions
          </h2>

          <div className="mx-auto mt-6 flex w-24 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-[#177D3F]" />
            <span className="h-2 w-2 rounded-full bg-[#177D3F]" />
            <span className="h-px flex-1 bg-[#177D3F]" />
          </div>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-neutral-700">
            Whether you're applying for Halal Certification for the first time or
            maintaining an existing certification, our consultants provide
            personalised guidance tailored to your business.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Halal Certification Application",
              description:
                "Step-by-step support for businesses applying for halal certification for the first time.",
            },
            {
              title: "Renewal & Maintenance",
              description:
                "Ongoing guidance to help businesses renew and maintain halal certification confidently.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-[#d8b75b]/35 bg-white p-10 text-left shadow-[0_18px_55px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#c6aa47]"
            >
              <p className="font-serif text-sm font-bold uppercase tracking-[0.18em] text-[#c6aa47]">
                Service
              </p>

              <h3 className="mt-4 font-serif text-4xl leading-tight text-[#063f24]">
                {service.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {service.description}
              </p>

              <a
                href="/services"
                className="mt-8 inline-flex items-center font-serif text-lg font-bold text-[#177D3F] transition hover:text-[#063f24]"
              >
                Learn More <span className="ml-3">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#d8b75b]/25 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="mb-10 flex items-center justify-center gap-5">
              <span className="h-px w-16 bg-[#c6aa47]" />
              <p className="font-serif text-xl font-bold uppercase tracking-[0.12em] text-[#c6aa47]">
                Why Choose Us
              </p>
              <span className="h-px w-16 bg-[#c6aa47]" />
            </div>

            <div className="space-y-8">
              {whyChoose.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center gap-7 ${
                    index !== whyChoose.length - 1
                      ? "border-b border-[#d8b75b]/35 pb-8"
                      : ""
                  }`}
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#177D3F]/10">
                    <item.Icon className="h-10 w-10 text-[#063f24]" strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#063f24]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-lg leading-7 text-neutral-700">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#d8b75b]/60 bg-gradient-to-br from-[#064727] via-[#07582f] to-[#04351f] px-10 py-16 text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)]">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.13] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:15px_15px]" />

            <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#d8b75b]">
              <Handshake className="h-16 w-16 text-[#d8b75b]" strokeWidth={1.8} />
            </div>

            <p className="relative z-10 mt-10 font-serif text-xl font-bold uppercase tracking-[0.16em] text-[#d8b75b]">
              Our Commitment
            </p>

            <div className="relative z-10 mx-auto mt-6 w-32">
              <Ornament />
            </div>

            <h2 className="relative z-10 mx-auto mt-10 max-w-xl font-serif text-5xl leading-tight text-white">
              More Than
              <br />
              Consultancy.
              <br />A Trusted Partnership.
            </h2>

            <div className="relative z-10 mx-auto mt-10 w-32">
              <Ornament />
            </div>

            <p className="relative z-10 mx-auto mt-10 max-w-2xl text-lg leading-9 text-white/90">
              We believe every business deserves clear, honest and professional
              guidance throughout its halal certification journey. We are
              committed to your success and long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}