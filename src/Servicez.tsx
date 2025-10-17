// src/Servicez.tsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  X,
  Check,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

// ❌ שורות הייבוא של התמונות נמחקו כדי למנוע שגיאות בנייה.
//    התמונות נטענות ישירות מתיקיית ה-public באמצעות נתיב מוחלט (/).

export default function Servicez() {
  const [showFloat, setShowFloat] = useState(false);

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
      {/* ---------- SEO (שיפורים טכניים) ---------- */}
      <Helmet>
        <html lang="he" dir="rtl" />
        <title>אלוגברה — שיעורי מתמטיקה פרטיים אונליין, בקצב של הילד</title>
        
        {/* שיפור SEO: הוספת robots ו-canonical */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="[הכנס את כתובת ה-URL הסופית של האתר כאן]" />
        
        <meta
          name="description"
          content="אלוגברה: מתמטיקה בגובה העיניים. שיעורים פרטיים בזום, אחד על אחד, שיטה שמביאה תוצאות, ליווי בין שיעורים וביטחון שעולה. שיעור ניסיון חינם."
        />
        <meta name="keywords" content="מורה פרטי למתמטיקה, שיעורים פרטיים אונליין, מתמטיקה זום, חטיבה, תיכון, בגרות במתמטיקה" />
        
        {/* שיפור OG: הוספת og:locale */}
        <meta property="og:locale" content="he_IL" />
        <meta property="og:title" content="אלוגברה — שיעורי מתמטיקה פרטיים אונליין" />
        <meta
          property="og:description"
          content="מתמטיקה בקצב שמתאים לילד שלכם, עם ליווי אישי ושיטה שעובדת. שיעור ניסיון בחינם."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ---------- HERO ---------- */}
      <section className="bg-gradient-to-b from-sky-50/70 to-white py-16 md:py-18">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            החומר בבית הספר נהיה קשה..
          </h1>
          {/* שינוי 2: הדגשת h2 */}
          <h2 className="mt-2 text-2xl md:text-[2rem] font-extrabold text-slate-900 font-black">
            ואתם כבר לא מצליחים לעזור לילד בשיעורים?
          </h2>

          <p className="mt-5 text-xl md:text-2xl font-extrabold text-sky-700">
            הגעתם למקום הנכון.
          </p>

          {/* שינוי 2: הדגשת מילים חשובות ופיצול שורות */}
          <p className="mt-3 max-w-3xl mx-auto text-slate-600 text-[1.125rem] md:text-[1.075rem] leading-relaxed">
            <span className="font-extrabold text-slate-900">אלוגברה</span> זה לא עוד מורה פרטי יקר.
            <br className="block"/>
            <span className="font-extrabold text-sky-700">ב-30 שניות של קריאה</span> תגלו את השיטה
            שעזרה למאות תלמידים לשפר את הציונים שלהם,
            <br className="block"/>
            לבנות <span className="font-extrabold text-slate-900">ביטחון עצמי</span> ולקבל
            כלים לחיים.
          </p>

          {/* CTA יחיד - כחול מלא, עם קישור לסקשן הבא (#system) */}
          <div className="mt-8 flex justify-center">
            <a
              href="#system" 
              className="inline-flex items-center gap-2 rounded-2xl border bg-sky-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-sky-700 transition" 
            >
              איך זה עובד? <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- מערכת החינוך ---------- */}
      <section id="system" className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
            מערכת החינוך כנראה עדיין לא הבינה שהעולם השתנה..
          </h3>

          <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
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

              <h4 className="mt-8 text-2xl font-extrabold text-center md:text-right text-slate-900">
                התוצאה?
              </h4>
              {/* שינוי 3: פיצול שורה */}
              <p className="mt-2 text-center md:text-right text-lg text-slate-700 leading-relaxed">
                הביטחון יורד, הילד בתחושה שמתמטיקה זה
                <br className="block"/>
                "לא בשבילו", והפחד מתגבר.
              </p>
            </div>

            {/* תמונת "התלמיד המיואש" */}
            <figure className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="/pexels-karolina-grabowska-6256115.webp"
                alt="תלמיד מתוסכל בכיתה"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>

          {/* שינוי 4: הגדלת הכתב לבולטות מרבית */}
          <div className="mt-8">
            <p className="text-center text-3xl md:text-5xl font-extrabold text-sky-700">
              זה לא חייב להיות ככה.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- הסיפור האישי ---------- */}
      <section id="about" className="bg-sky-50 py-12">
        {/* שינוי 5: הגדלת מרווח אנכי בין שורות (leading-loose) */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center leading-loose">
          <div>
            {/* שינוי 5: כותרת קצרה יותר */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center md:text-right">
              נעים להכיר, רועי
            </h3>

            {/* שינוי 1 ו-5: טקסט מעודכן, פיצול שורות אסתטי */}
            <p className="mt-4 text-lg md:text-xl text-slate-700 text-center md:text-right">
              תאמינו או לא, עד גיל 16 פחדתי ממתמטיקה..
              <br className="block"/>
              ראיתי שחור במבחנים והציונים לא היו בשיא.
              <br className="block"/>
              בכיתה יא' לקראת הבגרויות, הכל השתנה.
              <br className="block"/>
              הגיעה מורה חדשה שגרמה לי להפוך מתלמיד שלא לומד לאחד שרק מחכה לשיעור הבא.
              <br className="block"/>
              מאותו רגע התחיל מסע שמתפתח עד היום.
            </p>

            <p className="mt-4 text-lg md:text-xl text-slate-700 text-center md:text-right">
              היום אני לקראת סיום תואר ראשון בהוראת מתמטיקה.
              <br className="block"/>
              אני מביא גישה צעירה ושפה שמדברת אל תלמידים,
              <br className="block"/>
              וידע שמבוסס על מה שקורה בבתי הספר בכל רגע נתון.
              <br className="block"/>
              מתמטיקה בשבילי היא קודם
              <span className="font-extrabold text-slate-900">
                {' '}שליחות - לעזור, לקדם, ולהצליח
              </span>
              .
            </p>
          </div>

          {/* תמונת ״מספרים״ */}
          <figure className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <img
              src="/73388517-d675-4a3b-bdec-a667582ebbb9.webp"
              alt="מספרים על לוח — למידה ממוקדת ומתודולוגית"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ---------- למה דווקא אני ---------- */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">
            אז למה דווקא אני?
          </h3>

          <p className="mt-3 max-w-3xl mx-auto text-center text-[1.08rem] md:text-[1.12rem] text-slate-800">
            <span className="font-extrabold text-xl md:text-2xl">
              חלק יחשבו שהגיל הוא חיסרון, האמת שזה היתרון הכי גדול שלי
            </span>
            <br className="sm:hidden" />
            <span className="block mt-3">
              אני יודע איפה התלמידים נמצאים היום, מה מצופה מהם, ואיך להסביר בצורה
              ברורה שעובדת.
            </span>
          </p>

          {/* שינוי 6: שינוי הבולטים לעיצוב יותר מיוחד (רקע תכלת וגבולות) */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-2">
            <StyledBullet text="חיבור אמיתי מהרגע הראשון" />
            <StyledBullet text="שיטה מוכחת שמביאה ציונים גבוהים" />
            <StyledBullet text="מעקב והתאמות קצב אישיות" />
            <StyledBullet text="שקיפות מלאה מול ההורים" />
          </div>

          {/* מקום מומלץ לסרטוני/תמונות המלצה בעתיד */}
          <div className="mt-10 aspect-[16/9] rounded-2xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
            [ מקום לתמונה או סרטוני המלצה ]
          </div>

          {/* CTA מתחת ל“למה דווקא אני” */}
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition"
            >
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- איך זה עובד? ---------- */}
      <section id="offer" className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">
            אז איך זה עובד?
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step number={1} title="שיחת היכרות קצרה" text="מזהים את הקשיים ונקודת הפתיחה" />
            <Step number={2} title="שיעור ניסיון בחינם" text="בודקים שיש חיבור, מתנסים ללא תשלום" />
            <Step number={3} title="תוכנית מותאמת אישית" text="יעדים ברורים, תרגול ומעקב" />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Step number={4} title="ליווי אישי" text="השיעור לא נגמר אחרי 50 דקות, זמינים 24/7 לשאלות" />
            <Step number={5} title="מצליחים!" text="ביטחון עצמי, כלים להתמודדות וציונים גבוהים" />
          </div>
        </div>
      </section>

      {/* ---------- איך מתחילים? (Pricing) ---------- */}
      <section id="pricing" className="bg-gradient-to-b from-sky-600 to-sky-700 text-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">איך מתחילים?</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/30 p-8 md:p-10 shadow-sm bg-white/0">
              {/* שינוי 7: כותרת מודגשת */}
              <h4 className="text-2xl font-bold text-white font-extrabold">קובעים שיעור ניסיון</h4>
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
              {/* שינוי 7: כותרת מודגשת */}
              <h4 className="text-2xl font-bold text-white font-extrabold">לאחר מכן</h4>
              {/* שינוי 7: שימוש ב-whitespace-nowrap כדי למנוע פיצול שורה */}
              <div className="mt-3 flex items-baseline justify-center gap-2 whitespace-nowrap">
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
                <li className="flex items-center justify-center gap-2">
                  <Check className="h-5 w-5 text-white" /> ליווי 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- טופס ---------- */}
      <section id="contact" className="bg-white py-12">
        <div className="mx-auto max-w-2xl px-4">
          <h4 className="text-2xl md:text-3xl font-extrabold text-center">
            מלאו את הטופס ונחזור אליכם בהקדם
          </h4>

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

      {/* ---------- כפתור צף בנייד בלבד ---------- */}
      <a
        href="#contact"
        className={`sm:hidden fixed right-3 top-[78%] z-50 inline-flex items-center gap-2 rounded-full bg-sky-500/95 px-3 py-2 text-white text-sm font-semibold shadow-lg transition-all ${
          showFloat ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="לקביעת שיעור"
      >
        לקביעת שיעור
      </a>
    </main>
  );
}

/* ===== Components ===== */
// שינוי 6: קומפוננטה חדשה לבולטים מעוצבים
function StyledBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm text-slate-800">
      <Check className="mt-0.5 h-6 w-6 flex-none text-sky-600" />
      <span className="text-[1.1rem] font-medium">{text}</span>
    </div>
  );
}

// הקומפוננטה הישנה של Bullet נמחקה והוחלפה ב-StyledBullet

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
      <h4 className="text-lg md:text-xl font-semibold text-center md:text-right">{title}</h4>
      <p className="mt-2 text-[1.05rem] text-slate-700 text-center md:text-right">{text}</p>
    </div>
  );
}
