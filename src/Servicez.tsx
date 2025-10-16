import React from "react";
import { Check, Clock, Users, Brain, Zap, MessageSquare, ArrowRight, Star } from "lucide-react";

/**
 * Alogebra — Parents Landing Page (Servicez)
 * Single, focused landing page with built-in sections & anchors.
 * TailwindCSS + Vite + React + TS.
 */

export default function Servicez() {
  return (
    <main className="min-h-screen bg-white text-slate-900" dir="rtl">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                הילד חכם — אבל במתמטיקה משהו פשוט לא מתחבר?
              </h1>
              <p className="mt-5 text-lg md:text-xl text-slate-700">
                באלוגברה מלמדים מתמטיקה בדרך חכמה, אנושית ומדויקת לתלמידים של היום — בגובה עיניים.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#trial" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
                  קביעת שיעור ניסיון חינם <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#problem" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition">
                  איך זה עובד?
                </a>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-600"/>שיעורים פרטיים בזום, אחד על אחד</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-600"/>מותאם אישית לקצב ולמטרות</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-600"/>ליווי אישי גם בין השיעורים</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-sky-600"/>שיעור ניסיון חינם</li>
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              {/* Replace with a real image */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="flex h-full items-center justify-center">
                  <span className="text-slate-400">[ תמונה אותנטית שלך עם תלמידים ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">זה לא שהילד לא רוצה להצליח — המערכת פשוט לא בנויה עבורו</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            בכיתות גדולות המורים רצים בחומר, אין מספיק זמן לשאלות וכל תלמיד למד אחרת — אבל כולם נמדדים אותו דבר.
            כאן מתחילות תחושות של פספוס למרות פוטנציאל אמיתי.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Feature icon={<Clock className="h-5 w-5"/>} title="אין זמן אישי" text="קצב אחיד שלא מתאים לכל אחד."/>
            <Feature icon={<Users className="h-5 w-5"/>} title="כיתות עמוסות" text="קשה לעצור ולהעמיק כשצריך."/>
            <Feature icon={<Brain className="h-5 w-5"/>} title="סגנונות למידה שונים" text="אבל אותה שיטת הסבר לכולם."/>
            <Feature icon={<Zap className="h-5 w-5"/>} title="מרוץ אחרי סילבוס" text="הבנה אמיתית נדחקת הצידה."/>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">כשאין חיבור — הביטחון צונח</h3>
          <p className="mt-3 max-w-3xl text-slate-700">
            במקום אהבה ללמידה מגיע פחד. במקום הצלחה — התחושה ש"מתמטיקה זה לא בשבילי". זה ממש לא חייב להיות ככה.
          </p>
          <div className="mt-8 grid items-center gap-6 md:grid-cols-2">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-sky-600"/>הביטחון מתערער מול מבחנים</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-sky-600"/>תסכול מחוסר הבנה רגע לפני שמבינים</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-sky-600"/>ויתור מוקדם על יכולות אמיתיות</li>
            </ul>
            <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-full items-center justify-center">
		<span className="text-slate-400">[ ויז׳ואל/תמונה להמחשת תסכול {'>'} פתרון ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">זה לא אמור להיות ככה — ובאלוגברה זה באמת אחרת</h3>
          <p className="mt-3 max-w-3xl text-slate-700">
            שיעורים פרטיים אונליין, מותאמים אישית לקצב, לרמה ולמטרות. מורים צעירים שמדברים בשפה של הדור הזה, עם ליווי אישי גם בין השיעורים.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <CardStat title="1 על 1 בזום" text="מקסימום קשב ואפקטיביות"/>
            <CardStat title="תוכנית מותאמת" text="בונים מסלול מדויק לכל תלמיד"/>
            <CardStat title="ליווי בין שיעורים" text="שאלות, תזכורות ותרגול קל"/>
            <CardStat title="כלים לביטחון" text="פוקוס, ניהול לחץ והצלחה"/>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">נעים להכיר, רועי — המורה מאחורי אלוגברה</h3>
              <p className="mt-3 text-slate-700">
                את החומר אני יודע מצוין. אבל מה שבאמת חשוב לי הוא לגרום לילדים להאמין בעצמם. בחרתי להיות מורה כבר בגיל 20 כדי לשנות איך שלומדים מתמטיקה — בדרך אנושית, סבלנית ומדויקת לתלמיד.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Bulleted text="שפה של תלמידים, תקשורת של הורים"/>
                <Bulleted text="טכנולוגיה חכמה וכלים ויזואליים"/>
                <Bulleted text="סבלנות אמיתית ויחס אישי"/>
                <Bulleted text="הצלחות מוכחות בשטח"/>
              </div>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex h-full items-center justify-center">
                <span className="text-slate-400">[ תמונה שלך — פורטרט נקי מקצועי ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">אז למה דווקא אני?</h3>
          <p className="mt-3 max-w-3xl text-slate-700">
            יש שיחשבו שהגיל הוא חיסרון — האמת שזה היתרון הכי גדול. אני מדבר בשפה של התלמידים, ויחד עם זה יודע לתווך להורים תהליך ברור ומדיד.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Tag title="חיבור אנושי מהדקה הראשונה"/>
            <Tag title="שיטה ברורה שמביאה תוצאות"/>
            <Tag title="מעקב אחרי התקדמות"/>
            <Tag title="תקשורת שקופה עם הורים"/>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / OFFER */}
      <section id="offer" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">אז איך זה עובד בפועל?</h3>
          <p className="mt-3 max-w-3xl text-slate-700">
            בונים מסלול מותאם אישית לכל תלמיד: בודקים את המצב, מגדירים מטרות ויוצאים לדרך בלי לבזבז זמן — לצד פיתוח ביטחון עצמי וכלים להצלחה תחת לחץ.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step number={1} title="שיחת היכרות קצרה" text="מזהים את הצרכים ואת נקודת הפתיחה."/>
            <Step number={2} title="שיעור ניסיון חינם" text="חווים את השיטה ובודקים חיבור."/>
            <Step number={3} title="תוכנית מותאמת אישית" text="קובעים יעדים, תרגול וליווי בין שיעורים."/>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ListCard title="למי זה מתאים?" items={[
              "תלמידים מכיתות ז׳–י״ב",
              "מי שמחפש ליווי אישי וצמוד גם לאחר השיעור",
              "תלמידים שבאים להשקיע ולעלות רמה",
              "מי שרוצה לשפר הקבצה / יחידות ולבנות ביטחון"
            ]}/>
            <ListCard title="מה מקבלים?" items={[
              "שיעורי זום אחד על אחד",
              "סיכומים/תרגולים קצרים לבית",
              "מענה מהיר לשאלות דחופות",
              "דוח התקדמות חודשי קצר להורים"
            ]}/>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">מחיר פשוט והוגן</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
              <h4 className="text-xl font-bold">שיעור ניסיון</h4>
              <p className="mt-2 text-slate-700">חינם — ללא התחייבות.</p>
              <a href="#trial" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 transition">
                קבעו שיעור ניסיון עכשיו <ArrowRight className="h-5 w-5"/>
              </a>
            </div>
            <div className="rounded-3xl border border-slate-200 p-7 shadow-sm">
              <h4 className="text-xl font-bold">לאחר מכן</h4>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">100 ₪</span>
                <span className="text-slate-600">לשיעור (זום, 1 על 1)</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><Check className="h-5 w-5 text-sky-600"/>ליווי אישי גם בין השיעורים</li>
                <li className="flex items-center gap-2"><Check className="h-5 w-5 text-sky-600"/>מעקב התקדמות להורים</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">מה הורים ותלמידים מספרים</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <TestimonialCard quote="רועי החזיר לילד שלנו את הביטחון במתמטיקה בתוך חודש!" name="אמא של ל׳, כיתה ח׳"/>
            <TestimonialCard quote="סוף סוף מישהו שמסביר בגובה העיניים — והציונים עולים." name="אבא של נ׳, כיתה י׳"/>
            <TestimonialCard quote="ליווי אמיתי גם בין השיעורים — זה שינה לנו את השנה." name="אמא של י׳, כיתה י״א"/>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="trial" className="relative overflow-hidden bg-gradient-to-b from-sky-600 to-sky-700">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">מתחילים ללמוד בראש אחר 🚀</h3>
          <p className="mt-2 max-w-2xl text-sky-100">שיעור ניסיון חינם, ללא התחייבות. נבדוק חיבור, נגדיר מטרות ונתחיל לזוז.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 shadow-sm hover:bg-sky-50 transition">
              קביעת שיעור ניסיון <ArrowRight className="h-5 w-5"/>
            </a>
            <a href="https://wa.me/972000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10 transition">
              דברו איתי ב‑WhatsApp <MessageSquare className="h-5 w-5"/>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT PLACEHOLDER */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-14">
          <h4 className="text-xl md:text-2xl font-extrabold tracking-tight">טופס קצר — דקה וסיימנו</h4>
          <p className="mt-2 text-slate-700">שלבו כאן את הטופס הקיים (Formspree/Web3Forms/TidyCal/כלי אחר). אפשר גם להטמיע קישור לשיעור היכרות בזום.</p>
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-slate-500">
            <p className="text-center">[ כאן ישתלב הטופס האמיתי שלכם ]</p>
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} אלוגברה — מתמטיקה בראש אחר</p>
            <nav className="flex items-center gap-5">
              <a href="#about" className="hover:text-slate-700">עליי</a>
              <a href="#offer" className="hover:text-slate-700">איך זה עובד</a>
              <a href="#pricing" className="hover:text-slate-700">מחיר</a>
              <a href="#testimonials" className="hover:text-slate-700">המלצות</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ———————————————— Small presentational components ———————————————— */
function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-sky-700">{icon}<span className="font-semibold">{title}</span></div>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function CardStat({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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
    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
      {title}
    </div>
  );
}

function Step({ number, title, text }: { number: number; title: string; text: string }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="absolute -top-3 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white font-bold shadow">{number}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 p-7 shadow-sm bg-white">
      <h4 className="text-lg font-bold">{title}</h4>
      <ul className="mt-4 space-y-2 text-slate-700">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 text-sky-600"/><span>{it}</span></li>
        ))}
      </ul>
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
