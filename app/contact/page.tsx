"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const whatsappNumber = "6589937007";

const whatsappMessage = encodeURIComponent(
  "Hello Nurul-Awal Consultants, I would like to enquire about your halal consultancy services."
);

function GoldDivider() {
  return (
    <div className="mt-6 flex w-48 items-center gap-3">
      <span className="h-px flex-1 bg-[#c6aa47]" />
      <span className="h-3 w-3 rotate-45 bg-[#c6aa47]" />
      <span className="h-px flex-1 bg-[#c6aa47]" />
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [service, setService] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry.");
      }

      setSubmitted(true);
    } catch {
      setError("Sorry, something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />

      <section
        className="relative min-h-[560px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(251,247,239,0.98) 0%, rgba(251,247,239,0.9) 40%, rgba(251,247,239,0.45) 68%, rgba(251,247,239,0.08) 100%), url('/assets/contact-hero.png')",
        }}
      >
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,#c6aa47_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-6xl leading-tight text-[#063f24] md:text-7xl">
              Let’s Start Your
              <br />
              Halal Journey
            </h1>

            <GoldDivider />

            <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-700">
              Whether you’re planning to obtain halal certification, renew an
              existing certificate, or simply have questions, we’re here to help.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="relative overflow-hidden px-8 py-24">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-5xl text-[#063f24]">
            Choose Your Preferred Contact Method
          </h2>

          <div className="mx-auto flex justify-center">
            <GoldDivider />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[32px] border border-[#d8b75b]/35 bg-white p-12 shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:border-[#177D3F]"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#063f24] transition group-hover:scale-110">
                <Phone className="h-10 w-10 text-[#d8b75b]" strokeWidth={2} />
              </div>

              <h3 className="mt-8 font-serif text-4xl text-[#063f24]">
                WhatsApp
              </h3>

              <p className="mx-auto mt-5 max-w-sm text-lg leading-8 text-neutral-700">
                Get a quick response from our team for direct enquiries.
              </p>

              <span className="mt-8 inline-flex items-center rounded-md bg-[#063f24] px-9 py-4 font-semibold uppercase tracking-wide text-white transition group-hover:bg-[#177D3F]">
                Chat on WhatsApp
                <ArrowRight
                  className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </span>
            </a>

            <a
              href="#enquiry-form"
              className="group rounded-[32px] border border-[#d8b75b]/35 bg-white p-12 shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition hover:-translate-y-2 hover:border-[#177D3F]"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#063f24] transition duration-300 group-hover:scale-110">
                <Mail className="h-11 w-11 text-[#d8b75b]" strokeWidth={2} />
              </div>

              <h3 className="mt-8 font-serif text-4xl text-[#063f24]">
                Send an Enquiry
              </h3>

              <p className="mx-auto mt-5 max-w-sm text-lg leading-8 text-neutral-700">
                Fill in a short form and we’ll get back to you directly.
              </p>

              <span className="mt-8 inline-flex items-center rounded-md bg-[#063f24] px-9 py-4 font-semibold uppercase tracking-wide text-white transition group-hover:bg-[#177D3F]">
                Fill Enquiry Form
                <ArrowRight
                  className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="enquiry-form" className="relative scroll-mt-32 px-8 pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.64fr_0.36fr]">
          <div className="rounded-[36px] border border-[#d8b75b]/35 bg-white p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            {!submitted ? (
              <>
                <h2 className="font-serif text-4xl text-[#063f24]">
                  Send Us an Enquiry
                </h2>

                <GoldDivider />

                <form className="mt-9 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      name="name"
                      required
                      placeholder="Full Name *"
                      className="rounded-md border border-[#d8b75b]/40 bg-white px-5 py-4 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#177D3F]"
                    />
                    <input
                      name="company"
                      placeholder="Company Name"
                      className="rounded-md border border-[#d8b75b]/40 bg-white px-5 py-4 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#177D3F]"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="Email Address *"
                      className="rounded-md border border-[#d8b75b]/40 bg-white px-5 py-4 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#177D3F]"
                    />
                    <input
                      name="phone"
                      placeholder="Phone Number"
                      className="rounded-md border border-[#d8b75b]/40 bg-white px-5 py-4 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#177D3F]"
                    />
                  </div>

                  <select
  name="service"
  required
  value={service}
  onChange={(e) => setService(e.target.value)}
  className={`w-full rounded-md border border-[#d8b75b]/40 bg-white px-5 py-4 outline-none transition focus:border-[#177D3F]
    ${service === "" ? "text-[#9ca3af]" : "text-neutral-900"}`}
>
  <option value="" disabled>
    Service Interested In *
  </option>

  <option value="New Application Process">
    New Application Process
  </option>

  <option value="Renewal">
    Renewal
  </option>

  <option value="Maintenance">
    Maintenance
  </option>

  <option value="General Enquiry">
    General Enquiry
  </option>
</select> 

                  <textarea
                    name="message"
                    required
                    placeholder="Your Message *"
                    rows={6}
                    className="w-full rounded-md border border-[#d8b75b]/40 bg-white px-5 py-4 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#177D3F]"
                  />

                  <p className="text-sm text-neutral-600">
                    Your information will be kept confidential and used only to
                    respond to your enquiry.
                  </p>

                  {error && (
                    <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full rounded-md bg-[#063f24] px-8 py-5 font-bold uppercase tracking-wide text-white transition hover:bg-[#177D3F] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#063f24]">
                  <CheckCircle2
                    className="h-14 w-14 text-[#d8b75b]"
                    strokeWidth={2}
                  />
                </div>

                <h2 className="mt-8 font-serif text-5xl text-[#063f24]">
                  Thank You
                </h2>

                <p className="mt-5 max-w-lg text-xl leading-9 text-neutral-700">
                  Your enquiry has been received. Our team will contact you
                  shortly.
                </p>
              </div>
            )}
          </div>

          <div className="rounded-[36px] border border-[#d8b75b]/35 bg-[#f3f8f1] p-10 shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
            <h3 className="font-serif text-4xl text-[#063f24]">
              We’re Here to Help
            </h3>

            <GoldDivider />

            <div className="mt-9 space-y-8">
              {[
                {
                  title: "Experienced & Trusted",
                  text: "Years of experience helping businesses achieve halal certification with confidence.",
                },
                {
                  title: "End-to-End Support",
                  text: "We guide you through every step of the halal certification journey, from application to approval.",
                },
                {
                  title: "Professional & Efficient",
                  text: "Dedicated to delivering reliable, efficient and personalised consultancy support.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    {item.title === "Experienced & Trusted" && (
                      <BadgeCheck
                        className="h-8 w-8 text-[#c6aa47]"
                        strokeWidth={2}
                      />
                    )}

                    {item.title === "End-to-End Support" && (
                      <ShieldCheck
                        className="h-8 w-8 text-[#c6aa47]"
                        strokeWidth={2}
                      />
                    )}

                    {item.title === "Professional & Efficient" && (
                      <BriefcaseBusiness
                        className="h-8 w-8 text-[#c6aa47]"
                        strokeWidth={2}
                      />
                    )}
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#063f24]">
                      {item.title}
                    </h4>
                    <p className="mt-2 leading-7 text-neutral-700">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

