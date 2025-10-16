// src/Servicez.tsx
import React, { useEffect, useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";

// תמונת התלמיד המיואש (להניח ב- src/assets/)
import studentFrustrated from "./assets/pexels-karolina-grabowska-6256115.webp";

export default function Servicez() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setShowFloat(scrolled / total > 0.1); // להציג כפתור צף לאחר ~10% גלילה
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900">
      {/* ===== HERO (הפתיח המקורי) ===== */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            הילד חכם, אבל במתמטיקה משהו פשוט לא מתחבר?
          </h1>
          <p className="mt-4 text-xl font-semibold text-sky-700">זה לא חייב להיות ככה</p>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            באלוגברה לומדים מתמטיקה בצורה פשוטה וברורה, עם הסברים אנושיים,
            קצב שמתאים לילד שלכם וליווי שמחזק ביטחון.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition"
            >
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition"
            >
              איך זה עובד?
            </a>
          </div>
        </div>
      </section>

      {/* ===== מערכת החינוך (X אדומים + תמונת תלמיד) ===== */}
      <section id="system" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
            מערכת החינוך כנראה עדיין לא הבינה שהעולם השתנה
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <ul className="space-y-5 text-lg md:text-xl text-slate-700 leading-relaxed">
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

              <h3 className="mt-10 text-2xl font-extrabold text-center md:text-right text-slate-900">
                התוצאה?
              </h3>
              <p className="mt-2 text-center md:text-right text-lg text-slate-700 leading-relaxed">
                ביטחון יורד, תחושות ש״מתמטיקה זה לא בשבילי״ וטראומה מהמקצוע.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src={studentFrustrated}
                alt="תלמיד מתוסכל בכיתה"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA אחרי 2 סקשנים */}
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition"
            >
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== נעים להכיר, רועי מזור (טקסט בלבד) ===== */}
      <section id="about" className="bg-sky-50 py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
            נעים להכיר, רועי מזור
          </h3>

        <p className="mt-3 text-lg font-semibold text-sky-700 text-center">
            תאמינו או לא, עד גיל 16 לא הבנתי מתמטיקה
          </p>

          <div className="mt-4 space-y-4 text-[1.1rem] text-slate-700 leading-relaxed text-center">
            <p>
              חשבתי שאני גרוע בזה, והציונים לא היו בשיא. בכיתה י״א קרה שינוי — מורה מדהימה
              הפכה אותי מתלמיד שלא אוהב ללמוד למי שמחכה לשיעור הבא.
            </p>
            <p>
              המטרה שלי היא להיות המורה הזה בשביל הילד שלכם. מבחינתי מתמטיקה היא לא רק מקצוע —
              זו שליחות לעזור, לקדם, ולהצליח.
            </p>
          </div>

          {/* CTA נוסף */}
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition"
            >
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== למה דווקא אני? ===== */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">אז למה דווקא אני?</h3>

          <p className="mt-3 max-w-3xl mx-auto text-center text-[1.1rem] text-slate-800">
            <span className="font-extrabold text-xl">
              חלק יחשבו שהגיל הוא חיסרון, האמת שזה היתרון הכי גדול שלי
            </span>
            <br className="sm:hidden" />
            <span className="block mt-3 text-slate-700">
              אני יודע איפה התלמידים נמצאים היום, מה מצופה מהם, ואיך להסביר בצורה ברורה שעובדת.
            </span>
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-2">
            <Bullet text="חיבור אנושי מהדקה הראשונה" />
            <Bullet text="שיטה שמביאה תוצאות" />
            <Bullet text="מעקב והתאמות בדרך" />
            <Bullet text="תקשורת שקופה עם הורים" />
          </div>
        </div>
      </section>

      {/* ===== איך זה עובד? ===== */}
      <section id="how" className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">אז איך זה עובד?</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step number={1} title="שיחת היכרות קצרה" text="מזהים את הקשיים ונקודת הפתיחה" />
            <Step number={2} title="שיעור ניסיון בחינם" text="בודקים שיש חיבור, מתנסים ללא תשלום" />
            <Step number={3} title="תוכנית מותאמת אישית" text="יעדים ברורים, תרגול ומעקב" />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Step number={4} title="ליווי אישי" text="השיעור לא נגמר אחרי 50 דקות — זמינים 24/7 לשאלות" />
            <Step number={5} title="מצליחים!" text="ביטחון עצמי, כלים להתמודדות וציונים גבוהים" />
          </div>
        </div>
      </section>

      {/* ===== איך מתחילים? ===== */}
      <section id="start" className="bg-gradient-to-b from-sky-600 to-sky-700 text-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">איך מתחילים?</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/30 p-8 md:p-10 shadow-sm bg-white/0">
              <h4 className="text-2xl font-bold">שיעור ניסיון</h4>
              <p className="mt-3 text-lg md:text-xl text-sky-100 font-semibold">חינם, ללא התחייבות</p>
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
                <span className="text-lg md:text-xl text-sky-100">לשיעור, זום אחד על אחד</span>
              </div>
              <ul className="mt-5 space-y-2 text-lg md:text-xl text-sky-100">
                <li className="flex items-center justify-center gap-2">
                  <Check className="h-5 w-5 text-white" /> ליווי אישי בין שיעורים
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Check className="h-5 w-5 text-white" /> מעקב התקדמות להורים
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== טופס יצירת קשר ===== */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h4 className="text-2xl md:text-3xl font-extrabold text-center">טופס קצר, דקה וסיימנו</h4>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("תודה! נכתוב לכם בקרוב");
            }}
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">שם מלא</label>
              <input
                required
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">טלפון</label>
              <input
                required
                type="tel"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">אימייל</label>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div className="flex items-start gap-2">
              <input required id="terms" type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
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

      {/* ===== פוטר ===== */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} אלוגברה — מתמטיקה בראש אחר</p>
            <nav className="flex items-center gap-5">
              <a href="#about" className="hover:text-slate-700">עליי</a>
              <a href="#how" className="hover:text-slate-700">איך זה עובד?</a>
              <a href="#start" className="hover:text-slate-700">איך מתחילים?</a>
              <a href="#system" className="hover:text-slate-700">מערכת החינוך</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* ===== כפתור צף במובייל ===== */}
      <a
        href="#contact"
        className={`sm:hidden fixed right-3 top-[78%] z-50 inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-3 text-white font-semibold shadow-lg transition-all ${
          showFloat ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="קביעת שיעור מהיר"
      >
        קביעת שיעור מהיר <ArrowRight className="h-5 w-5" />
      </a>
    </main>
  );
}

/* ——— Components ——— */
function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-slate-700 justify-center md:justify-start">
      <Check className="mt-0.5 h-5 w-5 flex-none text-sky-600" />
      <span className="text-[1.05rem]">{text}</span>
    </div>
  );
}

function Step({ number, title, text }: { number: number; title: string; text: string }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-3 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white font-bold shadow">
        {number}
      </div>
      <h4 className="text-lg md:text-xl font-semibold text-center md:text-right">{title}</h4>
      <p className="mt-2 text-[1.05rem] text-slate-700 text-center md:text-right">{text}</p>
    </div>
  );
}
