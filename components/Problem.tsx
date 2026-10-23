import { company } from "@/content/company";

export default function Problem() {
  return (
    <section id="problem" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-[1383px]">
        <h2 data-reveal className="max-w-[640px] text-[28px] font-medium leading-tight text-carbon md:text-[40px]">
          아이들은 열과 땀으로 여름을 힘들어합니다.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {company.problems.map(([tag, title, body], i) => (
            <article key={tag} data-reveal data-delay={i * 0.12} className="rounded-xl bg-ash p-8">
              <span className="text-[40px] font-medium text-blue">{tag}</span>
              <h3 className="mt-6 text-[17px] font-medium text-carbon">{title}</h3>
              <p className="mt-2 text-graphite">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
