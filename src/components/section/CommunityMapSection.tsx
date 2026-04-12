import { useState } from "react";
import { MapPin, Search, Phone } from "lucide-react";
import { Badge } from "../ui/index.ts";
import { WAFA_DAERAH } from "../../data/content.ts";

const PROVINSI_COORDS: Record<string, { x: number; y: number; count: number }> =
  {
    Aceh: { x: 8, y: 18, count: 12 },
    "Sumatera Utara": { x: 11, y: 26, count: 28 },
    "Sumatera Barat": { x: 11, y: 38, count: 15 },
    Riau: { x: 16, y: 34, count: 22 },
    "Kepulauan Riau": { x: 20, y: 38, count: 8 },
    Jambi: { x: 15, y: 44, count: 10 },
    Bengkulu: { x: 12, y: 50, count: 7 },
    "Sumatera Selatan": { x: 17, y: 52, count: 18 },
    "Kepulauan Bangka Belitung": { x: 19, y: 56, count: 5 },
    Lampung: { x: 16, y: 60, count: 20 },
    Banten: { x: 23, y: 60, count: 35 },
    "DKI Jakarta": { x: 24.5, y: 58, count: 80 },
    "Jawa Barat": { x: 26, y: 62, count: 95 },
    "Jawa Tengah": { x: 31, y: 61, count: 120 },
    "DI Yogyakarta": { x: 32, y: 63, count: 25 },
    "Jawa Timur": { x: 36, y: 61, count: 150 },
    Bali: { x: 40, y: 64, count: 18 },
    "Nusa Tenggara Barat": { x: 43, y: 64, count: 12 },
    "Nusa Tenggara Timur": { x: 49, y: 68, count: 8 },
    "Kalimantan Barat": { x: 26, y: 44, count: 14 },
    "Kalimantan Tengah": { x: 31, y: 42, count: 10 },
    "Kalimantan Selatan": { x: 36, y: 48, count: 18 },
    "Kalimantan Timur": { x: 39, y: 36, count: 22 },
    "Kalimantan Utara": { x: 40, y: 28, count: 6 },
    "Sulawesi Utara": { x: 52, y: 30, count: 8 },
    Gorontalo: { x: 51, y: 36, count: 5 },
    "Sulawesi Tengah": { x: 50, y: 42, count: 10 },
    "Sulawesi Barat": { x: 45, y: 46, count: 7 },
    "Sulawesi Selatan": { x: 47, y: 52, count: 35 },
    "Sulawesi Tenggara": { x: 52, y: 52, count: 9 },
    Maluku: { x: 62, y: 48, count: 6 },
    "Maluku Utara": { x: 62, y: 36, count: 4 },
    "Papua Barat": { x: 70, y: 44, count: 5 },
    "Papua Barat Daya": { x: 68, y: 50, count: 3 },
    Papua: { x: 80, y: 52, count: 4 },
  };

// Provinces with Wafa presence (from data)
const ACTIVE_PROVINCES = new Set(WAFA_DAERAH.map((d) => d.provinsi));

export function CommunityMapSection() {
  const [hoveredProvinsi, setHoveredProvinsi] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filteredDaerah = WAFA_DAERAH.filter(
    (d) =>
      search === "" ||
      d.provinsi.toLowerCase().includes(search.toLowerCase()) ||
      d.kota.toLowerCase().includes(search.toLowerCase()) ||
      d.ketua.toLowerCase().includes(search.toLowerCase()),
  );

  const groupedFiltered = filteredDaerah.reduce<
    Record<string, typeof WAFA_DAERAH>
  >((acc, d) => {
    if (!acc[d.provinsi]) acc[d.provinsi] = [];
    acc[d.provinsi].push(d);
    return acc;
  }, {});

  return (
    <section className="section-padding bg-section-emerald-fade">
      <div className="page-wrap">
        <div className="text-center mb-12">
          <Badge color="emerald">Sebaran Nasional</Badge>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Wafa di{" "}
            <span className="gradient-text">
              35 Provinsi
            </span>{" "}
            Indonesia
          </h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-text-secondary">
            Dari Sabang sampai Merauke, Wafa hadir untuk memastikan setiap anak
            Indonesia bisa belajar Al-Qur'an dengan mudah dan menyenangkan.
          </p>
        </div>

        {/* Map visualization */}
        <div className="relative surface-card-elevated rounded-3xl overflow-hidden mb-10 p-6">
          <div className="relative pb-[42%]">
            {/* SVG Indonesia map (simplified dot map) */}
            <svg
              viewBox="0 0 100 80"
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              {/* Ocean background */}
              <rect
                x="0"
                y="0"
                width="100"
                height="80"
                fill="rgba(31,129,36,0.03)"
                rx="8"
              />

              {/* Province dots */}
              {Object.entries(PROVINSI_COORDS).map(([prov, coord]) => {
                const isActive = ACTIVE_PROVINCES.has(prov);
                const isHovered = hoveredProvinsi === prov;
                return (
                  <g key={prov}>
                    <circle
                      cx={`${coord.x}%`}
                      cy={`${coord.y}%`}
                      r={isActive ? (isHovered ? "2.2%" : "1.8%") : "1.2%"}
                      fill={
                        isActive
                          ? isHovered
                            ? "var(--color-magenta-bold)"
                            : "var(--color-emerald)"
                          : "rgba(157,22,124,0.15)"
                      }
                      className="transition-all duration-200"
                      style={{
                        cursor: isActive ? "pointer" : "default",
                        filter: isHovered
                          ? "drop-shadow(0 0 6px rgba(209,0,113,0.5))"
                          : "none",
                      }}
                      onMouseEnter={() => isActive && setHoveredProvinsi(prov)}
                      onMouseLeave={() => setHoveredProvinsi(null)}
                    />
                    {isActive && (
                      <circle
                        cx={`${coord.x}%`}
                        cy={`${coord.y}%`}
                        r="0.6%"
                        fill="white"
                        className="pointer-events-none"
                      />
                    )}
                  </g>
                );
              })}

              {/* Tooltip */}
              {hoveredProvinsi && PROVINSI_COORDS[hoveredProvinsi] && (
                <foreignObject
                  x={`${Math.min(PROVINSI_COORDS[hoveredProvinsi].x + 2, 70)}%`}
                  y={`${Math.max(PROVINSI_COORDS[hoveredProvinsi].y - 12, 2)}%`}
                  width="120"
                  height="50"
                  className="overflow-visible"
                >
                  <div className="bg-deep text-white w-fit flex flex-col justify-center items-center rounded-xs px-[2.5px] py-0.5 font-heading text-[2px] whitespace-nowrap pointer-events-none shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <div className="font-bold mt-[0.5px]">{hoveredProvinsi}</div>
                    <div className="opacity-80 text-[1.8px]">
                      {
                        WAFA_DAERAH.filter(
                          (d) => d.provinsi === hoveredProvinsi,
                        ).length
                      }{" "}
                      wilayah aktif
                    </div>
                  </div>
                </foreignObject>
              )}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 pt-4 border-t border-line">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <div className="h-3 w-3 rounded-full bg-emerald" />
              Provinsi dengan Wafa Daerah
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <div className="h-3 w-3 rounded-full bg-[rgba(157,22,124,0.15)]" />
              Provinsi lainnya (mitra langsung)
            </div>
            <div className="font-heading text-xs font-semibold text-magenta-bold">
              Hover untuk detail wilayah
            </div>
          </div>
        </div>

        {/* Search + List */}
        <div className="max-w-2xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari provinsi, kota, atau koordinator..."
              className="form-input pl-11 !rounded-full shadow-[0_4px_16px_rgba(157,22,124,0.05)]"
            />
          </div>

          {/* Results */}
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {Object.keys(groupedFiltered).length === 0 ? (
              <div className="text-center py-12">
                <MapPin className="h-10 w-10 mx-auto mb-3 text-line" />
                <p className="text-sm text-text-secondary">
                  Tidak ditemukan. Coba kata kunci lain.
                </p>
              </div>
            ) : (
              Object.entries(groupedFiltered).map(([provinsi, daerahList]) => (
                <div
                  key={provinsi}
                  className="rounded-2xl overflow-hidden bg-white border border-line"
                >
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-line bg-[rgba(209,0,113,0.02)]">
                    <MapPin className="h-3.5 w-3.5 text-magenta-bold" />
                    <span className="font-heading text-sm font-semibold text-text-primary">
                      {provinsi}
                    </span>
                    <span className="ml-auto font-heading text-xs font-bold rounded-full px-2.5 py-0.5 bg-[rgba(209,0,113,0.08)] text-magenta-bold">
                      {daerahList.length} wilayah
                    </span>
                  </div>
                  {daerahList.map((d) => (
                    <div
                      key={`${d.provinsi}-${d.kota}`}
                      className="flex items-center justify-between px-5 py-3 border-b border-line last:border-b-0"
                    >
                      <div>
                        <p className="m-0 font-heading text-sm font-medium text-text-primary">
                          {d.kota}
                        </p>
                        <p className="m-0 text-xs mt-0.5 text-text-secondary">
                          Koordinator: {d.ketua}
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/${d.wa}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-heading text-xs font-semibold rounded-full px-3 py-1.5 no-underline flex-shrink-0 transition-all hover:scale-105 bg-[rgba(37,211,102,0.1)] text-[#128C7E] border border-[rgba(37,211,102,0.2)]"
                      >
                        <Phone className="h-3 w-3" />
                        Chat
                      </a>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>

          <p className="text-xs text-center mt-6 text-text-secondary">
            Tidak ada di daftar?{" "}
            <a
              href="https://wa.me/6281130589310"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-magenta-bold"
            >
              Hubungi Wafa Pusat →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
