import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const clients = [
  { name: "Swee Heng", logo: "/assets/clients/swee-heng.png" },
  { name: "Crolo", logo: "/assets/clients/crolo.png" },
  { name: "Swee Heng 1989 Classic", logo: "/assets/clients/swee-heng-1989-classic.png" },
  { name: "San-Wich", logo: "/assets/clients/san-wich.png" },
  { name: "Toast & Roll", logo: "/assets/clients/toast-roll.png" },
  { name: "Hup Lee Frozen Food", logo: "/assets/clients/hup-lee.png" },
  { name: "Hawley", logo: "/assets/clients/hawley.png" },
  { name: "Swee Heng 1989 Signature", logo: "/assets/clients/swee-heng-signature.png" },
  { name: "Swee Heng 1989 Express", logo: "/assets/clients/swee-heng-1989-express.png" },
  { name: "Wataa Bakery", logo: "/assets/clients/wataa-bakery.png" },
  { name: "All Good Gourmet", logo: "/assets/clients/all-good-gourmet.png" },
  { name: "Lee Wee & Brothers", logo: "/assets/clients/lee-wee-brothers.png" },
  { name: "54 Bakery Cafe", logo: "/assets/clients/54-bakery-cafe.png" },
  { name: "CCK Local Delights", logo: "/assets/clients/cck-local-delights.png" },
  { name: "Boon Lay Cafe", logo: "/assets/clients/boon-lay-cafe.png" },
  { name: "Chef Ibu", logo: "/assets/clients/chef-ibu.png" },
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

export default function ClientsPage() {
  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />

      <section
        className="relative min-h-[560px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(251,247,239,0.98) 0%, rgba(251,247,239,0.9) 38%, rgba(251,247,239,0.45) 68%, rgba(251,247,239,0.08) 100%), url('/assets/clients-hero.png')",
        }}
      >
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-7xl leading-tight text-[#063f24] md:text-8xl">
              Our Clients
            </h1>

            <GoldDivider />

            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">
              We are proud to have supported a wide range of businesses on their
              halal certification journey with professionalism, trust and
              dedication.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="relative overflow-hidden px-8 py-2">
        <div className="absolute left-0 top-0 h-full w-[320px] opacity-[0.1] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute right-0 top-0 h-full w-[320px] opacity-[0.1] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mx-auto mb-6 flex w-full max-w-3xl items-center justify-center gap-6">
            <span className="h-px flex-1 bg-[#c6aa47]" />
            <p className="font-serif text-lg font-bold uppercase tracking-[0.22em] text-[#c6aa47]">
              Clients
            </p>
            <span className="h-px flex-1 bg-[#c6aa47]" />
          </div>

          <h2 className="font-serif text-5xl leading-tight text-[#063f24] md:text-6xl">
            Some Of The Businesses We’ve Had the Privilege to Support
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-neutral-700">
            From local SMEs to established brands, we are honoured to be part of
            your halal certification journey.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {clients.slice(0, 12).map((client) => (
              <div
                key={client.name}
                className="group flex h-[210px] items-center justify-center rounded-[22px] border border-[#d8b75b]/35 bg-white p-8 shadow-[0_14px_45px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#c6aa47] hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={260}
                  height={160}
                  className="max-h-[145px] w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

         <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  {clients.slice(12).map((client) => (
    <div
      key={client.name}
      className="group flex h-[210px] items-center justify-center rounded-[22px] border border-[#d8b75b]/35 bg-white p-8 shadow-[0_14px_45px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#c6aa47] hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={260}
        height={160}
        className="max-h-[145px] w-auto object-contain transition duration-300 group-hover:scale-105"
      />
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbf7ef] px-8 pb-28 pt-20">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative grid items-center gap-10 overflow-hidden rounded-[36px] border border-[#c6aa47] bg-gradient-to-br from-[#064727] via-[#07582f] to-[#04351f] px-10 py-16 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] lg:grid-cols-[0.16fr_0.54fr_0.3fr]">
            <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:15px_15px]" />

            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-[#d8b75b]">
              <Sparkles className="h-12 w-12 text-[#d8b75b]" strokeWidth={1.8} />
            </div>

            <div className="relative z-10">
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Ready to Embark On Your Halal Journey?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
                We’re committed to guiding you through your halal certification
                journey with sincerity.
              </p>
            </div>

            <div className="relative z-10 lg:text-right">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 rounded-lg border-2 border-[#d8b75b] bg-white px-10 py-5 font-serif text-xl font-bold uppercase tracking-wide text-[#063f24] shadow-lg transition hover:-translate-y-1 hover:bg-[#fffaf0]"
              >
               Free Enquiry
                <ArrowRight
                  className="h-13 w-13 text-[#b8902f] transition-transform duration-300 group-hover:translate-x-1"
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

