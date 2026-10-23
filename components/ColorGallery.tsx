"use client";
import { useState } from "react";
import { product } from "@/content/product";

export default function ColorGallery() {
  const [active, setActive] = useState(0);
  return (
    <section id="gallery" className="section-full px-5 py-24">
      <div data-reveal className="w-full max-w-[1383px]">
        <h2 className="mb-8 text-[28px] font-medium text-carbon md:text-[40px]">
          {product.colors.join(" · ")}, {product.lengths.join(" · ")}
        </h2>
        <div className="relative aspect-square max-h-[70vh] w-full overflow-hidden rounded-xl bg-ash md:aspect-[2/1]">
          {product.gallery.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`${product.name} 이미지 ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-[330ms] ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-3" role="tablist">
          {product.gallery.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`이미지 ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-[330ms] ${
                i === active ? "bg-carbon" : "bg-[#d0d1d2]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
