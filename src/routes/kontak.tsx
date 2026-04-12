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
        <div className="blob-magenta absolute -left-32 -top-20 h-96 w-96 opacity-40" />
        <div className="page-wrap relative z-10 text-center">
          <Badge color="magenta">Hubungi Kami</Badge>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Kami Siap{" "}
            <span className="gradient-text">Membantu Anda</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed text-text-secondary">
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
            <div className="surface-card-elevated rounded-3xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="font-heading text-2xl font-bold text-text-primary mb-2">
                    Jazakallah Khair!
                  </h3>
                  <p className="text-sm text-text-secondary">
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
                    className="mt-6 font-heading text-sm font-semibold text-magenta-bold bg-transparent border-none cursor-pointer"
                  >
                    Kirim pesan lain →
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-xl font-bold text-text-primary mb-6">
                    Kirim Pesan
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="form-label">Nama Lengkap *</label>
                      <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        required
                        placeholder="Nama Anda"
                        className="form-input"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="email@contoh.com"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Telepon / WA</label>
                        <input
                          type="tel"
                          name="telepon"
                          value={form.telepon}
                          onChange={handleChange}
                          placeholder="08xx-xxxx-xxxx"
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Saya adalah...</label>
                      <select
                        name="kategori"
                        value={form.kategori}
                        onChange={handleChange}
                        className={`form-select ${form.kategori ? "text-text-primary" : "text-text-secondary"}`}
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
                      <label className="form-label">Pesan *</label>
                      <textarea
                        name="pesan"
                        value={form.pesan}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tulis pesan Anda di sini..."
                        className="form-textarea"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center py-3.5"
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
              <div className="surface-card rounded-3xl p-7">
                <h3 className="font-heading text-base font-bold text-text-primary mb-5">
                  🏢 Wafa Pusat — Surabaya
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <MapPin className="h-4 w-4 text-magenta-bold" />,
                      label: "Alamat",
                      value:
                        "Jl. Raya Wisma Pagesangan No.9 Menanggal, Kec. Gayungan, Kota Surabaya, Jawa Timur 60234",
                    },
                    {
                      icon: <Phone className="h-4 w-4 text-magenta-bold" />,
                      label: "Telepon",
                      value: "(031) 9904 3404",
                    },
                    {
                      icon: <Phone className="h-4 w-4 text-emerald" />,
                      label: "WhatsApp",
                      value: "0811 3058 9306 / 0811 3058 9310",
                      href: "https://wa.me/6281130589310",
                    },
                    {
                      icon: <Mail className="h-4 w-4 text-magenta-bold" />,
                      label: "Email",
                      value: "sahabat@wafaindonesia.or.id",
                      href: "mailto:sahabat@wafaindonesia.or.id",
                    },
                    {
                      icon: <Clock className="h-4 w-4 text-golden" />,
                      label: "Jam Kerja",
                      value:
                        "Senin–Jumat: 08.00–16.00 · Sabtu: 08.00–12.00 WIB",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="m-0 font-heading text-xs font-semibold text-text-secondary">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-magenta-bold no-underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="m-0 text-sm text-text-primary">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-5 h-40 rounded-2xl bg-product-area border border-dashed border-line overflow-hidden">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1303085094933!2d112.7202171!3d-7.3392601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb5c24f36545%3A0xdcb8bf9b77f2ad2f!2sWafa%20Indonesia%20(Metode%20Wafa)!5e0!3m2!1sid!2sid!4v1775999776659!5m2!1sid!2sid" loading="lazy"></iframe>
                </div>
              </div>

              {/* Quick contact */}
              <a
                href="https://wa.me/6281130589310"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-3xl border-[1.5px] border-[rgba(37,211,102,0.2)] bg-gradient-to-br from-[rgba(37,211,102,0.08)] to-[rgba(18,140,126,0.06)] p-6 no-underline card-hover"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-white bg-[#25D366]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="m-0 font-heading text-sm font-bold text-[#128C7E]">
                    Chat Langsung via WhatsApp
                  </p>
                  <p className="m-0 text-xs mt-0.5 text-text-secondary">
                    0811 3058 9310 · Respon tercepat
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wafa Daerah */}
      <section className="section-padding bg-section-magenta-fade">
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
                className="rounded-2xl overflow-hidden border border-line bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenProvinsi((v) => (v === provinsi ? null : provinsi))
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[rgba(209,0,113,0.03)]"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 flex-shrink-0 text-magenta-bold" />
                    <span className="font-heading text-sm font-semibold text-text-primary">
                      {provinsi}
                    </span>
                    <span className="font-heading text-xs font-medium rounded-full px-2.5 py-0.5 bg-[rgba(209,0,113,0.08)] text-magenta-bold">
                      {daerahList.length} wilayah
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-text-secondary transition-transform duration-200 ${openProvinsi === provinsi ? "rotate-180" : ""}`}
                  />
                </button>

                {openProvinsi === provinsi && (
                  <div className="border-t border-line bg-[rgba(209,0,113,0.02)]">
                    {daerahList.map((d) => (
                      <div
                        key={`${d.provinsi}-${d.kota}`}
                        className="flex items-center justify-between px-6 py-3.5 border-b border-line last:border-b-0"
                      >
                        <div>
                          <p className="m-0 font-heading text-sm font-semibold text-text-primary">
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
                          className="flex items-center gap-1.5 font-heading text-xs font-semibold rounded-full px-4 py-2 no-underline flex-shrink-0 bg-[rgba(37,211,102,0.1)] text-[#128C7E] border border-[rgba(37,211,102,0.2)]"
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
