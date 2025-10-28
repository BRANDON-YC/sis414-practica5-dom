# Práctica 5 · Fundamentos de Manipulación del DOM (SIS-414 G-2)

## 🎯 Objetivo
Desarrollar una pequeña app web que demuestre:
- Selección y manipulación del DOM.
- Creación dinámica de elementos.
- Manejo de eventos.
- Diferencia entre `textContent` vs `innerHTML`.
- Uso de **Fetch API** para mostrar datos externos (PokeAPI).

## 🧰 Stack
Vite + TypeScript + HTML/CSS. (Puedes usar JS puro si lo prefieres).

## ▶️ Cómo ejecutar
```bash
# Requisitos: Node.js 18+
npm install
npm run dev
# build para producción
npm run build && npm run preview
```

## 📁 Estructura
```
sis414-practica5-dom/
├─ index.html
├─ src/
│  ├─ main.ts
│  └─ style.css
├─ package.json
├─ tsconfig.json
└─ LICENSE
```

## ✅ Checklist de entrega
- [ ] El input y botones funcionan (eventos).
- [ ] Se crean/insertan nodos dinámicamente (no solo `innerHTML`).
- [ ] Se muestra resultado de una llamada **Fetch**.
- [ ] Se evidencia el uso de `textContent` vs `innerHTML` y se comenta cuándo usar cada uno.
- [ ] Código formateado y sin warnings de TypeScript.
- [ ] `README.md` completo y con instrucciones.
- [ ] Proyecto subido a **GitHub** (rama `main`).

## 📝 Notas
- Usa `textContent` para texto del usuario (seguro). Usa `innerHTML` **solo** con HTML controlado por ti.
- Maneja errores de red/404 y da feedback al usuario.
