import React, { useEffect, useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";

/** כלי עזר ל-SEO */
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Servicez() {
  const [showFloat, setShowFloat] = useState(false);

  /** SEO בסיסי – כותרת, תיאור, OG, טוויטר, JSON-LD */
  useEffect(() => {
    const title = "אלוגברה – שיעורים פרטיים במתמטיקה בזום | נבנה ביטחון וציונים גבוהים";
    const description =
      "לא מצליחים לעזור לילד במתמטיקה? באלוגברה תמצאו שיעורי זום אישיים, שיטה ברורה שמביאה תוצאות, ליווי רציף ובניית ביטחון. שיעור ניסיון חינם ולאחר מכן 100 ₪ לשיעור.";

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    // JSON-LD (ארגון + מוצר/שירות)
    const ld = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "אלוגברה",
      description,
      areaServed: "IL",
      sameAs: [],
      makesOffer: {
        "@type": "Offer",
        name: "שיעור ניסיון בחינם",
        price: "0",
        priceCurrency: "ILS",
      },
    };
    let script = document.getElementById("ld-json");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }, []);

  /** הצגת כפתור צף אחרי ~10% גלילה */
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setShowFloat(scrolled / total > 0.1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* שתי שורות גדולות במקום הכותרת הישנה */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            החומר בבית הספר נהיה קשה..
          </h1>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            ואתם כבר לא מצליחים לעזור לילד בשיעורים?
          </h2>

          {/* שורה בכחול */}
          <p className="mt-3 md:mt-4 text-xl md:text-2xl font-extrabold text-sky-700">
            הגעתם למקום הנכון.
          </p>

          {/* פסקת הסבר אפורה */}
          <p className="mt-3 text-[1.05rem] md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            אלוגברה זה לא עוד מורה פרטי יקר. בחצי דקה של קריאה תגלו את השיטה
            שעזרה למאות תלמידים לשפר את הציונים שלהם, לבנות ביטחון עצמי ולקבל
            כלים לחיים.
          </p>

          {/* כפתורים */}
          <div className="mt-7 flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition"
            >
              אני מוכן לקבוע שיעור ניסיון <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#offer"
              className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
            >
              איך זה עובד?
            </a>
          </div>
        </div>
      </section>

      {/* ===== מערכת החינוך ===== */}
      <section id="system" className="bg-white py-12 md:py-14 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
            מערכת החינוך כנראה עדיין לא הבינה שהעולם השתנה..
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4 text-lg md:text-xl text-slate-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-6 w-6 text-red-500" />
                  <span>המורים רצים בחומר, ורק מי שמבין מהר שורד</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-6 w-6 text-red-500" />
                  <span>מי שצריך רגע לחשוב הולך לאיבוד</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-6 w-6 text-red-500" />
                  <span>אין התאמה אמיתית לקצב ולסגנון של כל תלמיד</span>
                </li>
              </ul>

              <h3 className="mt-6 text-2xl font-extrabold text-center md:text-right text-slate-900">
                התוצאה?
              </h3>
              <p className="mt-1 text-center md:text-right text-lg text-slate-700 leading-relaxed">
                ביטחון יורד, תחושות ש״מתמטיקה זה לא בשבילי״ וטראומה מהמקצוע.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              {/* תמונת התלמיד המיואש – וודא שקיים ב־src */}
              <img
                src="/src/pexels-karolina-grabowska-6256115.webp"
                alt="תלמיד מתוסכל בכיתה"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== פס חיבור – “זה לא חייב להיות ככה.” ===== */}
      <section className="py-6 md:py-8 bg-sky-50 border-y border-sky-100">
        <h3 className="text-center text-sky-700 text-2xl md:text-3xl font-extrabold tracking-tight">
          זה לא חייב להיות ככה.
        </h3>
      </section>

      {/* ===== למה דווקא אני / הסיפור האישי (מקוצר) ===== */}
      <section id="about" className="bg-white py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center md:text-right">
              נעים להכיר, רועי מזור
            </h3>

            <p className="mt-4 text-[1.1rem] text-slate-700 text-center md:text-right leading-relaxed">
              חשבתי שאני גרוע בזה, והציונים לא היו בשיא. בכיתה י״א{" "}
              <span className="font-bold text-slate-900">קרה שינוי</span> —
              מורה מדהימה הפכה אותי מתלמיד שלא אוהב ללמוד למי שמחכה לשיעור הבא.
            </p>

            <p className="mt-3 text-[1.1rem] text-slate-700 text-center md:text-right leading-relaxed">
              המטרה שלי היא להיות המורה הזה בשביל הילד שלכם. מבחינתי מתמטיקה היא
              לא רק מקצוע,{" "}
              <span className="font-bold text-slate-900">
                זו שליחות לעזור, לקדם, ולהצליח
              </span>
              .
            </p>

            {/* CTA תחת "למה דווקא אני" */}
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition"
              >
                לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* מקום פנוי לתמונה/המלצות בהמשך – ללא תמונה של רועי כרגע */}
          <div className="rounded-3xl overflow-hidden border border-dashed border-slate-300 h-64 flex items-center justify-center text-slate-400">
            [ מקום לתמונה/סרטון המלצה ]
          </div>
        </div>
      </section>

      {/* ===== איך זה עובד? ===== */}
      <section id="offer" className="bg-sky-50 py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
            אז איך זה עובד?
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step number={1} title="שיחת היכרות קצרה" text="מזהים את הקשיים ונקודת הפתיחה" />
            <Step number={2} title="שיעור ניסיון בחינם" text="בודקים שיש חיבור ומתנסים ללא תשלום" />
            <Step number={3} title="תוכנית מותאמת אישית" text="יעדים ברורים, תרגול ומעקב" />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Step number={4} title="ליווי אישי" text="השיעור לא נגמר אחרי 50 דקות — זמינים לכל שאלה" />
            <Step number={5} title="מצליחים!" text="ביטחון עצמי, כלים להתמודדות וציונים גבוהים" />
          </div>
        </div>
      </section>

      {/* ===== איך מתחילים (תמחור) ===== */}
      <section id="pricing" className="bg-gradient-to-b from-sky-600 to-sky-700 text-white py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">איך מתחילים?</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/30 p-8 md:p-10 shadow-sm bg-white/0">
              <h4 className="text-2xl font-bold">שיעור ניסיון</h4>
              <p className="mt-3 text-lg md:text-xl text-sky-100 font-semibold">
                חינם, ללא התחייבות
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 shadow-sm hover:bg-sky-50 transition"
                >
                  לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/30 p-8 md:p-10 shadow-sm bg-white/0">
              <h4 className="text-2xl font-bold">לאחר מכן</h4>
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-extrabold">100 ₪</span>
                <span className="text-lg md:text-xl text-sky-100">
                  לשיעור, זום אחד על אחד
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-lg md:text-xl text-sky-100">
                <li className="flex items-center justify-center gap-2">
                  <Check className="h-5 w-5 text-white" /> ליווי אישי בין שיעורים
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check className="h-5 w-5 text-white" /> מעקב התקדמות להורים
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check className="h-5 w-5 text-white" /> ליווי 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== טופס יצירת קשר ===== */}
      <section id="contact" className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-2xl px-4">
          <h4 className="text-2xl md:text-3xl font-extrabold text-center text-slate-900">
            מלאו את הטופס ונחזור אליכם בהקדם
          </h4>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("תודה! קיבלנו את הפרטים ונחזור אליכם בהקדם.");
            }}
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                שם מלא
              </label>
              <input
                required
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                טלפון
              </label>
              <input
                required
                type="tel"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                אימייל
              </label>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                required
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />
              <label htmlFor="terms" className="text-sm text-slate-700">
                אני מאשר/ת את תנאי השימוש ומדיניות הפרטיות
              </label>
            </div>
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition"
              >
                נכתוב לכם בקרוב <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ===== פוטר קצר ===== */}
      <footer className="border-t border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} אלוגברה — מתמטיקה בראש אחר</p>
          <nav className="flex items-center gap-5">
            <a href="#offer" className="hover:text-slate-700">איך זה עובד?</a>
            <a href="#pricing" className="hover:text-slate-700">איך מתחילים?</a>
            <a href="#system" className="hover:text-slate-700">מערכת החינוך</a>
          </nav>
        </div>
      </footer>

      {/* ===== כפתור צף – מוקטן ~25% וטקסט חדש ===== */}
      <a
        href="#contact"
        className={`sm:hidden fixed right-3 top-[78%] z-50 inline-flex items-center gap-2 rounded-full bg-sky-500 px-3 py-2 text-white font-semibold shadow-lg transition-all ${
          showFloat ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="לקביעת שיעור"
      >
        לקביעת שיעור <ArrowRight className="h-4 w-4" />
      </a>
    </main>
  );
}

/* ===== רכיבי עזר ===== */
function Step({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-3 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white font-bold shadow">
        {number}
      </div>
      <h4 className="text-lg md:text-xl font-semibold text-center md:text-right">
        {title}
      </h4>
      <p className="mt-2 text-[1.05rem] text-slate-700 text-center md:text-right">
        {text}
      </p>
    </div>
  );
}
