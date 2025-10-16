import React from "react";
import { Check, Clock, Users, Brain, Zap, MessageSquare, ArrowRight, Star } from "lucide-react";

/**
 * Alogebra — Parents Landing (Servicez), RTL
 * עדכונים: Rubik/Assistant, ניסוחים טבעיים, הסרת מקפים, כותרות+כפתורים ממורכזים,
 * CTA כל שני סקשנים, וואטסאפ ירוק בעברית, כפתור צף במובייל, טופס חובה, "איך זה עובד" (5 שלבים),
 * סקשן "זה לא אמור להיות ככה" ככותרת בלבד.
 */

export default function Servicez() {
  return (
    <main className="min-h-screen bg-white text-slate-900" dir="rtl">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="font-heading text-center md:text-right text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                הילד חכם, אבל במתמטיקה משהו פשוט לא מתחבר?
              </h1>
              <p className="mt-5 text-center md:text-right text-lg md:text-xl text-slate-700">
                באלוגברה לומדים מתמטיקה בצורה פשוטה וברורה, עם הסברים אנושיים, קצב שמתאים לילד שלכם, וליווי שמחזק ביטחון.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
                  לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#offer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition">
                  איך זה עובד?
                </a>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <li className="flex items-center gap-2 justify-center md:justify-start"><Check className="h-4 w-4 text-sky-600"/>שיעורים פרטיים בזום, אחד על אחד</li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><Check className="h-4 w-4 text-sky-600"/>מותאם אישית לקצב ולמטרות</li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><Check className="h-4 w-4 text-sky-600"/>ליווי אישי גם בין השיעורים</li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><Check className="h-4 w-4 text-sky-600"/>שיעור ניסיון חינם</li>
              </ul>
            </div>

            {/* תמונת הירו */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="flex h-full items-center justify-center">
                  <span className="text-slate-400">[ תמונת הירו, תתווסף בהמשך ]</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA אחרי 2 סקשנים */}
          <div className="mt-10 flex justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM — כותרת בלבד */}
      <section id="problem" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-center tracking-tight">זה לא אמור להיות ככה</h2>
        </div>
      </section>

      {/* SOLUTION קצר + אפשרות פרונטלי + זום */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-center tracking-tight">ובאלוגברה זה באמת אחרת</h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-slate-700">
            שיעורים אחד על אחד בזום, תוכנית מותאמת לכל תלמיד, וליווי שמחזיר ביטחון. קיימת אפשרות לשיעור פרונטלי בנתניה.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <CardStat title="1 על 1 בזום" text="מקסימום קשב ואפקטיביות"/>
            <CardStat title="תוכנית מותאמת" text="מסלול מדויק לכל תלמיד"/>
            <CardStat title="ליווי בין שיעורים" text="שאלות, תזכורות ותרגול קל"/>
            <CardStat title="כלים לביטחון" text="פוקוס, ניהול לחץ והצלחה"/>
          </div>

          <p className="mt-8 max-w-3xl mx-auto text-center text-slate-700">
            שיעור בזום יכול להישמע מאתגר, יש לנו מערכת מסודרת ונוחה. שילוב של כלים מתמטיים ברורים ותוכנית עבודה מדויקת גורם ללמידה להיות חווייתית ויעילה, גם מרחוק.
          </p>

          {/* CTA אחרי 2 סקשנים */}
          <div className="mt-10 flex justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-center md:text-right tracking-tight">נעים להכיר, רועי מזור</h3>
              <div className="mt-4 space-y-3 text-slate-700">
                <p className="text-center md:text-right">
                  אתם יכולים להיות רגועים, את החומר במתמטיקה אני יודע מצוין, אבל מה שיותר מעניין זו השאלה למה בחרתי להיות מורה כבר בגיל 20, ולמה שתסמכו דווקא עליי.
                </p>
                <p className="text-center md:text-right">
                  מאז שאני זוכר את עצמי, לעזור לאחרים זה הדבר שהכי חשוב לי. בבית הספר הייתי זה שמסביר לחברים לפני מבחנים ועוזר למורים בכיתה, גיליתי כמה סיפוק יש בלראות מישהו מבין בזכותך.
                </p>
                <p className="text-center md:text-right font-semibold">
                  היום אני לקראת סיום תואר ראשון בהוראת מתמטיקה, מביא גישה עדכנית ושפה שמדברת עם תלמידים, ידע שמבוסס על מה שקורה בבתי הספר.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Bulleted text="שפה של תלמידים, תקשורת של הורים"/>
                <Bulleted text="טכנולוגיה חכמה וכלים ויזואליים"/>
                <Bulleted text="סבלנות ויחס אישי"/>
                <Bulleted text="הצלחות בשטח"/>
              </div>
            </div>

            {/* תמונה עליי */}
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-full items-center justify-center">
                <span className="text-slate-400">[ תמונת פורטרט מקצועית ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-center tracking-tight">אז למה דווקא אני?</h3>
          <p className="mt-3 max-w-3xl mx-auto text-center text-slate-700">
            חלק יחשבו שהגיל הוא חיסרון, האמת שזה היתרון הכי גדול. אני יודע איפה התלמידים נמצאים היום, מה מצופה מהם, ואיך ללמד בצורה ברורה שעובדת.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Tag title="חיבור אנושי מהדקה הראשונה"/>
            <Tag title="שיטה שמביאה תוצאות"/>
            <Tag title="מעקב אחרי התקדמות"/>
            <Tag title="תקשורת שקופה עם הורים"/>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="offer" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-center tracking-tight">אז איך זה עובד</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step number={1} title="שיחת היכרות קצרה" text="מזהים את הקשיים ואת נקודת הפתיחה"/>
            <Step number={2} title="שיעור ניסיון בחינם" text="בודקים שיש חיבור, מתנסים ללא תשלום"/>
            <Step number={3} title="תוכנית מותאמת אישית להצלחה" text="קובעים יעדים, תרגול ומעקב"/>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Step number={4} title="ליווי אישי" text="השיעור לא נגמר אחרי 50 דקות, זמינים 24/7 לכל שאלה"/>
            <Step number={5} title="מצליחים!" text="ביטחון, הבנה וציונים עולים"/>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* PRICING — כחול, טקסט לבן מודגש */}
      <section id="pricing" className="bg-gradient-to-b from-sky-600 to-sky-700">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 text-white">
          <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-center tracking-tight">מחיר פשוט והוגן</h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/30 p-7 shadow-sm bg-white/0">
              <h4 className="text-xl font-bold">שיעור ניסיון</h4>
              <p className="mt-2 text-sky-100 font-semibold">חינם, ללא התחייבות</p>
              <div className="mt-6 flex justify-center">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 shadow-sm hover:bg-sky-50 transition">
                  לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5"/>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/30 p-7 shadow-sm bg-white/0">
              <h4 className="text-xl font-bold">לאחר מכן</h4>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-4xl font-extrabold">100 ₪</span>
                <span className="text-sky-100">לשיעור, זום אחד על אחד</span>
              </div>
              <ul className="mt-4 space-y-2 text-sky-100">
                <li className="flex items-center justify-center gap-2"><Check className="h-5 w-5 text-white"/>ליווי אישי גם בין השיעורים</li>
                <li className="flex items-center justify-center gap-2"><Check className="h-5 w-5 text-white"/>מעקב התקדמות להורים</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-center tracking-tight">מה הורים ותלמידים מספרים</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <TestimonialCard quote="רועי החזיר לילד שלנו את הביטחון במתמטיקה בתוך חודש" name="אמא של ל׳, כיתה ח׳"/>
            <TestimonialCard quote="סוף סוף מישהו שמסביר בגובה העיניים, והציונים עולים" name="אבא של נ׳, כיתה י׳"/>
            <TestimonialCard quote="ליווי אמיתי גם בין השיעורים, זה שינה לנו את השנה" name="אמא של י׳, כיתה י״א"/>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="trial" className="relative overflow-hidden bg-gradient-to-b from-sky-600 to-sky-700">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 text-white">
          <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-center tracking-tight">מתחילים ללמוד בראש אחר</h3>
          <p className="mt-2 max-w-2xl mx-auto text-center text-sky-100 font-semibold">שיעור ניסיון בחינם, נגדיר מטרות ונצא לדרך</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 shadow-sm hover:bg-sky-50 transition">
              לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5"/>
            </a>
            <a href="https://wa.me/972000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700 transition">
              דברו איתי בוואטסאפ <MessageSquare className="h-5 w-5"/>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-14">
          <h4 className="font-heading text-2xl md:text-3xl font-extrabold text-center tracking-tight">טופס קצר, דקה וסיימנו</h4>
          <form className="mt-8 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("תודה, נחזור אליך בהקדם"); }}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">שם מלא</label>
              <input required type="text" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">טלפון</label>
              <input required type="tel" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">אימייל</label>
              <input required type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"/>
            </div>
            <div className="flex items-start gap-2">
              <input required id="terms" type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300"/>
              <label htmlFor="terms" className="text-sm text-slate-700">אני מאשר/ת את תנאי השימוש ומדיניות הפרטיות</label>
            </div>
            <div className="pt-2 flex justify-center">
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
                לשיעור ניסיון בחינם <ArrowRight className="h-5 w-5"/>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} אלוגברה, מתמטיקה בראש אחר</p>
            <nav className="flex items-center gap-5">
              <a href="#about" className="hover:text-slate-700">עליי</a>
              <a href="#offer" className="hover:text-slate-700">איך זה עובד</a>
              <a href="#pricing" className="hover:text-slate-700">מחיר</a>
              <a href="#testimonials" className="hover:text-slate-700">המלצות</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* כפתור צף במובייל בלבד */}
      <a
        href="#contact"
        className="sm:hidden fixed right-3 top-1/2 translate-y-1/3 z-50 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-3 text-white font-semibold shadow-lg"
        aria-label="קביעת שיעור מהיר"
      >
        קביעת שיעור מהיר <ArrowRight className="h-5 w-5" />
      </a>
    </main>
  );
}

/* ——— Components ——— */
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
      <div className="flex items-center justify-center gap-2 text-sky-700">{icon}<span className="font-semibold">{title}</span></div>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}
function CardStat({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}
function Bulleted({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-slate-700">
      <Check className="mt-0.5 h-5 w-5 flex-none text-sky-600"/>
      <span>{text}</span>
    </div>
  );
}
function Tag({ title }: { title: string }) {
  return (
    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm text-center">
      {title}
    </div>
  );
}
function Step({ number, title, text }: { number: number; title: string; text: string }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-3 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white font-bold shadow">{number}</div>
      <h4 className="text-lg font-semibold text-center md:text-right">{title}</h4>
      <p className="mt-2 text-sm text-slate-600 text-center md:text-right">{text}</p>
    </div>
  );
}
function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-1 text-yellow-500" aria-hidden>
        <Star className="h-4 w-4"/><Star className="h-4 w-4"/><Star className="h-4 w-4"/><Star className="h-4 w-4"/><Star className="h-4 w-4"/>
      </div>
      <blockquote className="mt-3 text-slate-800">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm text-slate-500">{name}</figcaption>
    </figure>
  );
}
