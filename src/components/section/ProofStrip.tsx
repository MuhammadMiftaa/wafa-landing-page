import { MapPin, GraduationCap, Users, Calendar } from "lucide-react";
import { CountUp } from "../ui/CountUp";
import { Marquee } from "../ui/Marquee";
import { TestimonialCarousel } from "../ui/TestimonialCarousel";
import { TESTIMONIALS, MITRA_LOGOS } from "../../data/content.ts";

const STATS = [
  {
    icon: <MapPin className="h-5 w-5" />,
    end: 35,
    suffix: "",
    label: "Provinsi Indonesia",
    colorClass: "text-magenta-bold",
    bgClass: "bg-[rgba(209,0,113,0.12)]",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    end: 15000,
    suffix: "+",
    label: "Guru Tersertifikasi",
    colorClass: "text-emerald",
    bgClass: "bg-[rgba(31,129,36,0.12)]",
  },
  {
    icon: <Users className="h-5 w-5" />,
    end: 500000,
    suffix: "+",
    label: "Siswa Aktif",
    colorClass: "text-golden",
    bgClass: "bg-[rgba(255,145,0,0.12)]",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    end: 2012,
    suffix: "",
    label: "Berdiri Sejak",
    colorClass: "text-deep",
    bgClass: "bg-[rgba(75,42,103,0.12)]",
  },
];

export function ProofStrip() {
  return (
    <section className="py-16 bg-gradient-to-b from-[rgba(209,0,113,0.02)] to-[rgba(31,129,36,0.02)]">
      {/* Marquee logos */}
      <div className="mb-10">
        <p className="text-center font-heading text-xs font-semibold uppercase tracking-widest text-text-secondary mb-6">
          Dipercaya oleh 1200+ Lembaga di Seluruh Indonesia
        </p>
        <Marquee speed={25} pauseOnHover>
          {MITRA_LOGOS.map((name) => (
            <div
              key={name}
              className="mx-6 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg font-heading text-sm font-bold text-white bg-gradient-to-br from-magenta-bold to-deep">
                {name.slice(0, 1)}
              </div>
              <span className="font-heading text-sm font-semibold text-text-secondary">
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Stats row */}
      <div className="page-wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="surface-card rounded-3xl p-6 text-center card-hover"
            >
              <div
                className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${stat.bgClass} ${stat.colorClass}`}
              >
                {stat.icon}
              </div>
              <p className={`font-heading text-2xl md:text-3xl font-bold mb-1 ${stat.colorClass}`}>
                <CountUp end={stat.end} suffix={stat.suffix} duration={2500} />
              </p>
              <p className="text-xs text-text-secondary">
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
