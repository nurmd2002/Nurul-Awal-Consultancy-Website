"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const aboutLinks = [
  { label: "Our Story", href: "/about#our-story" },
  { label: "Vision & Mission", href: "/about#vision-mission" },
  { label: "Core Values", href: "/about#core-values" },
  { label: "Our Journey", href: "/about#our-journey" },
];

const serviceLinks = [
  { label: "New Application Process", href: "/services#new-application-process" },
  { label: "Renewal", href: "/services#renewal" },
  { label: "Maintenance", href: "/services#maintenance" },
];

function Dropdown({
  label,
  href,
  items,
  active,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
  active: boolean;
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className={`flex items-center gap-1 transition ${
          active ? "text-[#177D3F]" : "text-black hover:text-[#177D3F]"
        }`}
      >
        {label}
        <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
      </Link>

      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-3 pt-5 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-[#d8b75b]/35 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-4 text-base text-neutral-800 transition hover:bg-[#fbf7ef] hover:text-[#177D3F]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 md:h-24 md:px-12">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/assets/logo.png"
            alt="Nurul-Awal Consultants & Services"
            width={350}
            height={95}
            priority
            className="h-auto w-[210px] md:w-[300px]"
          />
        </Link>

        <nav className="hidden items-center gap-10 font-serif text-lg text-black lg:flex">
          <Link
            href="/"
            className={`transition ${
              pathname === "/" ? "text-[#177D3F]" : "hover:text-[#177D3F]"
            }`}
          >
            Home
          </Link>

          <Dropdown label="About" href="/about" items={aboutLinks} active={pathname === "/about"} />
          <Dropdown label="Services" href="/services" items={serviceLinks} active={pathname === "/services"} />

          <Link
            href="/clients"
            className={`transition ${
              pathname === "/clients" ? "text-[#177D3F]" : "hover:text-[#177D3F]"
            }`}
          >
            Our Clients
          </Link>

          <Link
            href="/faq"
            className={`transition ${
              pathname === "/faq" ? "text-[#177D3F]" : "hover:text-[#177D3F]"
            }`}
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className={`transition ${
              pathname === "/contact" ? "text-[#177D3F]" : "hover:text-[#177D3F]"
            }`}
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-md bg-[#177D3F] px-8 py-4 font-serif text-lg text-white transition hover:-translate-y-1 hover:bg-[#063f24] lg:block"
        >
          FREE ENQUIRY
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-[#d8b75b]/50 text-[#063f24] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#d8b75b]/25 bg-white px-5 py-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5 font-serif text-xl text-[#063f24]">
            <Link href="/" onClick={closeMenu}>Home</Link>

            <div>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <div className="mt-3 flex flex-col gap-2 pl-4 text-base text-neutral-600">
                {aboutLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Link href="/services" onClick={closeMenu}>Services</Link>
              <div className="mt-3 flex flex-col gap-2 pl-4 text-base text-neutral-600">
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/clients" onClick={closeMenu}>Our Clients</Link>
            <Link href="/faq" onClick={closeMenu}>FAQ</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-md bg-[#177D3F] px-6 py-4 text-center text-base font-bold uppercase tracking-wide text-white"
            >
              Free Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 