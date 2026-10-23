"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["브랜드 스토리", "/about"],
  ["문제", "/#problem"],
  ["제품", "/#lineup"],
  ["Contact", "/#contact"],
  ["구매", "/#buy"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = solid || open;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-[330ms] ${
        dark ? "bg-white/75 backdrop-blur text-carbon" : "bg-transparent text-carbon"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1383px] items-center justify-between px-5">
        <Link href="/" className="text-[17px] font-medium tracking-[0.3em]">
          AIRMON
        </Link>
        <nav className="hidden gap-2 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded px-4 py-1 text-sm font-medium">
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded px-3 py-1 text-sm font-medium md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "닫기" : "메뉴"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col bg-white px-5 pb-4 text-carbon md:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-sm font-medium">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
