import { company } from "@/content/company";

export default function Contact() {
  const c = company.contact;
  const items = [
    ["대표이사", c.ceo, `tel:${c.phone}`, c.phone],
    ["에어몬 전용 CS 고객센터", c.cs, `tel:${c.cs}`, c.cs],
    ["이메일", c.email, `mailto:${c.email}`, c.email],
  ];
  return (
    <section id="contact" className="bg-ash px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[1383px]">
        <h2 data-reveal className="text-[28px] font-medium text-carbon md:text-[40px]">Contact</h2>
        <p className="mt-4 max-w-[640px] text-[17px] text-graphite">{company.vision}</p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map(([label, name, href, value], i) => (
            <a
              key={label}
              data-reveal
              data-delay={i * 0.12}
              href={href}
              className="rounded-xl bg-white p-8 transition-colors duration-[330ms] hover:bg-[#fafafa]"
            >
              <p className="text-sm text-pewter">{label}</p>
              {name !== value && <p className="mt-3 text-[17px] font-medium text-carbon">{name}</p>}
              <p className="mt-1 text-[17px] text-carbon">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
