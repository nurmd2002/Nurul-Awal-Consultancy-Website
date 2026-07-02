"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Nurul-Awal Consultants & Services"
            width={350}
            height={95}
            priority
            className="h-auto w-[300px]"
          />
        </Link>

        <nav className="flex items-center gap-10 font-serif text-lg text-black">
          <Link
            href="/"
            className={`transition ${
              pathname === "/" ? "text-[#177D3F]" : "hover:text-[#177D3F]"
            }`}
          >
            Home
          </Link>

          <Dropdown
            label="About"
            href="/about"
            items={aboutLinks}
            active={pathname === "/about"}
          />

          <Dropdown
            label="Services"
            href="/services"
            items={serviceLinks}
            active={pathname === "/services"}
          />

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
          className="rounded-md bg-[#177D3F] px-8 py-4 font-serif text-lg text-white transition hover:-translate-y-1 hover:bg-[#063f24]"
        >
          FREE ENQUIRY

        </Link>
      </div>
    </header>
  );
}