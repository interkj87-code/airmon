import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import PriceCta from "@/components/PriceCta";
import Footer from "@/components/Footer";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "회사 소개 | 에어몬 Airmon",
  description: company.aboutTitle,
};

export default function About() {
  return (
    <main>
      <Nav />
      <ScrollReveal />

      <section className="px-5 pb-16 pt-36 md:pt-44">
        <div className="mx-auto max-w-[1383px]">
          <p data-reveal className="text-sm font-medium tracking-[0.3em] text-pewter">
            ABOUT {company.nameEn}
          </p>
          <h1
            data-reveal
            data-delay="0.1"
            className="mt-6 max-w-[900px] text-[32px] font-medium leading-[1.25] text-carbon md:text-[56px]"
          >
            {company.aboutTitle}
          </h1>
        </div>
      </section>

      <section className="border-y border-[#e5e5e5] px-5 py-12">
        <ol className="mx-auto grid max-w-[1383px] gap-8 md:grid-cols-4">
          {company.milestones.map(([date, label], i) => (
            <li key={date} data-reveal data-delay={i * 0.1}>
              <p className="text-[28px] font-medium text-blue md:text-[40px]">{date}</p>
              <p className="mt-1 text-sm text-pewter">{label}</p>
            </li>
          ))}
        </ol>
      </section>

      {company.story.map((s, i) => (
        <section key={s.tag} className={`px-5 py-20 md:py-32 ${i % 2 === 1 ? "bg-ash" : ""}`}>
          <div
            className={`mx-auto grid max-w-[1383px] items-center gap-12 ${
              s.image ? "md:grid-cols-2" : "max-w-[780px]"
            }`}
          >
            <div className={s.image && i % 2 === 1 ? "md:order-2" : ""}>
              <p data-reveal className="text-sm font-medium text-blue">
                {s.tag}
              </p>
              <h2
                data-reveal
                data-delay="0.1"
                className="mt-3 text-[28px] font-medium leading-tight text-carbon md:text-[40px]"
              >
                {s.title}
              </h2>
              <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-graphite">
                {s.body.map((p, j) => (
                  <p key={j} data-reveal data-delay={0.2 + j * 0.1}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
            {s.image && (
              <div
                data-reveal
                className="relative aspect-square overflow-hidden rounded-xl bg-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-parallax
                  src={s.image[0]}
                  alt={s.image[1]}
                  className="absolute inset-0 h-full w-full scale-110 object-cover"
                />
              </div>
            )}
          </div>
        </section>
      ))}

      <PriceCta />
      <Footer />
    </main>
  );
}
