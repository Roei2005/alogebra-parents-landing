// src/Servicez.tsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  X,
  Check,
  ArrowRight,
  ArrowDown,
  MessageSquare, // אייקון לצ'אט/וואטסאפ
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

  // ✅ קישור וואטסאפ בטוח עם קידוד מלא של ההודעה
  const waMsg = encodeURIComponent(
    "היי, אשמח לפרטים נוספים לגבי השיעור ניסיון בחינם לילד/ה שלי"
  );
  const waHref = `https://wa.me/972536200289?text=${waMsg}`;

  // === נתוני דמה/התחלה לקולאז' (ריק כרגע) ===
  // כשתהיה מוכן:
  // 1. צור תיקייה /public/results/
  // 2. שמור שם צילומי מסך כ-webp (רוחב 900–1400px, גודל 100–250KB לתמונה)
  // 3. הוסף לכאן אובייקטים בסגנון:
  //    { src: "/results/parent-msg-1.webp", alt: "הורה: תודה, הציון עלה ל-86" },
  const resultsItems: CollageItem[] = [
    // דוגמאות לשימוש עתידי:
    // { src: "/results/grade-100-a.webp", alt: "תוצאה: 100 בבחינה" },
    // { src: "/results/parent-msg-1.webp", alt: "הורה: תודה, קפיצה בביטחון" },
  ];

  // === נתוני FAQ ===
  const faqItems: FAQItem[] = [
    {
      q: "תוך כמה זמן רואים שיפור?",
      a: "בדרך כלל אחרי 4–6 שיעורים כבר מרגישים שינוי: הילד/ה עונה יותר בכיתה, פחות חשש משאלות, וברוב המקרים גם הציון הראשון שאחרי מתחיל לעלות. שיפור גדול מגיע עם התמדה של חודש–חודשיים."
    },
    {
      q: "השיעורים בזום או פרונטלי?",
      a: "מה שנוח לכם: זום הוא ברירת המחדל ונותן גמישות מעולה. באזור נתניה אפשר גם פרונטלי. התוכן והאיכות זהים – אנחנו מתאימים את הקצב והדרך בדיוק לילד/ה."
    },
    {
      q: "מה אורך השיעור ומה קורה בפנים?",
      a: "50–60 דקות. מתחילים בבדיקה קצרה של חומר קודם, מתרגלים נקודות חלשות, ומסיימים במשימות קצרות וקלילות להמשך. המטרה: לצאת עם תחושת הצלחה ולא עם עומס."
    },
    {
      q: "יש ליווי בין השיעורים?",
      a: "כן. זמין/ה בווטסאפ לשאלות דחופות ול'נתקעתי' קטן באמצע השבוע. לפעמים נשלח גם דוגמה מצולמת או פתרון מקוצר כדי לשחרר פקק."
    },
    {
      q: "למי זה מתאים?",
      a: "כיתות ז׳–י״ב, 4–5 יחידות. גם למי שמרגיש/ה ש'מתמטיקה זה לא בשבילי'—שם אנחנו עובדים על ביטחון, שפה פשוטה, והרגלי למידה שישארו גם הלאה."
    }
  ];

  return (
    // ⚠️ שינוי: הגברת עובי הפונט הגלובלי (font-medium)
    <main dir="rtl" className="min-h-screen bg-white text-slate-900 font-medium">
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
        <meta
          name="keywords"
          content="מורה פרטי למתמטכה, שיעורים פרטיים אונליין, מתמטיקה זום, חטיבה, תיכון, בגרות במתמטיקה"
        />

        {/* שיפור OG: הוספת og:locale */}
        <meta property="og:locale" content="he_IL" />
        <meta
          property="og:title"
          content="אלוגברה — שיעורי מתמטיקה פרטיים אונליין"
        />
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

          {/* BOLD והדגשת "לא מצליחים" */}
          <h2 className="mt-2 text-2xl md:text-[2rem] font-extrabold text-slate-900">
            ואתם כבר <span className="font-extrabold text-red-600">לא מצליחים</span> לעזור לילד בשיעורים?
          </h2>

          {/* הגדלת הכתב של "הגעתם למקום הנכון" */}
          <p className="mt-5 text-2xl md:text-3xl font-extrabold text-sky-700">
            הגעתם למקום הנכון.
          </p>

          {/* הדגשת מילים חשובות ופיצול שורות */}
          <p className="mt-3 max-w-3xl mx-auto text-slate-600 text-[1.125rem] md:text-[1.075rem] leading-relaxed">
            <span className="font-extrabold text-slate-900">אלוגברה</span> זה לא עוד מורה פרטי יקר.
            <br className="block" />
            <span className="font-extrabold text-sky-700">ב-30 שניות של קריאה</span> תגלו את השיטה שעזרה למאות תלמידים לשפר את הציונים שלהם,
            <br className="block" />
            לבנות <span className="font-extrabold text-slate-900">ביטחון עצמי</span> ולקבל כלים לחיים.
          </p>

          {/* ✅ קישור לסקשן הבא */}
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

              <p className="mt-2 text-center md:text-right text-lg text-slate-700 leading-relaxed">
                הביטחון יורד, הילד בתחושה שמתמטיקה זה
                <br className="block" />
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

          {/* הגדלת כתב לבולטות */}
          <div className="mt-8">
            <p className="text-center text-3xl md:text-5xl font-extrabold text-sky-700">
              זה לא חייב להיות ככה.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- הסיפור האישי ---------- */}
      <section id="about" className="bg-sky-50 py-12">
        {/* הגדלת מרווח שורות (leading-loose) */}
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center leading-loose">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center md:text-right">
              נעים להכיר, רועי
            </h3>

            <p className="mt-4 text-lg md:text-xl text-slate-700 text-center md:text-right">
              תאמינו או לא, עד גיל 16 פחדתי ממתמטיקה.. ראיתי שחור במבחנים והציונים לא היו בשיא.
              בכיתה יא' לקראת הבגרויות, הכל השתנה. הגיעה מורה חדשה שגרמה לי להפוך מתלמיד שלא לומד לאחד שרק מחכה לשיעור הבא. מאותו רגע התחיל מסע שמתפתח עד היום.
            </p>

            <p className="mt-4 text-lg md:text-xl text-slate-700 text-center md:text-right">
              היום אני לקראת סיום תואר ראשון בהוראת מתמטיקה. אני מביא גישה צעירה ושפה שמדברת אל תלמידים, וידע שמבוסס על מה שקורה בבתי הספר בכל רגע נתון. מתמטיקה בשבילי היא קודם
              <span className="font-extrabold text-slate-900">{' '}שליחות - לעזור, לקדם, ולהצליח</span>.
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
              {/* שינוי הנוסח לפי בקשתך */}
              חלק יחשבו שהגיל שלי הוא חיסרון, האמת שזה היתרון הכי גדול שלי
            </span>
            <br className="sm:hidden" />
            <span className="block mt-3">
              אני יודע איפה התלמידים נמצאים היום, מה מצופה מהם, ואיך להסביר בצורה ברורה שעובדת.
            </span>
          </p>

          {/* בולטים מעוצבים */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-2">
            <StyledBullet text="חיבור אמיתי מהרגע הראשון" />
            <StyledBullet text="שיטה מוכחת שמביאה ציונים גבוהים" />
            <StyledBullet text="מעקב והתאמות קצב אישיות" />
            <StyledBullet text="שקיפות מלאה מול ההורים" />
          </div>

          {/* מקום לתמונת/וידאו המלצה */}
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

      {/* ---------- התוצאות מדברות (קולאז' תמונות המלצות) ---------- */}
      <ResultsCollage
        title="התוצאות מדברות בפני עצמן"
        subtitle="הורים ותלמידים משתפים בתהליך באלוגברה"
        items={resultsItems} // ⚠️ כרגע ריק. ראה ההערות למעלה איך להוסיף תמונות
      />

      {/* ---------- אז איך זה עובד? ---------- */}
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

      {/* ---------- FAQ ---------- */}
      <FAQ title="שאלות נפוצות של הורים" items={faqItems} />

      {/* ---------- איך מתחילים? (Pricing) ---------- */}
      <section id="pricing" className="bg-gradient-to-b from-sky-600 to-sky-700 text-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center">איך מתחילים?</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* קובייה 1: שיעור ניסיון */}
            <div className="rounded-3xl border border-white/30 p-8 md:p-10 shadow-sm bg-white/0">
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

            {/* קובייה 2: לאחר מכן */}
            <div className="rounded-3xl border border-white/30 p-8 md:p-10 shadow-sm bg-white/0 text-right">
              <h4 className="text-2xl font-bold text-white font-extrabold">לאחר מכן</h4>

              <div className="mt-3 flex items-baseline justify-end gap-2 whitespace-nowrap">
                <span className="text-5xl font-extrabold">100 ₪</span>
              </div>

              <p className="text-lg md:text-xl text-sky-100 mt-3 font-semibold">
                לשיעור אחד על אחד: זום <span className="font-extrabold text-white/80">או</span> פרונטלי (בנתניה)
              </p>

              <ul className="mt-5 space-y-2 text-lg md:text-xl text-sky-100">
                <li className="flex items-center justify-end gap-2">
                  ליווי אישי בין שיעורים <Check className="h-5 w-5 text-white" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  מעקב התקדמות להורים <Check className="h-5 w-5 text-white" />
                </li>
                <li className="flex items-center justify-end gap-2">
                  ליווי 24/7 <Check className="h-5 w-5 text-white" />
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

      {/* ---------- סקשן חדש: וואטסאפ ---------- */}
      <section className="bg-sky-50 py-10">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h4 className="text-2xl font-extrabold text-slate-900">
            יש לכם עוד שאלות?
          </h4>
          <p className="mt-3 text-lg text-slate-700">
            צרו איתנו קשר בוואטספ ונשמח לענות לכם!
          </p>

          <div className="mt-6 flex justify-center">
            {/* קישור לוואטסאפ עם טקסט מקודד */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-green-600 transition"
            >
              <MessageSquare className="h-5 w-5" />
              שלחו הודעה בוואטסאפ
            </a>
          </div>
        </div>
      </section>

      {/* ---------- כפתור צף בנייד בלבד ---------- */}
      <a
        href="#contact"
        className={`sm:hidden fixed right-3 top-[78%] z-50 inline-flex items-center gap-2 rounded-full bg-sky-500/95 px-3 py-2 text-white text-sm font-semibold shadow-lg transition-all ${showFloat ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="לקביעת שיעור"
      >
        לקביעת שיעור
      </a>
    </main>
  );
}

/* ===== Components ===== */

/* ===== ResultsCollage (קולאז' תוצאות) ===== */
type CollageItem = { src: string; alt: string; width?: number; height?: number };

function ResultsCollage({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: CollageItem[];
}) {
  const hasItems = items && items.length > 0;
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl md:text-3xl font-extrabold text-center text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-lg md:text-xl text-center text-slate-700 font-semibold">
          {subtitle}
        </p>

        {/* אם עדיין אין תמונות — מציגים Placeholder מסודר עם הנחיות */}
        {!hasItems ? (
          <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center text-slate-500">
            <p className="font-semibold">כאן יופיע קולאז' של תמונות המלצות</p>
            <p className="mt-2 text-sm">
              כדי להוסיף: שמרו תמונות ב&nbsp;<code className="bg-slate-100 px-1 rounded">/public/results/</code>&nbsp;
              והוסיפו אותן למערך <code className="bg-slate-100 px-1 rounded">resultsItems</code> בראש הקובץ.
            </p>
            <p className="mt-1 text-sm">
              מומלץ פורמט <b>webp</b>, רוחב 900–1400px, גודל 100–250KB לתמונה.
            </p>
          </div>
        ) : (
          <div className="mt-8 [direction:ltr]">
            {/* Masonry קל עם CSS Columns (RTL לטקסט, LTR למבנה) */}
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [direction:rtl]">
              {items.map((it, i) => (
                <figure
                  key={i}
                  className="mb-4 break-inside-avoid rounded-2xl bg-white p-2 ring-1 ring-sky-300/60 shadow-md"
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="rounded-xl w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    width={it.width}
                    height={it.height}
                  />
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ===== FAQ (שאלות נפוצות) ===== */
type FAQItem = { q: string; a: string };

function FAQ({ title, items }: { title: string; items: FAQItem[] }) {
  return (
    <section className="bg-sky-50 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h3 className="text-2xl md:text-3xl font-extrabold text-center text-slate-900">
          {title}
        </h3>

        <div className="mt-8 space-y-3">
          {items.map((it, idx) => (
            <details
              key={idx}
              className="group rounded-2xl bg-white p-4 md:p-5 border border-slate-200 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                <h4 className="text-lg md:text-xl font-semibold text-slate-900">
                  {it.q}
                </h4>
                <span className="shrink-0 rounded-full border border-slate-300 px-2 text-slate-600 text-sm">
                  +
                </span>
              </summary>
              <div className="mt-3 text-slate-700 leading-relaxed">
                {it.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
          >
            קובעים שיעור ניסיון בחינם
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===== Bullet + Step ===== */
function StyledBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm text-slate-800">
      <Check className="mt-0.5 h-6 w-6 flex-none text-sky-600" />
      <span className="text-[1.1rem] font-medium">{text}</span>
    </div>
  );
}

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
