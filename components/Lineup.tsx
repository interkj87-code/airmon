import { company } from "@/content/company";

export default function Lineup() {
  return (
    <section id="lineup" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[1383px]">
        <h2 data-reveal className="max-w-[640px] text-[28px] font-medium leading-tight text-carbon md:text-[40px]">
          해마다 더 시원하게, 에어몬의 제품들
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {company.timeline.map((t, i) => (
            <article key={t.year} data-reveal data-delay={i * 0.12} className="flex flex-col rounded-xl border border-[#e5e5e5] p-8">
              <span className="text-sm font-medium text-blue">{t.year}</span>
              <h3 className="mt-3 text-[20px] font-medium text-carbon">{t.title}</h3>
              <ul className="mt-6 flex flex-1 flex-col gap-2">
                {t.products.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded bg-ash px-4 py-3 text-sm font-medium text-carbon transition-colors duration-[330ms] hover:bg-[#e8e8e8]"
                    >
                      {name}
                      <span aria-hidden>→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
