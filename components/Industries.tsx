import {
  ChefHat,
  Coffee,
  Croissant,
  Factory,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    title: "Restaurants",
    description: "Casual dining, fine dining & more.",
    Icon: UtensilsCrossed,
  },
  {
    title: "Cafes & Bakeries",
    description: "Cafes, dessert shops, bakeries and patisseries.",
    Icon: Coffee,
  },
  {
    title: "Snack Bars",
    description: "Snack shops and mini bars.",
    Icon: Croissant,
  },
  {
    title: "Food Manufacturers",
    description: "Packaged food, beverages and food production.",
    Icon: Factory,
    featured: true,
  },
  {
    title: "Catering Businesses",
    description: "Event, corporate and institutional caterers.",
    Icon: ChefHat,
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-8 py-28">
      <div className="absolute left-0 top-0 h-72 w-72 opacity-[0.08] bg-[radial-gradient(circle,#b89b3f_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute right-0 top-0 h-72 w-72 opacity-[0.08] bg-[radial-gradient(circle,#b89b3f_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="pointer-events-none absolute inset-x-0 top-52 h-56 opacity-[0.08]">
        <div className="h-full bg-[linear-gradient(to_top,#0b4d2b_0%,transparent_78%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 flex items-center justify-center gap-6">
            <span className="h-px w-28 bg-[#c6aa47]" />
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <p className="font-serif text-2xl font-bold text-[#177D3F]">
              Industries We Support
            </p>
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <span className="h-px w-28 bg-[#c6aa47]" />
          </div>

          <h2 className="font-serif text-6xl leading-tight text-[#063f24] md:text-7xl">
            We work with all types of
            <br />
            F&amp;B businesses
          </h2>

          <div className="mx-auto mt-6 flex w-36 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-[#c6aa47]" />
            <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
            <span className="h-px flex-1 bg-[#c6aa47]" />
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-neutral-700">
            Tailored halal certification support for restaurants, cafés,
            manufacturers, caterers and food businesses of all sizes.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((item) => (
            <div
              key={item.title}
              className={`relative min-h-[390px] rounded-[24px] bg-white/70 px-7 py-10 text-center shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 ${
                item.featured
                  ? "border border-[#177D3F]"
                  : "border border-[#d8c680]/35"
              }`}
            >
              {item.featured && (
                <div className="absolute -bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 border-b border-r border-[#177D3F] bg-[#fbf7ef]" />
              )}

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#177D3F]/8">
                <item.Icon
                  className="h-12 w-12 text-[#177D3F]"
                  strokeWidth={1.8}
                />
              </div>

              <div className="mx-auto mt-8 flex w-32 items-center justify-center gap-3">
                <span className="h-px flex-1 bg-[#c6aa47]/60" />
                <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
                <span className="h-px flex-1 bg-[#c6aa47]/60" />
              </div>

              <h3 className="mt-8 font-serif text-3xl font-bold leading-tight text-[#063f24]">
                {item.title}
              </h3>

              <p className="mx-auto mt-6 max-w-[210px] text-lg leading-8 text-neutral-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl items-center justify-center gap-5">
          <span className="h-px flex-1 bg-[#d8c680]/50" />

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf7ef]">
            <div className="relative">
              <div className="h-4 w-4 rotate-45 border border-[#c6aa47] bg-[#fbf7ef]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#c6aa47]" />
              </div>
            </div>
          </div>

          <span className="h-px flex-1 bg-[#d8c680]/50" />
        </div>
      </div>
    </section>
  );
}