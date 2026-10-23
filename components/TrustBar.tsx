import { company } from "@/content/company";

export default function TrustBar() {
  return (
    <section className="border-y border-[#e5e5e5] px-5 py-10">
      <dl className="mx-auto grid max-w-[1383px] gap-8 text-center md:grid-cols-3">
        {company.stats.map(([value, label], i) => (
          <div key={label} data-reveal data-delay={i * 0.12}>
            <dt className="text-[28px] font-medium text-carbon md:text-[40px]">{value}</dt>
            <dd className="mt-1 text-sm text-pewter">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
