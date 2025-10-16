# Alogebra — Parents Landing (Servicez)

דף נחיתה ממוקד להורים (React + Vite + Tailwind). מוכן להרצה מקומית והעלאה ל‑GitHub/Lovable.

## התקנה והרצה מקומית
```bash
npm install
npm run dev
```
פתח את הכתובת שמופיעה במסוף (לרוב http://localhost:5173).

## מבנה
- `src/Servicez.tsx` — הדף המלא (כל הסקשיינים וה‑CTA).
- `src/App.tsx` — מרנדר את Servicez בלבד.
- `index.html` — קובץ ראשי עם RTL.
- Tailwind כבר מוגדר (ראו `tailwind.config.js` + `postcss.config.js`).

## הוספת תמונות/טופס
החלף את ה‑placeholders בדף (`Servicez.tsx`) בתמונות שלך.
בקטע `#contact` הטמיע את הטופס (Formspree/Web3Forms/TidyCal) או קישור לזום.

## פריסה ל‑GitHub + Lovable
1. צור ריפו חדש ב‑GitHub והעלה את הקבצים.
2. ב‑Lovable קשר את האתר לריפו הזה.
3. הגדר build command: `npm run build`
4. הגדר output directory: `dist`
5. פרוס.

בהצלחה! 🚀
