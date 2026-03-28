import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("on")),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Честный ЗНАК", href: "#znak" },
  { label: "Сертификаты", href: "#certs" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Droplets",   title: "Уход за лицом",    desc: "Сыворотки, кремы, тоники, маски, мицеллярные воды — любые форматы и концентрации.", grad: "gb-acid"  },
  { icon: "Sparkles",   title: "Уход за телом",    desc: "Скрабы, лосьоны, масла, антицеллюлитные средства и кремы для рук и ног.", grad: "gb-vg"    },
  { icon: "Wind",       title: "Уход за волосами", desc: "Шампуни, бальзамы, маски, сыворотки. Профессиональные линейки для всех типов.", grad: "gb-pg"    },
  { icon: "Layers",     title: "Бренд под ключ",   desc: "Рецептура → дизайн → сертификация → маркировка. Полный цикл без посредников.", grad: "gb-coral" },
  { icon: "FileCheck",  title: "Сертификация",     desc: "Декларации ЕАЭС, паспорта безопасности, протоколы испытаний. Весь пакет.", grad: "gb-lime"  },
  { icon: "QrCode",     title: "Честный ЗНАК",     desc: "DataMatrix на производстве. Полное соответствие 88-ФЗ с первого дня.", grad: "gb-acid"  },
];

const STATS = [
  { val: "500+", label: "запущенных брендов" },
  { val: "10",   label: "лет на рынке" },
  { val: "3",    label: "дня — первый образец" },
  { val: "100%", label: "сертифицированная продукция" },
];

const PORTFOLIO = [
  { name: "SkinLux",   cat: "Уход за лицом",  sku: "12 SKU", c1: "#FF0080", c2: "#7000FF" },
  { name: "NaturBody", cat: "Уход за телом",   sku: "8 SKU",  c1: "#7000FF", c2: "#2800A0" },
  { name: "HairPro",   cat: "Волосы",          sku: "15 SKU", c1: "#FFD000", c2: "#FF4500" },
  { name: "PureGlow",  cat: "Органика",        sku: "6 SKU",  c1: "#00FF94", c2: "#7000FF" },
  { name: "LuxeSkin",  cat: "Премиум",         sku: "20 SKU", c1: "#FF0080", c2: "#FF4500" },
  { name: "FreshLine", cat: "Масс-маркет",     sku: "10 SKU", c1: "#7000FF", c2: "#FF0080" },
];

const STEPS = [
  { n: "01", t: "Заявка",        d: "Описываете идею и параметры продукта" },
  { n: "02", t: "Формула",       d: "Разрабатываем состав в нашей лаборатории" },
  { n: "03", t: "Образец",       d: "Пробная партия за 3 рабочих дня" },
  { n: "04", t: "Дизайн",        d: "Упаковка и фирменный стиль бренда" },
  { n: "05", t: "Документы",     d: "Сертификаты, декларации, Честный ЗНАК" },
  { n: "06", t: "Готовый тираж", d: "Маркированная продукция у вас на складе" },
];

const CERTS = [
  { icon: "Shield",      t: "Декларация ЕАЭС",      d: "ТР ЕАЭС 009/2011 — обязательный документ для всей косметики в России и СНГ." },
  { icon: "FlaskConical",t: "Протоколы испытаний",  d: "Тестирование в аккредитованных лабораториях по всем необходимым показателям." },
  { icon: "BookOpen",    t: "Паспорт безопасности", d: "Полная документация по безопасности ингредиентов и готового продукта." },
  { icon: "BadgeCheck",  t: "GMP-стандарты",         d: "Производство по международным стандартам надлежащей производственной практики." },
];

const MARQUEE = [
  "Уход за лицом","Уход за телом","Уход за волосами","Честный ЗНАК",
  "Бренд под ключ","Сертификация ЕАЭС","Малый тираж","Полный цикл",
  "Уход за лицом","Уход за телом","Уход за волосами","Честный ЗНАК",
  "Бренд под ключ","Сертификация ЕАЭС","Малый тираж","Полный цикл",
];

const W = "rgba(255,255,255,";

export default function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", type: "", volume: "", wish: "" });
  const [sent, setSent] = useState(false);
  const upd = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <div style={{ background: "var(--dark)", color: "#fff", fontFamily: "'Montserrat', sans-serif" }}>

      {/* NAV */}
      <nav className="nav-glass fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
            <span className="gt-acid">LUMIÈRE</span>
            <span style={{ color: W + "0.28)", fontWeight: 300, fontStyle: "italic" }}> lab</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}
                style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: W + "0.42)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = W + "0.42)")}
              >{l.label}</a>
            ))}
          </div>
          <a href="#order" className="btn-acid hidden lg:block px-6 py-2.5 rounded-full">Заказать</a>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            <Icon name={open ? "X" : "Menu"} size={22} style={{ color: W + "0.65)" }} />
          </button>
        </div>
        {open && (
          <div className="lg:hidden px-6 pb-5 pt-3 flex flex-col gap-4 border-t" style={{ borderColor: W + "0.06)" }}>
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: W + "0.6)" }}>
                {l.label}
              </a>
            ))}
            <a href="#order" className="btn-acid px-6 py-3 rounded-full text-center mt-1">Заказать</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero-mesh relative min-h-screen flex items-center overflow-hidden pt-20 stripe-bg">
        {/* Animated blobs */}
        <div className="blob blob-1" style={{ width: 720, height: 720, background: "rgba(255,0,128,0.13)", top: -240, left: -280 }} />
        <div className="blob blob-2" style={{ width: 600, height: 600, background: "rgba(112,0,255,0.15)", bottom: -180, right: -220 }} />
        <div className="blob blob-3" style={{ width: 380, height: 380, background: "rgba(255,208,0,0.06)", top: "40%", left: "45%", marginLeft: -190, marginTop: -190 }} />

        {/* Orbits */}
        <div className="orbit spin-cw hidden lg:block" style={{ width: 580, height: 580, top: "50%", right: "2%", marginTop: -290 }} />
        <div className="orbit spin-ccw hidden lg:block" style={{ width: 400, height: 400, top: "50%", right: "8%", marginTop: -200 }} />
        <div className="orbit hidden lg:block" style={{ width: 230, height: 230, top: "50%", right: "14%", marginTop: -115 }} />

        {/* Floating dots */}
        <div className="float-b absolute w-4 h-4 rounded-full hidden lg:block"
          style={{ background: "var(--acid-gold)", top: "22%", right: "18%", boxShadow: "0 0 32px rgba(255,208,0,0.85)", zIndex: 10 }} />
        <div className="float-a absolute w-2.5 h-2.5 rounded-full hidden lg:block"
          style={{ background: "var(--acid-pink)", bottom: "30%", left: "13%", boxShadow: "0 0 24px rgba(255,0,128,0.85)", zIndex: 10 }} />
        <div className="float-b absolute w-2 h-2 rounded-full hidden lg:block"
          style={{ background: "var(--acid-lime)", top: "62%", right: "26%", boxShadow: "0 0 16px rgba(0,255,148,0.85)", zIndex: 10 }} />

        {/* Skew accent lines */}
        <div className="skew-line hidden lg:block" style={{ top: "34%", left: "9%" }} />
        <div className="skew-line hidden lg:block" style={{ top: "52%", left: "12%", background: "linear-gradient(to bottom, var(--acid-violet), transparent)", height: 55 }} />

        <div className="max-w-7xl mx-auto px-6 w-full py-28 relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-20 items-center">

            {/* LEFT */}
            <div>
              <div className="pill mb-8 slide-up" style={{ animationDelay: "0.05s" }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--acid-pink)" }} />
                Контрактное производство косметики
              </div>

              <h1 className="slide-up" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(3.6rem,8vw,7.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                marginBottom: "1.8rem",
                animationDelay: "0.12s",
              }}>
                <span style={{ display: "block", color: "#fff" }}>Ваш бренд</span>
                <em className="gt-acid not-italic" style={{ display: "block" }}>косметики</em>
                <span style={{ display: "block", color: W + "0.35)", fontWeight: 300, fontStyle: "italic", fontSize: "0.76em" }}>под ключ</span>
              </h1>

              <p className="slide-up" style={{
                color: W + "0.5)",
                fontSize: "0.98rem",
                lineHeight: 1.82,
                maxWidth: 460,
                marginBottom: "2.5rem",
                animationDelay: "0.22s",
                fontWeight: 500,
              }}>
                Производим косметику для ухода за лицом, телом и волосами. От рецептуры и дизайна — до готового продукта с сертификатами и Честным ЗНАКом.
              </p>

              <div className="flex flex-wrap gap-4 slide-up" style={{ animationDelay: "0.32s" }}>
                <a href="#order" className="btn-acid px-8 py-4 rounded-full text-sm">Заказать производство</a>
                <a href="#services" className="btn-ghost px-8 py-4 rounded-full text-sm">Наши услуги</a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 mt-14 slide-up" style={{ animationDelay: "0.44s" }}>
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="num-xl gt-acid" style={{ fontSize: "2.5rem" }}>{s.val}</div>
                    <div style={{ color: W + "0.33)", fontSize: "0.68rem", marginTop: 6, lineHeight: 1.45, fontWeight: 700, letterSpacing: "0.04em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex flex-col gap-5">
              <div className="card-acid rounded-3xl p-8 scale-in relative" style={{ animationDelay: "0.18s" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 80% 15%, rgba(255,0,128,0.2), transparent 55%)", borderRadius: "inherit", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--acid-pink), var(--acid-violet), var(--acid-gold))", borderRadius: "0 0 24px 24px" }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="svc-icon gb-acid rounded-xl">
                        <Icon name="Sparkles" size={22} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: "0.85rem", color: "#fff" }}>Рецептура готова</div>
                        <div style={{ color: W + "0.36)", fontSize: "0.7rem", marginTop: 2 }}>3 дня с момента заявки</div>
                      </div>
                    </div>
                    <div style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(0,255,148,0.09)", border: "1px solid rgba(0,255,148,0.22)", color: "#00FF94", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.1em" }}>ГОТОВО</div>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2.8rem", lineHeight: 1, marginBottom: 8 }}>
                    <span className="gt-acid">Сыворотка №7</span>
                  </div>
                  <div style={{ color: W + "0.4)", fontSize: "0.78rem", marginBottom: 16, fontWeight: 500 }}>Гиалуроновая кислота · Ретинол · Ниацинамид</div>
                  <div className="flex gap-2 flex-wrap">
                    {["Гипоаллергенно", "Веган", "Сертифицировано"].map((t) => (
                      <span key={t} style={{ padding: "4px 12px", borderRadius: 999, fontSize: "0.66rem", fontWeight: 800, background: "rgba(255,0,128,0.09)", border: "1px solid rgba(255,0,128,0.2)", color: "var(--acid-pink)", letterSpacing: "0.06em" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="card-acid rounded-2xl p-5 float-a" style={{ background: "rgba(112,0,255,0.08)", borderColor: "rgba(112,0,255,0.18)" }}>
                  <Icon name="QrCode" size={26} style={{ color: "var(--acid-gold)" }} />
                  <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "#fff", marginTop: 12 }}>Честный ЗНАК</div>
                  <div style={{ color: W + "0.36)", fontSize: "0.7rem", marginTop: 4 }}>Готово к обороту</div>
                </div>
                <div className="card-acid rounded-2xl p-5 float-b" style={{ background: "rgba(255,208,0,0.05)", borderColor: "rgba(255,208,0,0.12)" }}>
                  <Icon name="Award" size={26} style={{ color: "var(--acid-gold)" }} />
                  <div style={{ fontWeight: 800, fontSize: "0.82rem", color: "#fff", marginTop: 12 }}>Сертификат ЕАЭС</div>
                  <div style={{ color: W + "0.36)", fontSize: "0.7rem", marginTop: 4 }}>Полный пакет</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, inset: "auto 0 0", height: 100, background: "linear-gradient(to bottom, transparent, var(--dark))", zIndex: 5, pointerEvents: "none" }} />
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap border-y py-3.5" style={{ borderColor: W + "0.05)", background: "rgba(255,0,128,0.02)" }}>
        <div className="marquee-inner">
          {MARQUEE.map((item, i) => (
            <span key={i} className="flex items-center gap-5 px-7 whitespace-nowrap"
              style={{ color: W + "0.22)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.26em", textTransform: "uppercase" }}>
              {item}
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--acid-pink)", display: "inline-block" }} />
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="sec-label mb-5">Что мы производим</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem,6vw,5.5rem)", lineHeight: 0.95 }}>
            <span className="gt-acid">Полная линейка</span>{" "}
            <span style={{ color: "#fff" }}>услуг</span>
          </h2>
          <p style={{ color: W + "0.38)", fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 420, margin: "16px auto 0", fontWeight: 500 }}>
            От единственного продукта до полной линейки бренда
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="card-acid rounded-2xl p-7 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={`svc-icon mb-5 ${s.grad}`} style={{ borderRadius: 14 }}>
                <Icon name={s.icon} size={24} />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.75rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: W + "0.44)", lineHeight: 1.72, fontSize: "0.84rem", fontWeight: 500 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ABOUT */}
      <section id="about" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="sec-label mb-5">О производстве</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.02, marginBottom: "1.6rem" }}>
              Современный завод <span className="gt-pv">полного цикла</span>
            </h2>
            <p style={{ color: W + "0.5)", lineHeight: 1.82, fontSize: "0.9rem", fontWeight: 500, marginBottom: "1.2rem" }}>
              Наше производство соответствует GMP и оснащено профессиональным оборудованием. Запускаем тиражи от первой пробной партии до промышленного масштаба.
            </p>
            <p style={{ color: W + "0.5)", lineHeight: 1.82, fontSize: "0.9rem", fontWeight: 500, marginBottom: "2.4rem" }}>
              R&D-лаборатория, дизайн-студия и отдел сертификации — всё под одной крышей без посредников.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Factory",     t: "Своё производство" },
                { icon: "FlaskConical",t: "R&D лаборатория" },
                { icon: "Palette",     t: "Дизайн-студия" },
                { icon: "ShieldCheck", t: "Контроль качества" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3">
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,0,128,0.07)", border: "1px solid rgba(255,0,128,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={f.icon} size={15} style={{ color: "var(--acid-pink)" }} />
                  </div>
                  <span style={{ color: W + "0.62)", fontSize: "0.83rem", fontWeight: 700 }}>{f.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="card-acid rounded-3xl p-8 relative" style={{ background: "rgba(255,255,255,0.025)" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 180, background: "radial-gradient(circle, rgba(112,0,255,0.16), transparent 65%)", borderRadius: "0 24px 0 100%", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--acid-violet), var(--acid-pink))", borderRadius: "0 0 24px 24px" }} />
              <div className="sec-label mb-7">Как мы работаем</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {STEPS.map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, background: "rgba(255,0,128,0.08)", border: "1px solid rgba(255,0,128,0.28)", color: "var(--acid-pink)", fontSize: "0.68rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: "0.04em" }}>{s.n}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.84rem", color: "#fff" }}>{s.t}</div>
                      <div style={{ color: W + "0.36)", fontSize: "0.76rem", marginTop: 3, lineHeight: 1.5, fontWeight: 500 }}>{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="sec-label mb-5">Наши работы</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem,6vw,5.5rem)", lineHeight: 0.95 }}>
            <span className="gt-vg">Портфолио</span>{" "}
            <span style={{ color: "#fff" }}>брендов</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {PORTFOLIO.map((p, i) => (
            <div key={p.name}
              className="reveal rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${p.c1}18, ${p.c2}26)`,
                border: `1px solid ${p.c1}22`,
                transitionDelay: `${i * 0.07}s`,
                transition: "all 0.45s cubic-bezier(0.23,1,0.32,1)",
                cursor: "pointer",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px) scale(1.015)"; e.currentTarget.style.boxShadow = `0 28px 65px ${p.c1}1E`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{ position: "absolute", top: -50, right: -50, width: 140, height: 140, borderRadius: "50%", background: `radial-gradient(circle, ${p.c1}22, transparent 70%)`, pointerEvents: "none" }} />
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2.5rem", color: "#fff", lineHeight: 1 }}>{p.name}</div>
              <div style={{ color: W + "0.4)", fontSize: "0.7rem", margin: "6px 0 16px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.cat}</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 999, fontSize: "0.68rem", fontWeight: 800, background: W + "0.07)", color: W + "0.58)" }}>
                <Icon name="Package" size={11} />
                {p.sku}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal rounded-3xl p-10 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(255,0,128,0.09), rgba(112,0,255,0.14))", border: "1px solid rgba(255,0,128,0.14)" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 12% 50%, rgba(255,0,128,0.07), transparent 48%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--acid-pink), var(--acid-violet), var(--acid-gold))", borderRadius: "0 0 24px 24px" }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2.4rem", color: "#fff", marginBottom: 8, lineHeight: 1.1 }}>Ваш бренд — следующий</h3>
              <p style={{ color: W + "0.46)", fontSize: "0.88rem", fontWeight: 500 }}>Создадим линейку под вашу аудиторию и позиционирование</p>
            </div>
            <a href="#order" className="btn-gold-acid px-8 py-4 rounded-full flex-shrink-0">Обсудить проект</a>
          </div>
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ЧЕСТНЫЙ ЗНАК */}
      <section id="znak" className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="sec-label mb-5" style={{ color: "var(--acid-gold)" }}>Обязательная маркировка</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 1.02, marginBottom: "1.6rem" }}>
              Работаем через <span className="gt-acid">Честный ЗНАК</span>
            </h2>
            <p style={{ color: W + "0.5)", lineHeight: 1.82, fontSize: "0.9rem", fontWeight: 500, marginBottom: "1.8rem" }}>
              Мы полностью интегрированы в систему маркировки. Коды DataMatrix наносятся на каждую единицу прямо на производстве — соблюдение 88-ФЗ полностью на нас.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Регистрация карточек товаров в системе",
                "Нанесение кодов DataMatrix на упаковку",
                "Передача сведений о вводе в оборот",
                "Полное юридическое сопровождение",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,208,0,0.09)", border: "1px solid rgba(255,208,0,0.28)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Check" size={12} style={{ color: "var(--acid-gold)" }} />
                  </div>
                  <span style={{ color: W + "0.6)", fontSize: "0.86rem", fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="card-acid rounded-3xl p-10 text-center relative overflow-hidden"
              style={{ background: "rgba(255,208,0,0.025)", borderColor: "rgba(255,208,0,0.13)" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,208,0,0.06), transparent 52%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--acid-gold), var(--acid-coral))", borderRadius: "0 0 24px 24px" }} />
              <div className="relative z-10">
                <div className="glow-pulse" style={{ width: 112, height: 112, borderRadius: 28, background: "linear-gradient(135deg, var(--acid-gold), var(--acid-coral))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Icon name="QrCode" size={52} />
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2.4rem", color: "#fff", marginBottom: 10 }}>Честный ЗНАК</div>
                <div style={{ color: W + "0.4)", fontSize: "0.82rem", lineHeight: 1.72, fontWeight: 500 }}>
                  Обязателен с 2023 года для всей косметики в России.<br />Готовы с первого дня работы системы.
                </div>
                <div className="grid grid-cols-2 gap-5 mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div>
                    <div className="num-xl gt-vg" style={{ fontSize: "2.6rem" }}>100%</div>
                    <div style={{ color: W + "0.28)", fontSize: "0.66rem", marginTop: 5, fontWeight: 800, letterSpacing: "0.07em" }}>соответствие закону</div>
                  </div>
                  <div>
                    <div className="num-xl gt-vg" style={{ fontSize: "2.6rem" }}>2023</div>
                    <div style={{ color: W + "0.28)", fontSize: "0.66rem", marginTop: 5, fontWeight: 800, letterSpacing: "0.07em" }}>с запуска системы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* СЕРТИФИКАТЫ */}
      <section id="certs" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="sec-label mb-5">Документы</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem,6vw,5.5rem)", lineHeight: 0.95 }}>
            <span className="gt-pv">Сертификаты</span>{" "}
            <span style={{ color: "#fff" }}>и документы</span>
          </h2>
          <p style={{ color: W + "0.38)", fontSize: "0.88rem", marginTop: 14, fontWeight: 500 }}>
            Полный пакет разрешительной документации без лишних шагов
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTS.map((c, i) => (
            <div key={c.t} className="card-acid rounded-2xl p-6 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,0,128,0.07)", border: "1px solid rgba(255,0,128,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <Icon name={c.icon} size={20} style={{ color: "var(--acid-pink)" }} />
              </div>
              <div style={{ fontWeight: 800, fontSize: "0.86rem", color: "#fff", marginBottom: 9 }}>{c.t}</div>
              <div style={{ color: W + "0.4)", fontSize: "0.79rem", lineHeight: 1.65, fontWeight: 500 }}>{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* ORDER */}
      <section id="order" className="py-28 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="sec-label mb-5">Форма заявки</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem,6vw,5.5rem)", lineHeight: 0.95, color: "#fff" }}>
            Заказать <span className="gt-acid">производство</span>
          </h2>
          <p style={{ color: W + "0.38)", marginTop: 14, fontSize: "0.88rem", fontWeight: 500 }}>Опишите задачу — рассчитаем стоимость и сроки</p>
        </div>

        {sent ? (
          <div className="reveal text-center rounded-3xl p-16" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,0,128,0.18)" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, var(--acid-pink), var(--acid-violet))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <Icon name="CheckCircle" size={40} />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "3.2rem", color: "#fff", marginBottom: 12, lineHeight: 1 }}>Заявка отправлена!</div>
            <p style={{ color: W + "0.48)", fontSize: "0.9rem", fontWeight: 500 }}>Свяжемся с вами в течение рабочего дня</p>
          </div>
        ) : (
          <form className="reveal" onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24, padding: "clamp(24px,5vw,48px)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 200, background: "radial-gradient(ellipse, rgba(255,0,128,0.05), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--acid-pink), var(--acid-violet), var(--acid-gold))", borderRadius: "0 0 24px 24px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 18, marginBottom: 18 }}>
              {[
                { k: "name",    label: "Имя *",              ph: "Иван Иванов",          type: "text", req: true  },
                { k: "company", label: "Компания / Бренд *", ph: "Название бренда",       type: "text", req: true  },
                { k: "phone",   label: "Телефон *",          ph: "+7 (___) ___-__-__",   type: "tel",  req: true  },
                { k: "volume",  label: "Объём тиража",       ph: "Например: 1 000 шт.",  type: "text", req: false },
              ].map((f) => (
                <div key={f.k}>
                  <label style={{ display: "block", color: W + "0.45)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} required={f.req} placeholder={f.ph} value={(form as Record<string, string>)[f.k]} onChange={upd(f.k)} className="inp w-full rounded-xl px-4 py-3" />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: "block", color: W + "0.45)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Вид продукта *</label>
              <select required value={form.type} onChange={upd("type")} className="inp w-full rounded-xl px-4 py-3">
                <option value="">Выберите тип</option>
                <option value="face">Уход за лицом</option>
                <option value="body">Уход за телом</option>
                <option value="hair">Уход за волосами</option>
                <option value="all">Комплексная линейка</option>
              </select>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: "block", color: W + "0.45)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Требования и пожелания</label>
              <textarea rows={4} placeholder="Состав, упаковка, аудитория..." value={form.wish} onChange={upd("wish")} className="inp w-full rounded-xl px-4 py-3" style={{ resize: "none" }} />
            </div>
            <button type="submit" className="btn-acid w-full py-4 rounded-xl">Отправить заявку</button>
          </form>
        )}
      </section>

      <div className="sep max-w-5xl mx-auto" />

      {/* CONTACTS */}
      <section id="contacts" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="sec-label mb-5">Связаться</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "clamp(2.8rem,6vw,5.5rem)", lineHeight: 0.95 }}>
            <span className="gt-acid">Контакты</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: "Phone",  label: "Телефон", val: "+7 (800) 000-00-00", sub: "Бесплатно по России", gb: "gb-acid" },
            { icon: "Mail",   label: "Email",   val: "info@lumiere-lab.ru", sub: "Ответим в течение дня", gb: "gb-vg" },
            { icon: "MapPin", label: "Адрес",   val: "Москва",             sub: "Пн–Пт, 9:00–18:00",  gb: "gb-pg" },
          ].map((c, i) => (
            <div key={c.label} className="card-acid rounded-2xl p-8 text-center reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={`${c.gb} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                <Icon name={c.icon} size={26} />
              </div>
              <div style={{ color: W + "0.32)", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>{c.label}</div>
              <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#fff", marginBottom: 4 }}>{c.val}</div>
              <div style={{ color: W + "0.28)", fontSize: "0.76rem", fontWeight: 500 }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "36px 24px" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.65rem" }}>
            <span className="gt-acid">LUMIÈRE</span>
            <span style={{ color: W + "0.22)", fontWeight: 300, fontStyle: "italic" }}> lab</span>
          </span>
          <div style={{ color: W + "0.16)", fontSize: "0.72rem", textAlign: "center", fontWeight: 700, letterSpacing: "0.06em" }}>
            © 2024 LUMIÈRE lab — Контрактное производство косметики
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {NAV.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href}
                style={{ color: W + "0.18)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = W + "0.55)")}
                onMouseLeave={e => (e.currentTarget.style.color = W + "0.18)")}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
