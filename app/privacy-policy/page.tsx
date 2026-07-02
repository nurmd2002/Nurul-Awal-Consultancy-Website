import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const sections = [
  "Introduction",
  "Personal Data We Collect",
  "How We Collect Personal Data",
  "How We Use Personal Data",
  "Disclosure of Personal Data",
  "Cookies",
  "Protection of Personal Data",
  "Retention of Personal Data",
  "Your Rights",
  "Third-Party Websites",
  "Updates to This Policy",
  "Contact Us",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-[#d8b75b]/25 py-8 last:border-b-0">
      <h2 className="font-serif text-3xl font-bold text-[#063f24]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-lg leading-8 text-neutral-700">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />

      <section className="relative overflow-hidden px-8 py-24">
        <div className="absolute left-0 top-0 h-full w-[280px] opacity-[0.08] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute right-0 top-0 h-full w-[280px] opacity-[0.08] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#063f24]">
              <ShieldCheck className="h-10 w-10 text-[#d8b75b]" strokeWidth={1.8} />
            </div>

            <p className="font-serif text-lg font-bold uppercase tracking-[0.18em] text-[#c6aa47]">
              Nurul-Awal Consultants & Services
            </p>

            <h1 className="mt-5 font-serif text-6xl leading-tight text-[#063f24]">
              Privacy Policy
            </h1>

            <div className="mx-auto mt-6 flex w-48 items-center gap-3">
              <span className="h-px flex-1 bg-[#c6aa47]" />
              <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
              <span className="h-px flex-1 bg-[#c6aa47]" />
            </div>

            <p className="mt-6 text-lg text-neutral-700">
              Last updated: 2 July 2026
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-32 rounded-[28px] border border-[#d8b75b]/35 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.06)]">
                <p className="font-serif text-xl font-bold text-[#063f24]">
                  Contents
                </p>

                <div className="mt-5 space-y-3">
                  {sections.map((section, index) => (
                    <Link
                      key={section}
                      href={`#section-${index + 1}`}
                      className="block text-sm leading-6 text-neutral-600 transition hover:text-[#177D3F]"
                    >
                      {index + 1}. {section}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            <div className="rounded-[36px] border border-[#d8b75b]/35 bg-white px-8 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)] md:px-14">
              <Section id="section-1" title="1. Introduction">
                <p>
                  Nurul-Awal Consultants & Services respects your privacy and is
                  committed to protecting the personal data that you provide to
                  us. This Privacy Policy explains how we collect, use, disclose
                  and protect your personal data when you visit our website,
                  submit an enquiry, contact us, or engage our halal consultancy
                  services.
                </p>
                <p>
                  This policy is prepared with reference to Singapore&apos;s
                  Personal Data Protection Act 2012, which governs the
                  collection, use and disclosure of personal data by organisations
                  in Singapore.
                </p>
              </Section>

              <Section id="section-2" title="2. Personal Data We Collect">
                <p>
                  We may collect personal data that you voluntarily provide to
                  us, including your name, email address, contact number, company
                  name, service interest, enquiry details, and any other
                  information you provide when contacting us.
                </p>
              </Section>

              <Section id="section-3" title="3. How We Collect Personal Data">
                <ul className="list-disc space-y-2 pl-6">
                  <li>When you submit an enquiry through our website.</li>
                  <li>When you contact us through WhatsApp, email or phone.</li>
                  <li>When you engage us for halal consultancy services.</li>
                  <li>When you request information about our services.</li>
                </ul>
              </Section>

              <Section id="section-4" title="4. How We Use Personal Data">
                <ul className="list-disc space-y-2 pl-6">
                  <li>To respond to your enquiries.</li>
                  <li>To arrange consultations or follow-up communications.</li>
                  <li>To support halal certification application, renewal or maintenance matters.</li>
                  <li>To manage client records and administrative processes.</li>
                  <li>To comply with legal, regulatory or business requirements.</li>
                </ul>
              </Section>

              <Section id="section-5" title="5. Disclosure of Personal Data">
                <p>
                  We do not sell or rent your personal data. We may disclose your
                  personal data only where necessary to authorised personnel,
                  consultants, service providers, IT support providers, or where
                  required by law or regulatory authorities.
                </p>
              </Section>

              <Section id="section-6" title="6. Cookies">
                <p>
                  Our website may use cookies or similar technologies to support
                  website functionality, understand visitor activity and improve
                  user experience. You may adjust your browser settings to block
                  or delete cookies.
                </p>
              </Section>

              <Section id="section-7" title="7. Protection of Personal Data">
                <p>
                  We take reasonable administrative, technical and organisational
                  measures to protect personal data in our possession against
                  unauthorised access, collection, use, disclosure, copying,
                  modification, disposal or similar risks.
                </p>
              </Section>

              <Section id="section-8" title="8. Retention of Personal Data">
                <p>
                  We retain personal data only for as long as necessary to fulfil
                  the purposes for which it was collected, to provide our
                  services, respond to enquiries, or meet legal, regulatory,
                  accounting or business requirements.
                </p>
              </Section>

              <Section id="section-9" title="9. Your Rights">
                <p>
                  You may contact us to request access to, correction of, or
                  withdrawal of consent for the continued use of your personal
                  data, subject to applicable legal and business requirements.
                </p>
              </Section>

              <Section id="section-10" title="10. Third-Party Websites">
                <p>
                  Our website may contain links to third-party websites or
                  platforms. We are not responsible for the privacy practices,
                  content or security of external websites.
                </p>
              </Section>

              <Section id="section-11" title="11. Updates to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. The latest
                  version will be posted on this page.
                </p>
              </Section>

              <Section id="section-12" title="12. Contact Us">
                <p>
                  If you have questions about this Privacy Policy or how your
                  personal data is handled, please contact us through our website
                  enquiry form or the contact details provided on our Contact
                  page.
                </p>
              </Section>

              <div className="pt-10">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 rounded-md bg-[#063f24] px-7 py-4 font-serif font-bold text-white transition hover:bg-[#177D3F]"
                >
                  
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}