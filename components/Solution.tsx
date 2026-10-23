import Link from "next/link";
import { company } from "@/content/company";

export default function Solution() {
  return (
    <section id="story" className="bg-ash px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1383px] items-center gap-12 md:grid-cols-2">
        <div data-reveal className="relative aspect-square overflow-hidden rounded-xl bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/extra1.jpg"
            alt="에어몬 통풍 제품"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <div data-reveal data-delay="0.15">
          <p className="text-sm font-medium tracking-[0.3em] text-pewter">ABOUT {company.nameEn}</p>
          <h2 className="mt-4 text-[28px] font-medium leading-tight text-carbon md:text-[40px]">
            {company.slogan}
          </h2>
          <div className="mt-6 space-y-4 text-[17px] text-graphite">
            {company.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link href="/about" className="btn btn-primary mt-10">
            브랜드 스토리 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
