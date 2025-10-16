// src/main.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // ⭐️ ייבוא חדש ⭐️
import './index.css'
import App from './App' // זה אמור להיות Servicez אם הוא הרכיב הראשי, אבל נשתמש בשם App כרגע

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>    {/* ⭐️ עטיפה חדשה ⭐️ */}
      <App />
    </HelmetProvider>   {/* ⭐️ סגירת עטיפה ⭐️ */}
  </React.StrictMode>
)
