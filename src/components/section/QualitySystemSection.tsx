import { MessageCircle } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { useScrollReveal, revealStyle } from "../ui/useScrollReveal.ts";
import { SEVEN_M } from "../../data/content.ts";

function TimelineItem({
  m,
  index,
  total,
}: {
  m: (typeof SEVEN_M)[0];
  index: number;
  total: number;
}) {
  const { ref, visible } = useScrollReveal({ threshold: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-6 ${!isLeft ? "lg:flex-row-reverse" : ""}`}
      style={revealStyle(visible, index * 80)}
    >
      <div className="flex-1 w-full">
        <div
          className="rounded-3xl p-7 transition-all card-hover"
          style={{ background: "white", border: "1px solid var(--line)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{m.icon}</span>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: m.color, fontFamily: "var(--font-heading)" }}
            >
              {m.step}
            </span>
          </div>
          <h3
            className="font-bold text-lg mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            {m.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {m.desc}
          </p>
        </div>
      </div>

      {/* Center dot */}
      <div
        className="hidden lg:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white text-sm font-bold z-10"
        style={{
          background: m.color,
          fontFamily: "var(--font-heading)",
          boxShadow: `0 4px 16px ${m.color}40`,
          flexShrink: 0,
        }}
      >
        {index + 1}
      </div>

      {/* Mobile step number */}
      <div
        className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold flex-shrink-0"
        style={{ background: m.color, fontFamily: "var(--font-heading)" }}
      >
        {index + 1}
      </div>

      <div className="flex-1 w-full hidden lg:block" />
    </div>
  );
}

export function QualitySystemSection() {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal({
    threshold: 0.2,
  });

  return (
    <section
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, rgba(31,129,36,0.03) 0%, transparent 100%)",
      }}
    >
      <div className="page-wrap">
        <div ref={titleRef} style={revealStyle(titleVisible)}>
          <SectionHeading
            kicker="7M Sistem Manajemen Mutu"
            title="Jaminan Mutu Pembelajaran Al-Qur'an"
            subtitle="7 tahapan terstruktur yang memastikan kualitas pembelajaran konsisten dan terukur di setiap lembaga mitra — dari pemetaan awal hingga pengukuhan syahadah."
            align="center"
            className="mb-12"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop) */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, var(--magenta-bold), var(--emerald))",
            }}
          />

          <div className="space-y-6">
            {SEVEN_M.map((m, i) => (
              <TimelineItem
                key={m.step}
                m={m}
                index={i}
                total={SEVEN_M.length}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p
            className="text-base font-semibold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Ingin Terapkan 7M di Lembaga Anda?
          </p>
          <a
            href="https://wa.me/6281130589310"
            target="_blank"
            rel="noreferrer"
            className="btn-primary no-underline"
          >
            <MessageCircle className="h-4 w-4" />
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
