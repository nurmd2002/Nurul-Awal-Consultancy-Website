"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Clients", href: "/clients" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const services = [
  { label: "New Application Process", href: "/services#new-application-process" },
  { label: "Renewal", href: "/services#renewal" },
  { label: "Maintenance", href: "/services#maintenance" },
]

  

function MosqueLine() {
  return (
    <svg viewBox="0 0 1400 230" className="absolute bottom-20 left-0 w-full opacity-25 text-[#d8b75b]" fill="none">
      <g stroke="currentColor" strokeWidth="1.2">
        <path d="M0 220H1400" />
        <path d="M80 220V125" />
        <path d="M50 125c0-42 30-75 70-75s70 33 70 75v95" />
        <path d="M120 50V18" />
        <path d="M108 18c9-10 22-14 36-10" />
        <path d="M250 220V80" />
        <path d="M235 80h30" />
        <path d="M250 80c-16-30-16-55 0-82c16 27 16 52 0 82z" />
        <path d="M360 220V140" />
        <path d="M330 140c0-38 28-68 65-68s65 30 65 68v80" />
        <path d="M1000 220V140" />
        <path d="M970 140c0-38 28-68 65-68s65 30 65 68v80" />
        <path d="M1180 220V80" />
        <path d="M1165 80h30" />
        <path d="M1180 80c-16-30-16-55 0-82c16 27 16 52 0 82z" />
        <path d="M1280 220V125" />
        <path d="M1250 125c0-42 30-75 70-75s70 33 70 75v95" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#052c1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#07582f,#032015_72%)]" />

      <div className="absolute left-0 top-0 h-full w-[330px] opacity-[0.14] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute right-0 top-0 h-full w-[330px] opacity-[0.14] bg-[radial-gradient(circle,#d8b75b_1px,transparent_1px)] [background-size:16px_16px]" />

      <MosqueLine />

      <div className="relative z-10 mx-auto max-w-[1400px] px-10 pb-10 pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr_1.25fr_1fr]">
          <div>
            <Image
              src="/assets/logo.png"
              alt="Nurul-Awal Consultants & Services"
              width={290}
              height={90}
              className="brightness-0 invert"
            />

            <div className="mt-8 flex w-72 items-center gap-3">
              <span className="h-px flex-1 bg-[#d8b75b]" />
              <span className="h-3 w-3 rotate-45 bg-[#d8b75b]" />
              <span className="h-px flex-1 bg-[#d8b75b]" />
            </div>

            <p className="mt-8 max-w-sm text-lg leading-8 text-white/85">
              Professional halal consultancy helping businesses achieve and
              maintain MUIS halal certification with confidence.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-white">Quick Links</h3>
            <div className="mt-5 flex w-32 items-center gap-3">
              <span className="h-px flex-1 bg-[#d8b75b]" />
              <span className="h-3 w-3 rotate-45 bg-[#d8b75b]" />
              <span className="h-px flex-1 bg-[#d8b75b]" />
            </div>

            <ul className="mt-8 space-y-5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center gap-4 text-xl text-white/90">
                    <span className="text-[#d8b75b]">✥</span>
                    <span className="transition group-hover:text-[#d8b75b]">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-white">Our Services</h3>
            <div className="mt-5 flex w-36 items-center gap-3">
              <span className="h-px flex-1 bg-[#d8b75b]" />
              <span className="h-3 w-3 rotate-45 bg-[#d8b75b]" />
              <span className="h-px flex-1 bg-[#d8b75b]" />
            </div>

            <ul className="mt-8 space-y-5">
              {services.map((service) => (
                <li key={service.label} className="border-b border-[#d8b75b]/20 pb-4">
                  <Link href={service.href} className="group flex items-start gap-4 text-xl leading-7 text-white/90">
                    <span className="mt-1 text-[#d8b75b]">✥</span>
                    <span className="transition group-hover:text-[#d8b75b]">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-white">Contact Us</h3>
            <div className="mt-5 flex w-32 items-center gap-3">
              <span className="h-px flex-1 bg-[#d8b75b]" />
              <span className="h-3 w-3 rotate-45 bg-[#d8b75b]" />
              <span className="h-px flex-1 bg-[#d8b75b]" />
            </div>

            <div className="mt-8 space-y-5 text-lg text-white/90">
              <p className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#177D3F] text-[#d8b75b]">☏</span>
                +65 8993 7007
              </p>
              <p className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#177D3F] text-[#d8b75b]">✉</span>
                nurulawalcs@gmail.com
              </p>
              <p className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#177D3F] text-[#d8b75b]">⌾</span>
                Singapore
                UEN:52975860A
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-6">
          <span className="h-px flex-1 bg-[#d8b75b]" />
          <span className="text-5xl text-[#d8b75b]">✥</span>
          <span className="h-px flex-1 bg-[#d8b75b]" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-[#d8b75b]/25 pt-8 text-white/85 md:flex-row">
          <p>© 2026 Nurul-Awal Consultants & Services. All rights reserved.</p>

          <a href="#top" className="flex items-center gap-3 text-[#d8b75b]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8b75b]">
              ↑
            </span>
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}