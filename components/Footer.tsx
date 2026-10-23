import Link from "next/link";
import { company } from "@/content/company";

export default function Footer() {
  const c = company.contact;
  return (
    <footer className="bg-white px-5 py-12 text-sm text-pewter">
      <div className="mx-auto grid max-w-[1383px] gap-8 md:grid-cols-3">
        <div>
          <p className="font-medium tracking-[0.3em] text-carbon">{company.nameEn}</p>
          <p className="mt-2">주식회사 에어몬 · 대표이사 {c.ceo}</p>
        </div>
        <ul className="space-y-1">
          <li>
            <Link href="/about">회사 소개</Link>
          </li>
          <li>
            <Link href="/#lineup">제품 라인업</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
        <ul className="space-y-1">
          <li>CS {c.cs}</li>
          <li>{c.email}</li>
          <li>팩스 {c.fax}</li>
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-[1383px] border-t border-[#e5e5e5] pt-6">
        © Airmon. All rights reserved.
      </p>
    </footer>
  );
}
