import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

/* ─── REVEAL HOOK ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── DATA ─── */
const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Честный ЗНАК", href: "#znak" },
  { label: "Сертификаты", href: "#certs" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Droplets",
    title: "Уход за лицом",
    desc: "Сыворотки, кремы, тоники, маски, мицеллярная вода — любые форматы и концентрации активных компонентов.",
    grad: "linear-gradient(135deg,#E8006F,#7B11D9)",
  },
  {
    icon: "Sparkles",
    title: "Уход за телом",
    desc: "Скрабы, лосьоны, масла, антицеллюлитные средства, кремы для рук и ног.",
    grad: "linear-gradient(135deg,#7B11D9,#3B0A8A)",
  },
  {
    icon: "Wind",
    title: "Уход за волосами",
    desc: "Шампуни, бальзамы, маски, сыворотки и масла. Профессиональные линейки для любых типов волос.",
    grad: "linear-gradient(135deg,#FFB400,#FF5C38)",
  },
  {
    icon: "Layers",
    title: "Бренд под ключ",
    desc: "Разработка формулы → дизайн упаковки → сертификация → маркировка. Полный цикл без посредников.",
    grad: "linear-gradient(135deg,#E8006F,#FF5C38)",
  },
  {
    icon: "FileCheck",
    title: "Сертификация",
    desc: "Декларации ЕАЭС, паспорта безопасности, протоколы испытаний. Весь пакет под ключ.",
    grad: "linear-gradient(135deg,#059669,#0891b2)",
  },
  {
    icon: "QrCode",
    title: "Честный ЗНАК",
    desc: "Маркировка DataMatrix прямо на производстве. Полное соответствие 88-ФЗ с первого дня.",
    grad: "linear-gradient(135deg,#7B11D9,#E8006F)",
  },
];

const STATS = [
  { val: "500+", label: "запущенных брендов" },
  { val: "10", label: "лет на рынке" },
  { val: "3", label: "дня на первый образец" },
  { val: "100%", label: "сертифицированная продукция" },
];

const PORTFOLIO = [
  { name: "SkinLux", cat: "Уход за лицом", sku: "12 SKU", c1: "#E8006F", c2: "#7B11D9" },
  { name: "NaturBody", cat: "Уход за телом", sku: "8 SKU", c1: "#7B11D9", c2: "#3B0A8A" },
  { name: "HairPro", cat: "Волосы", sku: "15 SKU", c1: "#FFB400", c2: "#FF5C38" },
  { name: "PureGlow", cat: "Органика", sku: "6 SKU", c1: "#059669", c2: "#0891b2" },
  { name: "LuxeSkin", cat: "Премиум", sku: "20 SKU", c1: "#E8006F", c2: "#FF5C38" },
  { name: "FreshLine", cat: "Масс-маркет", sku: "10 SKU", c1: "#7B11D9", c2: "#E8006F" },
];

const STEPS = [
  { n: "01", t: "Заявка", d: "Описываете идею и параметры продукта" },
  { n: "02", t: "Формула", d: "Разрабатываем состав в нашей лаборатории" },
  { n: "03", t: "Образец", d: "Присылаем пробную партию за 3 дня" },
  { n: "04", t: "Дизайн", d: "Создаём упаковку и айдентику бренда" },
  { n: "05", t: "Документы", d: "Оформляем сертификаты и декларации" },
  { n: "06", t: "Тираж", d: "Производим и маркируем готовую продукцию" },
];

const CERTS = [
  { icon: "Shield", t: "Декларация ЕАЭС", d: "ТР ЕАЭС 009/2011 — обязательный документ для всей косметики в России и СНГ." },
  { icon: "FlaskConical", t: "Протоколы испытаний", d: "Тестирование в аккредитованных лабораториях по всем необходимым показателям." },
  { icon: "BookOpen", t: "Паспорт безопасности", d: "Полная документация по безопасности ингредиентов и готового продукта." },
  { icon: "BadgeCheck", t: "GMP стандарты", d: "Производство по международным стандартам надлежащей производственной практики." },
];

const MARQUEE = [
  "Уход за лицом", "Уход за телом", "Уход за волосами", "Честный ЗНАК",
  "Бренд под ключ", "Сертификация ЕАЭС", "Малый тираж", "Полный цикл",
  "Уход за лицом", "Уход за телом", "Уход за волосами", "Честный ЗНАК",
  "Бренд под ключ", "Сертификация ЕАЭС", "Малый тираж", "Полный цикл",
];

/* ─── MAIN ─── */
export default function Index() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", type: "", volume: "", wish: "" });
  const [sent, setSent] = useState(false);

  const upd = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <div className="min-h-screen" style={{ background: "var(--dark)", color: "#fff" }}>

      {/* ══ NAV ══ */}
      <nav className="nav-glass fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[66px] flex items-center justify-between">
          <a href="#" className="font-cormorant text-2xl font-bold tracking-tight">
            <span className="g-text">LUMIÈRE</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>lab</span>
          </a>
          <div className="hidden lg:flex items-center gap-7">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{l.label}</a>
            ))}
          </div>
          <a href="#order" className="hidden lg:block btn-primary px-6 py-2.5 rounded-full text-sm">
            Заказать производство
          </a>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} style={{ color: "rgba(255,255,255,0.7)" }} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden px-6 pb-5 pt-2 flex flex-col gap-3 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="py-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#order" className="btn-primary px-6 py-3 rounded-full text-sm text-center mt-2">Заказать производство</a>
          </div>
        )}
      </nav>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ background: "var(--dark)" }}>
        {/* Animated blobs */}
        <div className="blob anim-blob1" style={{ width: 700, height: 700, background: "rgba(232,0,111,0.15)", top: -200, left: -240 }} />
        <div className="blob anim-blob2" style={{ width: 550, height: 550, background: "rgba(123,17,217,0.17)", bottom: -140, right: -180 }} />
        <div className="blob anim-blob3" style={{ width: 350, height: 350, background: "rgba(255,180,0,0.07)", top: "45%", left: "48%", marginLeft: -175, marginTop: -175 }} />

        {/* Orbit rings */}
        <div className="orbit anim-spin" style={{ width: 540, height: 540, top: "50%", right: "4%", marginTop: -270 }} />
        <div className="orbit anim-spin-r" style={{ width: 380, height: 380, top: "50%", right: "9%", marginTop: -190 }} />
        <div className="orbit" style={{ width: 220, height: 220, top: "50%", right: "15%", marginTop: -110 }} />

        {/* Floating dots */}
        <div className="absolute w-3 h-3 rounded-full anim-float2 hidden lg:block" style={{ background: "var(--gold)", top: "26%", right: "21%", boxShadow: "0 0 24px rgba(255,180,0,0.7)" }} />
        <div className="absolute w-2 h-2 rounded-full anim-float hidden lg:block" style={{ background: "var(--magenta)", bottom: "32%", left: "16%", boxShadow: "0 0 18px rgba(232,0,111,0.7)" }} />
        <div className="absolute w-1.5 h-1.5 rounded-full anim-float2 hidden lg:block" style={{ background: "var(--violet)", top: "60%", right: "30%", boxShadow: "0 0 12px rgba(123,17,217,0.8)" }} />

        <div className="max-w-7xl mx-auto px-6 w-full py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <div>
              <div className="tag mb-7 anim-up" style={{ animationDelay: "0.05s" }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--magenta)" }} />
                Контрактное производство косметики
              </div>

              <h1 className="font-cormorant font-bold leading-none mb-7 anim-up" style={{ fontSize: "clamp(3rem,7vw,6rem)", animationDelay: "0.15s" }}>
                Ваш бренд<br />
                <em className="g-text not-italic">косметики</em><br />
                <span style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300, fontSize: "0.82em" }}>под ключ</span>
              </h1>

              <p className="mb-10 leading-relaxed anim-up" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.06rem", maxWidth: 460, animationDelay: "0.25s" }}>
                Производим косметику для ухода за лицом, телом и волосами. От рецептуры и дизайна — до готового продукта с сертификатами и Честным ЗНАКом.
              </p>

              <div className="flex flex-wrap gap-4 anim-up" style={{ animationDelay: "0.35s" }}>
                <a href="#order" className="btn-primary px-8 py-4 rounded-full text-base">Заказать производство</a>
                <a href="#services" className="btn-outline px-8 py-4 rounded-full text-base">Наши услуги</a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 anim-up" style={{ animationDelay: "0.45s" }}>
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="stat-num g-text" style={{ fontSize: "2.1rem" }}>{s.val}</div>
                    <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.73rem", marginTop: 5, lineHeight: 1.35 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — glass cards */}
            <div className="hidden lg:flex flex-col gap-5">
              {/* Main product card */}
              <div className="rounded-3xl p-8 relative overflow-hidden anim-scale" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", animationDelay: "0.2s" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 75% 25%, rgba(232,0,111,0.2), transparent 60%)", pointerEvents: "none" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#E8006F,#7B11D9)" }}>
                      <Icon name="Sparkles" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">Рецептура готова</div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>3 дня с момента заявки</div>
                    </div>
                    <div className="ml-auto px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(5,150,105,0.15)", color: "#34d399", border: "1px solid rgba(52,211,153,0.25)" }}>
                      Готово
                    </div>
                  </div>
                  <div className="font-cormorant font-bold g-text text-4xl mb-2">Сыворотка №7</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.83rem" }}>Гиалуроновая кислота · Ретинол · Ниацинамид</div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {["Гипоаллергенно", "Веган", "Сертифицировано"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(232,0,111,0.1)", border: "1px solid rgba(232,0,111,0.25)", color: "var(--magenta)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl p-5 anim-float" style={{ background: "rgba(123,17,217,0.13)", border: "1px solid rgba(123,17,217,0.22)" }}>
                  <Icon name="QrCode" size={26} style={{ color: "var(--gold)" }} />
                  <div className="font-semibold mt-3 text-white text-sm">Честный ЗНАК</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: 3 }}>Готово к обороту</div>
                </div>
                <div className="rounded-2xl p-5 anim-float2" style={{ background: "rgba(255,180,0,0.07)", border: "1px solid rgba(255,180,0,0.18)" }}>
                  <Icon name="Award" size={26} style={{ color: "var(--gold)" }} />
                  <div className="font-semibold mt-3 text-white text-sm">Сертификат ЕАЭС</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: 3 }}>Полный пакет</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, inset: "auto 0 0", height: 80, background: "linear-gradient(to bottom, transparent, var(--dark))", zIndex: 5, pointerEvents: "none" }} />
      </section>

      {/* ══ MARQUEE ══ */}
      <div className="marquee-wrap border-y py-4" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="marquee-inner">
          {MARQUEE.map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-7 whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              {item}
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--magenta)", opacity: 0.7, display: "inline-block" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <section id="services" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Что мы производим</div>
          <h2 className="font-cormorant font-bold g-text" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Полная линейка услуг
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7, fontSize: "0.95rem" }}>
            От единственного продукта до полной линейки бренда — закроем всё производство под ключ
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="card-beauty rounded-2xl p-7 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="service-icon-wrap mb-5" style={{ background: s.grad }}>
                <Icon name={s.icon} size={25} />
              </div>
              <h3 className="font-cormorant font-bold text-2xl text-white mb-3">{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.48)", lineHeight: 1.68, fontSize: "0.88rem" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEP */}
      <div className="sep max-w-5xl mx-auto" />

      {/* ══ ABOUT ══ */}
      <section id="about" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="section-label mb-4">О производстве</div>
            <h2 className="font-cormorant font-bold leading-tight mb-7" style={{ fontSize: "clamp(2.2rem,4.5vw,3.5rem)" }}>
              Современный завод{" "}
              <span className="g-text-mv">полного цикла</span>
            </h2>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.78, fontSize: "0.95rem" }}>
              Наше производство соответствует требованиям GMP и оснащено профессиональным оборудованием. Запускаем тиражи от первой пробной партии до промышленного масштаба.
            </p>
            <p className="mb-9" style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.78, fontSize: "0.95rem" }}>
              Собственная R&D-лаборатория, дизайн-студия, контроль качества и юридический отдел — всё под одной крышей без посредников.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Factory", t: "Своё производство" },
                { icon: "FlaskConical", t: "R&D лаборатория" },
                { icon: "Palette", t: "Дизайн-студия" },
                { icon: "ShieldCheck", t: "Контроль качества" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(232,0,111,0.09)", border: "1px solid rgba(232,0,111,0.2)" }}>
                    <Icon name={f.icon} size={16} style={{ color: "var(--magenta)" }} />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.68)", fontSize: "0.88rem", fontWeight: 500 }}>{f.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps panel */}
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="rounded-3xl p-7 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 180, height: 180, background: "radial-gradient(circle, rgba(123,17,217,0.22), transparent 70%)", pointerEvents: "none" }} />
              <div className="section-label mb-6">Как мы работаем</div>
              <div className="space-y-5 relative z-10">
                {STEPS.map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{ background: "rgba(232,0,111,0.1)", border: "1px solid rgba(232,0,111,0.28)", color: "var(--magenta)", minWidth: 36 }}>
                      {s.n}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{s.t}</div>
                      <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", marginTop: 3 }}>{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ══ PORTFOLIO ══ */}
      <section id="portfolio" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Наши работы</div>
          <h2 className="font-cormorant font-bold g-text-vg" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Портфолио брендов
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {PORTFOLIO.map((p, i) => (
            <div key={p.name}
              className="reveal rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${p.c1}1E, ${p.c2}2E)`,
                border: `1px solid ${p.c1}2A`,
                transitionDelay: `${i * 0.07}s`,
                transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
                cursor: "pointer",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 50px ${p.c1}22`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ position: "absolute", top: -40, right: -40, width: 130, height: 130, borderRadius: "50%", background: `radial-gradient(circle, ${p.c1}28, transparent 70%)`, pointerEvents: "none" }} />
              <div className="font-cormorant font-bold text-white relative z-10" style={{ fontSize: "2.1rem" }}>{p.name}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", margin: "4px 0 14px" }}>{p.cat}</div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold relative z-10"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.65)" }}>
                <Icon name="Package" size={11} />
                {p.sku}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="reveal rounded-3xl p-10 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(232,0,111,0.12), rgba(123,17,217,0.18))", border: "1px solid rgba(232,0,111,0.18)" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 15% 50%, rgba(232,0,111,0.1), transparent 55%)", pointerEvents: "none" }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-cormorant font-bold text-white text-3xl mb-2">Ваш бренд — следующий в портфолио</h3>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>Создадим линейку именно под вашу аудиторию и позиционирование</p>
            </div>
            <a href="#order" className="btn-gold px-8 py-4 rounded-full text-base flex-shrink-0">
              Обсудить проект
            </a>
          </div>
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ══ ЧЕСТНЫЙ ЗНАК ══ */}
      <section id="znak" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="section-label mb-4" style={{ color: "var(--gold)" }}>Обязательная маркировка</div>
            <h2 className="font-cormorant font-bold leading-tight mb-7" style={{ fontSize: "clamp(2.2rem,4.5vw,3.5rem)" }}>
              Работаем через <span className="g-text">Честный ЗНАК</span>
            </h2>
            <p className="mb-7" style={{ color: "rgba(255,255,255,0.52)", lineHeight: 1.78, fontSize: "0.95rem" }}>
              Мы полностью интегрированы в систему маркировки. Коды DataMatrix наносятся на каждую единицу прямо на производстве — вам не нужно думать о соблюдении 88-ФЗ.
            </p>
            <div className="space-y-4">
              {[
                "Регистрация карточек товаров в системе",
                "Нанесение кодов DataMatrix на упаковку",
                "Передача сведений о вводе в оборот",
                "Полное юридическое сопровождение",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,180,0,0.1)", border: "1px solid rgba(255,180,0,0.28)" }}>
                    <Icon name="Check" size={13} style={{ color: "var(--gold)" }} />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="rounded-3xl p-10 text-center relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,180,0,0.16)" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,180,0,0.09), transparent 55%)", pointerEvents: "none" }} />
              <div className="relative z-10">
                <div className="w-28 h-28 rounded-3xl flex items-center justify-center mx-auto mb-6 anim-glow"
                  style={{ background: "linear-gradient(135deg, var(--gold), var(--coral))" }}>
                  <Icon name="QrCode" size={54} />
                </div>
                <div className="font-cormorant font-bold text-white text-3xl mb-2">Честный ЗНАК</div>
                <div style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.83rem", lineHeight: 1.65 }}>
                  Обязателен с 2023 года для всей косметики в России.<br />Мы готовы с первого дня работы системы.
                </div>
                <div className="grid grid-cols-2 gap-5 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div>
                    <div className="stat-num g-text-vg" style={{ fontSize: "2rem" }}>100%</div>
                    <div style={{ color: "rgba(255,255,255,0.32)", fontSize: "0.73rem", marginTop: 4 }}>соответствие закону</div>
                  </div>
                  <div>
                    <div className="stat-num g-text-vg" style={{ fontSize: "2rem" }}>2023</div>
                    <div style={{ color: "rgba(255,255,255,0.32)", fontSize: "0.73rem", marginTop: 4 }}>с момента запуска</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ══ СЕРТИФИКАТЫ ══ */}
      <section id="certs" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Документы</div>
          <h2 className="font-cormorant font-bold text-white" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            <span className="g-text-mv">Сертификаты</span> и документы
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.92rem" }}>
            Полный пакет разрешительной документации — без лишних шагов с вашей стороны
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTS.map((c, i) => (
            <div key={c.t} className="card-beauty rounded-2xl p-6 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(232,0,111,0.1)", border: "1px solid rgba(232,0,111,0.22)" }}>
                <Icon name={c.icon} size={22} style={{ color: "var(--magenta)" }} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-base">{c.t}</h3>
              <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.82rem", lineHeight: 1.62 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ══ ORDER ══ */}
      <section id="order" className="py-28 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="section-label mb-4">Форма заявки</div>
          <h2 className="font-cormorant font-bold text-white" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
            Заказать <span className="g-text">производство</span>
          </h2>
          <p className="mt-4" style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.93rem" }}>
            Опишите задачу — рассчитаем стоимость и сроки
          </p>
        </div>

        {sent ? (
          <div className="reveal text-center rounded-3xl p-16"
            style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(232,0,111,0.2)" }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--magenta), var(--violet))" }}>
              <Icon name="CheckCircle" size={40} />
            </div>
            <h3 className="font-cormorant font-bold text-white text-4xl mb-3">Заявка отправлена!</h3>
            <p style={{ color: "rgba(255,255,255,0.52)" }}>Свяжемся с вами в течение рабочего дня</p>
          </div>
        ) : (
          <form className="reveal" onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "clamp(28px,5vw,52px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 20, marginBottom: 20 }}>
              {[
                { k: "name", label: "Имя *", ph: "Иван Иванов", type: "text", req: true },
                { k: "company", label: "Компания / Бренд *", ph: "Название бренда", type: "text", req: true },
                { k: "phone", label: "Телефон *", ph: "+7 (___) ___-__-__", type: "tel", req: true },
                { k: "volume", label: "Объём тиража", ph: "Например: 1 000 шт.", type: "text", req: false },
              ].map((f) => (
                <div key={f.k}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8 }}>{f.label}</label>
                  <input
                    type={f.type}
                    required={f.req}
                    placeholder={f.ph}
                    value={(form as Record<string, string>)[f.k]}
                    onChange={upd(f.k)}
                    className="inp w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8 }}>Вид продукта *</label>
              <select required value={form.type} onChange={upd("type")} className="inp w-full rounded-xl px-4 py-3 text-sm">
                <option value="">Выберите тип</option>
                <option value="face">Уход за лицом</option>
                <option value="body">Уход за телом</option>
                <option value="hair">Уход за волосами</option>
                <option value="all">Комплексная линейка</option>
              </select>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8 }}>Требования и пожелания</label>
              <textarea
                rows={4}
                placeholder="Желаемый состав, упаковка, целевая аудитория..."
                value={form.wish}
                onChange={upd("wish")}
                className="inp w-full rounded-xl px-4 py-3 text-sm"
                style={{ resize: "none" }}
              />
            </div>
            <button type="submit" className="btn-primary w-full py-4 rounded-xl text-base">
              Отправить заявку
            </button>
          </form>
        )}
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ══ CONTACTS ══ */}
      <section id="contacts" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="section-label mb-4">Связаться</div>
          <h2 className="font-cormorant font-bold g-text" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>Контакты</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: "Phone", label: "Телефон", val: "+7 (800) 000-00-00", sub: "Бесплатно по России", g: "linear-gradient(135deg,#E8006F,#7B11D9)" },
            { icon: "Mail", label: "Email", val: "info@lumiere-lab.ru", sub: "Ответим в течение дня", g: "linear-gradient(135deg,#7B11D9,#3B0A8A)" },
            { icon: "MapPin", label: "Адрес", val: "Москва", sub: "Пн–Пт, 9:00–18:00", g: "linear-gradient(135deg,#FFB400,#FF5C38)" },
          ].map((c, i) => (
            <div key={c.label} className="card-beauty rounded-2xl p-8 text-center reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: c.g }}>
                <Icon name={c.icon} size={26} />
              </div>
              <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{c.label}</div>
              <div className="font-semibold text-white text-lg mb-1">{c.val}</div>
              <div style={{ color: "rgba(255,255,255,0.32)", fontSize: "0.78rem" }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "36px 24px" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant font-bold text-2xl">
            <span className="g-text">LUMIÈRE</span>
            <span style={{ color: "rgba(255,255,255,0.28)", fontWeight: 300 }}>lab</span>
          </span>
          <div style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.78rem", textAlign: "center" }}>
            © 2024 LUMIÈRE lab — Контрактное производство косметики
          </div>
          <div className="flex gap-6">
            {NAV.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href}
                style={{ color: "rgba(255,255,255,0.22)", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.58)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
