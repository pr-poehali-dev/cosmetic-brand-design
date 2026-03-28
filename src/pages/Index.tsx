import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO = "https://cdn.poehali.dev/projects/843292da-d0a6-422d-bb4c-10192070a64c/files/cceaf16a-2888-4c44-bfc8-af4d986a2e73.jpg";
const IMG_PRODUCTS = "https://cdn.poehali.dev/projects/843292da-d0a6-422d-bb4c-10192070a64c/files/5727766c-5175-4b3d-ae0a-26959ec2a4ca.jpg";
const IMG_FACTORY = "https://cdn.poehali.dev/projects/843292da-d0a6-422d-bb4c-10192070a64c/files/36350d1a-bc17-47f6-9f5f-5cc5b8ffbaca.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Сертификаты", href: "#certificates" },
  { label: "Честный ЗНАК", href: "#chestnyznak" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Droplets", title: "Уход за лицом", desc: "Сыворотки, кремы, тоники, маски, мицеллярные воды. Все форматы и концентрации активных компонентов.", color: "from-pink-500 to-rose-500" },
  { icon: "Sparkles", title: "Уход за телом", desc: "Скрабы, лосьоны, масла, кремы для рук и ног, антицеллюлитные средства.", color: "from-violet-500 to-purple-600" },
  { icon: "Wind", title: "Уход за волосами", desc: "Шампуни, бальзамы, маски, сыворотки, масла. Профессиональные линейки для всех типов волос.", color: "from-orange-500 to-amber-500" },
  { icon: "Package", title: "Бренд под ключ", desc: "Разработка формулы, дизайн упаковки, сертификация, маркировка — полный цикл от идеи до полки.", color: "from-cyan-500 to-teal-500" },
  { icon: "Award", title: "Сертификация", desc: "Полный пакет документов: технические регламенты ЕАЭС, декларации соответствия, паспорта безопасности.", color: "from-emerald-500 to-green-500" },
  { icon: "QrCode", title: "Честный ЗНАК", desc: "Маркировка продукции через систему Честный ЗНАК. Полное соответствие требованиям законодательства.", color: "from-pink-600 to-violet-600" },
];

const PORTFOLIO_ITEMS = [
  { name: "SkinLux", category: "Уход за лицом", items: "12 SKU", color: "from-pink-600/30 to-rose-900/50" },
  { name: "NaturBody", category: "Уход за телом", items: "8 SKU", color: "from-violet-600/30 to-purple-900/50" },
  { name: "HairPro", category: "Волосы", items: "15 SKU", color: "from-orange-600/30 to-amber-900/50" },
  { name: "PureGlow", category: "Органика", items: "6 SKU", color: "from-emerald-600/30 to-teal-900/50" },
  { name: "LuxeSkin", category: "Премиум", items: "20 SKU", color: "from-cyan-600/30 to-blue-900/50" },
  { name: "FreshLine", category: "Масс-маркет", items: "10 SKU", color: "from-red-600/30 to-rose-900/50" },
];

const STEPS = [
  { num: "01", title: "Заявка", desc: "Вы описываете идею и требования к продукту" },
  { num: "02", title: "Разработка", desc: "Создаём формулу и дизайн упаковки" },
  { num: "03", title: "Согласование", desc: "Присылаем образцы на ваше одобрение" },
  { num: "04", title: "Сертификация", desc: "Оформляем все необходимые документы" },
  { num: "05", title: "Производство", desc: "Запускаем тираж на нашем оборудовании" },
  { num: "06", title: "Готовый бренд", desc: "Поставляем готовую продукцию с маркировкой" },
];

const MARQUEE_ITEMS = [
  "Уход за лицом", "Уход за телом", "Уход за волосами", "Честный ЗНАК",
  "Бренд под ключ", "Сертификация ЕАЭС", "Минимальный тираж", "Полный цикл",
  "Уход за лицом", "Уход за телом", "Уход за волосами", "Честный ЗНАК",
  "Бренд под ключ", "Сертификация ЕАЭС", "Минимальный тираж", "Полный цикл",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Index() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", product: "",
    volume: "", composition: "", requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0A1A] text-white font-montserrat">

      {/* NAV */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">
              <span className="gradient-text">COSMOS</span>
              <span className="text-white/50 font-light">beauty</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#order" className="hidden md:block btn-neon text-white text-sm font-semibold px-5 py-2.5 rounded-full">
            Заказать
          </a>
          <button className="md:hidden text-white/80" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-white/5 pt-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-white/80 text-sm py-1" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#order" className="btn-neon text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2">
              Заказать
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-16">
        <div className="orb w-[600px] h-[600px] bg-[#FF2D78]/15 top-[-150px] left-[-200px] animate-float-slow" />
        <div className="orb w-[500px] h-[500px] bg-[#8B2FC9]/20 bottom-[-100px] right-[-150px] animate-float" />
        <div className="orb w-[300px] h-[300px] bg-[#FF6B35]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-delay" />

        <div className="absolute top-1/3 right-16 w-24 h-24 rounded-full border border-[#FF2D78]/20 animate-spin-slow hidden lg:block" />
        <div className="absolute bottom-1/3 left-20 w-14 h-14 rounded-full border border-[#8B2FC9]/25 animate-float hidden lg:block" />
        <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-[#FFB800] animate-float-delay hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF2D78]/30 bg-[#FF2D78]/10 text-[#FF2D78] text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#FF2D78] rounded-full animate-pulse" />
                Контрактное производство косметики
              </div>
              <h1 className="font-black text-5xl lg:text-7xl leading-[0.95] mb-6">
                <span className="block text-white">Ваш бренд</span>
                <span className="block gradient-text">косметики</span>
                <span className="block text-white/70 font-light font-cormorant italic text-4xl lg:text-6xl mt-2">под ключ</span>
              </h1>
              <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
                Производим косметику для ухода за лицом, телом и волосами. От формулы и дизайна до готового продукта с сертификатами и маркировкой Честный ЗНАК.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#order" className="btn-neon text-white font-bold px-8 py-4 rounded-full text-lg relative z-10">
                  Заказать производство
                </a>
                <a href="#services" className="px-8 py-4 rounded-full border border-white/15 text-white/70 hover:border-[#FF2D78]/40 hover:text-white transition-all text-lg">
                  Наши услуги
                </a>
              </div>
              <div className="flex gap-10 mt-12">
                {[["500+", "брендов"], ["10 лет", "опыта"], ["50+", "сертификатов"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-black text-2xl gradient-text">{val}</div>
                    <div className="text-white/40 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={IMG_HERO} alt="Производство косметики" className="w-full h-[560px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A1A]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-8 bg-[#1A1228] border border-[#FF2D78]/20 rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF2D78] to-[#8B2FC9] flex items-center justify-center">
                    <Icon name="Award" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Сертификаты ЕАЭС</div>
                    <div className="text-white/45 text-xs">Все необходимые документы</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#1A1228] border border-[#FFB800]/20 rounded-2xl p-4 shadow-2xl animate-float-delay">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF6B35] flex items-center justify-center">
                    <Icon name="QrCode" size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Честный ЗНАК</div>
                    <div className="text-white/45 text-xs">Полная маркировка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden py-4 border-y border-white/5 bg-black/20">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6 text-xs font-bold text-white/35 uppercase tracking-[0.2em] whitespace-nowrap">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D78]/50 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-[#FF2D78] text-sm font-semibold uppercase tracking-widest">Что мы делаем</span>
          <h2 className="font-black text-4xl lg:text-6xl mt-3">
            <span className="gradient-text">Услуги</span>{" "}
            <span className="text-white">производства</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="card-glow bg-card rounded-2xl p-7 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg`}>
                <Icon name={s.icon} size={26} className="text-white" />
              </div>
              <h3 className="font-bold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="sep mx-6" />

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-[#FF2D78] text-sm font-semibold uppercase tracking-widest">О производстве</span>
            <h2 className="font-black text-4xl lg:text-5xl mt-3 mb-6">
              Современный завод{" "}
              <span className="gradient-text-violet">полного цикла</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-5">
              Наше производство оснащено современным оборудованием и отвечает всем требованиям GMP. Мы выпускаем косметику любых объёмов — от пробных партий до крупносерийного производства.
            </p>
            <p className="text-white/55 leading-relaxed mb-8">
              Собственная лаборатория для разработки формул, отдел дизайна упаковки и служба контроля качества — всё под одной крышей.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Factory", text: "Собственное производство" },
                { icon: "FlaskConical", text: "Своя лаборатория" },
                { icon: "Palette", text: "Отдел дизайна" },
                { icon: "ShieldCheck", text: "Контроль качества" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3 text-sm text-white/65">
                  <div className="w-8 h-8 rounded-lg bg-[#FF2D78]/12 flex items-center justify-center flex-shrink-0">
                    <Icon name={f.icon} size={16} className="text-[#FF2D78]" />
                  </div>
                  {f.text}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img src={IMG_FACTORY} alt="Производство" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B2FC9]/15 to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12 reveal">
            <h3 className="font-black text-3xl lg:text-4xl text-white">
              Как мы <span className="gradient-text">работаем</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.num} className="reveal text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full border-2 border-[#FF2D78]/40 flex items-center justify-center mx-auto mb-3 text-[#FF2D78] font-black text-sm">
                  {s.num}
                </div>
                <div className="font-bold text-white text-sm mb-1">{s.title}</div>
                <div className="text-white/35 text-xs leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sep mx-6" />

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-[#FF2D78] text-sm font-semibold uppercase tracking-widest">Наши работы</span>
          <h2 className="font-black text-4xl lg:text-6xl mt-3">
            <span className="gradient-text">Портфолио</span>{" "}
            <span className="text-white">брендов</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PORTFOLIO_ITEMS.map((p, i) => (
            <div
              key={p.name}
              className={`reveal card-glow bg-gradient-to-br ${p.color} rounded-2xl p-8 border border-white/5`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="font-black text-3xl text-white mb-1">{p.name}</div>
              <div className="text-white/55 text-sm mb-4">{p.category}</div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/75 text-xs font-medium">
                <Icon name="Package" size={12} />
                {p.items}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal rounded-3xl overflow-hidden relative">
          <img src={IMG_PRODUCTS} alt="Продукты" className="w-full h-[360px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A1A]/85 via-[#0D0A1A]/40 to-transparent flex items-center px-10">
            <div>
              <div className="font-black text-4xl text-white mb-3">Ваш продукт здесь</div>
              <div className="text-white/65 mb-6 text-lg">Создадим линейку именно под ваш бренд</div>
              <a href="#order" className="btn-neon text-white font-bold px-6 py-3 rounded-full inline-block">
                Обсудить проект
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="sep mx-6" />

      {/* CHESTNYZNAK */}
      <section id="chestnyznak" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="text-[#FFB800] text-sm font-semibold uppercase tracking-widest">Маркировка</span>
            <h2 className="font-black text-4xl lg:text-5xl mt-3 mb-6">
              Работаем через{" "}
              <span className="gradient-text">Честный ЗНАК</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-6">
              Мы полностью интегрированы в систему обязательной маркировки косметической продукции. Коды DataMatrix наносятся на каждую единицу товара прямо на производстве.
            </p>
            <div className="space-y-4">
              {[
                "Регистрация товаров в системе Честный ЗНАК",
                "Нанесение кодов DataMatrix на упаковку",
                "Передача данных о вводе в оборот",
                "Полное сопровождение по 88-ФЗ",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FFB800]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-[#FFB800]" />
                  </div>
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="card-glow bg-card rounded-3xl p-10 text-center border border-[#FFB800]/15">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#FFB800] to-[#FF6B35] flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Icon name="QrCode" size={54} className="text-white" />
              </div>
              <div className="font-black text-2xl text-white mb-2">Честный ЗНАК</div>
              <div className="text-white/45 text-sm leading-relaxed mb-6">
                Обязательная маркировка косметики действует с 2023 года. Все процессы уже настроены.
              </div>
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-black text-xl gradient-text">100%</div>
                  <div className="text-white/35 text-xs">соответствие</div>
                </div>
                <div>
                  <div className="font-black text-xl gradient-text">2023</div>
                  <div className="text-white/35 text-xs">готовы с запуска</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep mx-6" />

      {/* CERTIFICATES */}
      <section id="certificates" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="text-[#FF2D78] text-sm font-semibold uppercase tracking-widest">Документы</span>
          <h2 className="font-black text-4xl lg:text-6xl mt-3">
            <span className="gradient-text">Сертификаты</span>{" "}
            <span className="text-white">и документы</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "FileCheck", title: "Декларация ЕАЭС", desc: "Соответствие техническому регламенту ТР ЕАЭС 009/2011", color: "from-pink-500 to-rose-600" },
            { icon: "Shield", title: "Паспорт безопасности", desc: "Полная документация по безопасности состава продукта", color: "from-violet-500 to-purple-600" },
            { icon: "FlaskConical", title: "Протоколы испытаний", desc: "Лабораторные испытания в аккредитованных центрах", color: "from-orange-500 to-amber-600" },
            { icon: "BadgeCheck", title: "GMP стандарты", desc: "Производство по международным стандартам надлежащей практики", color: "from-emerald-500 to-teal-600" },
          ].map((c, i) => (
            <div key={c.title} className="reveal card-glow bg-card rounded-2xl p-6" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}>
                <Icon name={c.icon} size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="sep mx-6" />

      {/* ORDER FORM */}
      <section id="order" className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="text-[#FF2D78] text-sm font-semibold uppercase tracking-widest">Форма заявки</span>
          <h2 className="font-black text-4xl lg:text-6xl mt-3">
            Заказать <span className="gradient-text">производство</span>
          </h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto">
            Заполните заявку — рассчитаем стоимость и сроки производства вашей косметики
          </p>
        </div>

        {submitted ? (
          <div className="reveal card-glow bg-card rounded-3xl p-16 text-center border border-[#FF2D78]/20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF2D78] to-[#8B2FC9] flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-white" />
            </div>
            <h3 className="font-black text-3xl text-white mb-3">Заявка отправлена!</h3>
            <p className="text-white/55">Мы свяжемся с вами в течение рабочего дня</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal card-glow bg-card rounded-3xl p-8 lg:p-12 border border-white/5">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white/65 text-sm mb-2 font-medium">Ваше имя *</label>
                <input
                  type="text" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FF2D78]/50 transition-colors"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-white/65 text-sm mb-2 font-medium">Компания / Бренд *</label>
                <input
                  type="text" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FF2D78]/50 transition-colors"
                  placeholder="Название вашего бренда"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-white/65 text-sm mb-2 font-medium">Телефон *</label>
                <input
                  type="tel" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FF2D78]/50 transition-colors"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-white/65 text-sm mb-2 font-medium">Вид продукта *</label>
                <select
                  required
                  className="w-full bg-[#1A1228] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF2D78]/50 transition-colors"
                  value={formData.product}
                  onChange={e => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="">Выберите тип продукта</option>
                  <option value="face">Уход за лицом</option>
                  <option value="body">Уход за телом</option>
                  <option value="hair">Уход за волосами</option>
                  <option value="complex">Комплексная линейка</option>
                </select>
              </div>
              <div>
                <label className="block text-white/65 text-sm mb-2 font-medium">Объём тиража</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FF2D78]/50 transition-colors"
                  placeholder="Например: 1000 штук"
                  value={formData.volume}
                  onChange={e => setFormData({ ...formData, volume: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-white/65 text-sm mb-2 font-medium">Ключевые компоненты</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FF2D78]/50 transition-colors"
                  placeholder="Гиалуроновая кислота, витамин С..."
                  value={formData.composition}
                  onChange={e => setFormData({ ...formData, composition: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-white/65 text-sm mb-2 font-medium">Требования и пожелания</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-[#FF2D78]/50 transition-colors resize-none"
                placeholder="Опишите требования к продукту, упаковке, сертификации..."
                value={formData.requirements}
                onChange={e => setFormData({ ...formData, requirements: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-neon w-full text-white font-bold py-4 rounded-xl text-lg">
              Отправить заявку
            </button>
          </form>
        )}
      </section>

      <div className="sep mx-6" />

      {/* CONTACTS */}
      <section id="contacts" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="text-[#FF2D78] text-sm font-semibold uppercase tracking-widest">Связь</span>
          <h2 className="font-black text-4xl lg:text-6xl mt-3">
            <span className="gradient-text">Контакты</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "Phone", label: "Телефон", val: "+7 (800) 000-00-00", sub: "Бесплатно по России", color: "from-pink-500 to-rose-600" },
            { icon: "Mail", label: "Email", val: "info@cosmobeauty.ru", sub: "Ответим в течение дня", color: "from-violet-500 to-purple-600" },
            { icon: "MapPin", label: "Адрес", val: "Москва", sub: "Пн–Пт, 9:00–18:00", color: "from-orange-500 to-amber-600" },
          ].map((c, i) => (
            <div key={c.label} className="reveal card-glow bg-card rounded-2xl p-8 text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mx-auto mb-5`}>
                <Icon name={c.icon} size={26} className="text-white" />
              </div>
              <div className="text-white/40 text-sm mb-1">{c.label}</div>
              <div className="font-bold text-white text-lg mb-1">{c.val}</div>
              <div className="text-white/35 text-sm">{c.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-black">
            <span className="gradient-text">COSMOS</span>
            <span className="text-white/35 font-light">beauty</span>
          </span>
          <div className="text-white/25 text-sm text-center">
            © 2024 COSMOSbeauty — Контрактное производство косметики
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.slice(0, 3).map((l) => (
              <a key={l.href} href={l.href} className="text-white/25 text-sm hover:text-white/55 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
