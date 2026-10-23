"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { product } from "@/content/product";
import { company } from "@/content/company";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-img]", { scale: 1.06, duration: 1.6, ease: "power2.out" });
      gsap.from("[data-hero-text]", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={root} className="px-5 pb-16 pt-28 md:min-h-screen md:pb-20">
      <div className="mx-auto grid max-w-[1383px] items-center gap-10 md:min-h-[calc(100vh-12rem)] md:grid-cols-2">
        <div>
          <p data-hero-text className="mb-4 text-sm font-medium tracking-[0.3em] text-pewter">
            {company.nameEn}
          </p>
          <h1
            data-hero-text
            className="text-[40px] font-medium leading-[1.15] text-carbon md:text-[64px]"
          >
            {company.slogan}
          </h1>
          <p data-hero-text className="mt-6 max-w-[480px] text-[17px] text-graphite">
            유아용품 업계 출신 5명의 아빠가 만든 통풍 브랜드. 유모차, 낮잠, 그리고 강아지까지 시원한 바람으로
            체온을 지킵니다.
          </p>
          <div data-hero-text className="hero-actions mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={company.storeUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-store">
              공식 스마트스토어
            </a>
            <Link href="/about" className="btn btn-gray btn-story">
              브랜드 스토리
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ash md:aspect-square">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            data-hero-img
            src={product.hero}
            alt={`${product.name} ${product.category}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
