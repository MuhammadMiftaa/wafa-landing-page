import { MapPin, GraduationCap, Users, Calendar } from "lucide-react";
import { CountUp } from "../ui/CountUp";
import { Marquee } from "../ui/Marquee";
import { TestimonialCarousel } from "../ui/TestimonialCarousel";
import { TESTIMONIALS, MITRA_LOGOS } from "../../data/content.ts";

export function ProofStrip() {
  return (
    <section
      style={{
        paddingBlock: "4rem",
        background:
          "linear-gradient(180deg, rgba(209,0,113,0.02) 0%, rgba(31,129,36,0.02) 100%)",
      }}
    >
      {/* Marquee logos */}
      <div className="mb-10">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-6"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-heading)",
          }}
        >
          Dipercaya oleh 1200+ Lembaga di Seluruh Indonesia
        </p>
        <Marquee speed={25} pauseOnHover>
          {MITRA_LOGOS.map((name) => (
            <div
              key={name}
              className="mx-6 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <div
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--magenta-bold), var(--deep))",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {name.slice(0, 1)}
              </div>
              <span
                className="font-semibold text-sm"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Stats row */}
      <div className="page-wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <MapPin className="h-5 w-5" />,
              end: 35,
              suffix: "",
              label: "Provinsi Indonesia",
              color: "var(--magenta-bold)",
            },
            {
              icon: <GraduationCap className="h-5 w-5" />,
              end: 15000,
              suffix: "+",
              label: "Guru Tersertifikasi",
              color: "var(--emerald)",
            },
            {
              icon: <Users className="h-5 w-5" />,
              end: 500000,
              suffix: "+",
              label: "Siswa Aktif",
              color: "var(--golden)",
            },
            {
              icon: <Calendar className="h-5 w-5" />,
              end: 2012,
              suffix: "",
              label: "Berdiri Sejak",
              color: "var(--deep)",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl p-6 text-center transition-all card-hover"
              style={{
                background: "white",
                border: "1px solid var(--line)",
                boxShadow: "0 8px 24px rgba(157,22,124,0.05)",
              }}
            >
              <div
                className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `${stat.color}12`, color: stat.color }}
              >
                {stat.icon}
              </div>
              <p
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ fontFamily: "var(--font-heading)", color: stat.color }}
              >
                <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
              </p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto">
          <TestimonialCarousel
            testimonials={TESTIMONIALS.slice(0, 3)}
            autoPlayMs={6000}
            showDots
            showArrows={false}
          />
        </div>
      </div>
    </section>
  );
}
