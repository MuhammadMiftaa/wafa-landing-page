import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Send, MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { SectionHeading, Badge } from "../components/ui/index.ts";
import { WAFA_DAERAH } from "../data/content.ts";

export const Route = createFileRoute("/kontak")({ component: KontakPage });

const KATEGORI = [
  "Individu / Keluarga",
  "Lembaga Pendidikan",
  "Guru / Calon Guru",
  "Media / Jurnalis",
  "Lainnya",
];

// Group daerah by provinsi
function groupByProvinsi(daerah: typeof WAFA_DAERAH) {
  return daerah.reduce<Record<string, typeof WAFA_DAERAH>>((acc, d) => {
    if (!acc[d.provinsi]) acc[d.provinsi] = [];
    acc[d.provinsi].push(d);
    return acc;
  }, {});
}

function KontakPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    kategori: "",
    pesan: "",
  });
  const [sent, setSent] = useState(false);
  const [openProvinsi, setOpenProvinsi] = useState<string | null>("Jawa Timur");

  const grouped = groupByProvinsi(WAFA_DAERAH);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(209,0,113,0.12), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Hubungi Kami</Badge>
          <h1
            className="mt-4 text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Kami Siap{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--magenta-bold),var(--emerald))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Membantu Anda
            </span>
          </h1>
          <p
            className="max-w-xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Punya pertanyaan tentang metode, kemitraan, atau produk Wafa? Tim
            kami merespons dalam 1×24 jam kerja.
          </p>
        </div>
      </section>

      {/* Main — Form + Info */}
      <section className="pb-16">
        <div className="page-wrap">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: "white",
                border: "1px solid var(--line)",
                boxShadow: "0 16px 48px rgba(157,22,124,0.06)",
              }}
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Jazakallah Khair!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Pesan Anda sudah kami terima. Tim Wafa akan menghubungi Anda
                    dalam 1×24 jam kerja.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm({
                        nama: "",
                        email: "",
                        telepon: "",
                        kategori: "",
                        pesan: "",
                      });
                    }}
                    className="mt-6 text-sm font-semibold"
                    style={{
                      color: "var(--magenta-bold)",
                      fontFamily: "var(--font-heading)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Kirim pesan lain →
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="text-xl font-bold mb-6"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Kirim Pesan
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        required
                        placeholder="Nama Anda"
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          borderColor: "var(--line)",
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-sans)",
                        }}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{
                            fontFamily: "var(--font-heading)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="email@contoh.com"
                          className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all"
                          style={{
                            borderColor: "var(--line)",
                            color: "var(--text-primary)",
                            fontFamily: "var(--font-sans)",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{
                            fontFamily: "var(--font-heading)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Telepon / WA
                        </label>
                        <input
                          type="tel"
                          name="telepon"
                          value={form.telepon}
                          onChange={handleChange}
                          placeholder="08xx-xxxx-xxxx"
                          className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all"
                          style={{
                            borderColor: "var(--line)",
                            color: "var(--text-primary)",
                            fontFamily: "var(--font-sans)",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Saya adalah...
                      </label>
                      <select
                        name="kategori"
                        value={form.kategori}
                        onChange={handleChange}
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all appearance-none"
                        style={{
                          borderColor: "var(--line)",
                          color: form.kategori
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                          fontFamily: "var(--font-sans)",
                          background: "white",
                        }}
                      >
                        <option value="">Pilih kategori...</option>
                        {KATEGORI.map((k) => (
                          <option key={k} value={k}>
                            {k}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        Pesan *
                      </label>
                      <textarea
                        name="pesan"
                        value={form.pesan}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tulis pesan Anda di sini..."
                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all resize-none"
                        style={{
                          borderColor: "var(--line)",
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-sans)",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-full py-3.5 transition-all"
                      style={{
                        fontFamily: "var(--font-heading)",
                        background:
                          "linear-gradient(135deg, var(--magenta-bold), var(--magenta-deep))",
                        boxShadow: "0 4px 20px rgba(209,0,113,0.3)",
                      }}
                    >
                      <Send className="h-4 w-4" />
                      Kirim Pesan
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Wafa Pusat */}
              <div
                className="rounded-3xl p-7"
                style={{
                  background: "white",
                  border: "1px solid var(--line)",
                  boxShadow: "0 8px 32px rgba(157,22,124,0.05)",
                }}
              >
                <h3
                  className="font-bold text-base mb-5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  🏢 Wafa Pusat — Surabaya
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <MapPin
                          className="h-4 w-4"
                          style={{ color: "var(--magenta-bold)" }}
                        />
                      ),
                      label: "Alamat",
                      value:
                        "Jl. Raya Wisma Pagesangan No.9 Menanggal, Kec. Gayungan, Kota Surabaya, Jawa Timur 60234",
                    },
                    {
                      icon: (
                        <Phone
                          className="h-4 w-4"
                          style={{ color: "var(--magenta-bold)" }}
                        />
                      ),
                      label: "Telepon",
                      value: "(031) 9904 3404",
                    },
                    {
                      icon: (
                        <Phone
                          className="h-4 w-4"
                          style={{ color: "var(--emerald)" }}
                        />
                      ),
                      label: "WhatsApp",
                      value: "0811 3058 9306 / 0811 3058 9310",
                      href: "https://wa.me/6281130589310",
                    },
                    {
                      icon: (
                        <Mail
                          className="h-4 w-4"
                          style={{ color: "var(--magenta-bold)" }}
                        />
                      ),
                      label: "Email",
                      value: "sahabat@wafaindonesia.or.id",
                      href: "mailto:sahabat@wafaindonesia.or.id",
                    },
                    {
                      icon: (
                        <Clock
                          className="h-4 w-4"
                          style={{ color: "var(--golden)" }}
                        />
                      ),
                      label: "Jam Kerja",
                      value:
                        "Senin–Jumat: 08.00–16.00 · Sabtu: 08.00–12.00 WIB",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div>
                        <p
                          className="m-0 text-xs font-semibold"
                          style={{
                            fontFamily: "var(--font-heading)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm no-underline"
                            style={{ color: "var(--magenta-bold)" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className="m-0 text-sm"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div
                  className="mt-5 rounded-2xl flex items-center justify-center"
                  style={{
                    height: 160,
                    background:
                      "linear-gradient(135deg, rgba(209,0,113,0.05), rgba(31,129,36,0.05))",
                    border: "1px dashed var(--line)",
                  }}
                >
                  <div className="text-center">
                    <MapPin
                      className="h-8 w-8 mx-auto mb-2"
                      style={{ color: "var(--magenta-bold)" }}
                    />
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Peta Lokasi Wafa Pusat
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <a
                href="https://wa.me/6281130589310"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-3xl p-6 no-underline transition-all card-hover"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,211,102,0.08), rgba(18,140,126,0.06))",
                  border: "1.5px solid rgba(37,211,102,0.2)",
                }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-white"
                  style={{ background: "#25D366" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="m-0 font-bold text-sm"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#128C7E",
                    }}
                  >
                    Chat Langsung via WhatsApp
                  </p>
                  <p
                    className="m-0 text-xs mt-0.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    0811 3058 9310 · Respon tercepat
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wafa Daerah */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg, rgba(209,0,113,0.02) 0%, transparent 100%)",
        }}
      >
        <div className="page-wrap">
          <SectionHeading
            kicker="Perwakilan Daerah"
            title="Wafa di Seluruh Indonesia"
            subtitle="Temukan koordinator Wafa di daerah Anda untuk pendampingan langsung dan informasi lokal."
          />

          <div className="mt-10 space-y-3">
            {Object.entries(grouped).map(([provinsi, daerahList]) => (
              <div
                key={provinsi}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--line)", background: "white" }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenProvinsi((v) => (v === provinsi ? null : provinsi))
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[rgba(209,0,113,0.03)]"
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: "var(--magenta-bold)" }}
                    />
                    <span
                      className="font-semibold text-sm"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {provinsi}
                    </span>
                    <span
                      className="text-xs font-medium rounded-full px-2.5 py-0.5"
                      style={{
                        background: "rgba(209,0,113,0.08)",
                        color: "var(--magenta-bold)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {daerahList.length} wilayah
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${openProvinsi === provinsi ? "rotate-180" : ""}`}
                    style={{ color: "var(--text-secondary)" }}
                  />
                </button>

                {openProvinsi === provinsi && (
                  <div
                    className="border-t"
                    style={{
                      borderColor: "var(--line)",
                      background: "rgba(209,0,113,0.02)",
                    }}
                  >
                    {daerahList.map((d) => (
                      <div
                        key={`${d.provinsi}-${d.kota}`}
                        className="flex items-center justify-between px-6 py-3.5 border-b last:border-b-0"
                        style={{ borderColor: "var(--line)" }}
                      >
                        <div>
                          <p
                            className="m-0 font-semibold text-sm"
                            style={{
                              fontFamily: "var(--font-heading)",
                              color: "var(--text-primary)",
                            }}
                          >
                            {d.kota}
                          </p>
                          <p
                            className="m-0 text-xs mt-0.5"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            Koordinator: {d.ketua}
                          </p>
                        </div>
                        <a
                          href={`https://wa.me/${d.wa}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold rounded-full px-4 py-2 no-underline flex-shrink-0"
                          style={{
                            background: "rgba(37,211,102,0.1)",
                            color: "#128C7E",
                            border: "1px solid rgba(37,211,102,0.2)",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          <Phone className="h-3 w-3" />
                          WhatsApp
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
