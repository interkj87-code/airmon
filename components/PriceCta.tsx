import { product } from "@/content/product";
import { company } from "@/content/company";

export default function PriceCta() {
  return (
    <section id="buy" className="bg-carbon px-5 py-24 text-center text-white md:py-32">
      <div data-reveal className="mx-auto max-w-[640px]">
        <h2 className="text-[28px] font-medium leading-tight md:text-[40px]">{company.slogan}</h2>
        <p className="mt-4 text-[17px] text-[#d0d1d2]">
          우리 아이와 강아지, 가족의 체온조절 파트너 에어몬.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={company.storeUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            공식 스마트스토어
          </a>
          <a href={product.buyUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            {product.name} 구매
          </a>
        </div>
      </div>
    </section>
  );
}
