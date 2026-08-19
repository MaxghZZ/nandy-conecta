# Nandy Conecta

Landing mobile-first de la candidatura de **Nandy Córdova Morales** a la alcaldía de Carabayllo (Renovación Popular), elecciones municipales 2026.

Sitio estático — HTML/CSS/JS plano, sin backend, sin build step. Navegación por 5 tabs (bottom nav): Inicio, Nandy, Propuestas, Eventos, Redes.

## Estructura

```
nandy-conecta/
  index.html          → estructura de las 5 pantallas + bottom nav
  css/style.css        → design system (colores, tipografía, componentes)
  js/data.js            → TODO el contenido editable (textos, propuestas, zonas, eventos, links)
  js/main.js            → lógica: cambio de tabs + render de tarjetas desde data.js
  img/                  → fotos y assets (hero-badge.png, nandy-photo.png)
```

## Cómo editar contenido

**No toques `index.html` ni `main.js` para cambiar textos.** Todo el contenido vive en `js/data.js`:

- Número de WhatsApp (campaña, zona, voluntarios) → `DATA.candidata`
- Próximo mitin → `DATA.proximoMitin`
- Trayectoria de Nandy → `DATA.trayectoria`
- Las 5 propuestas → `DATA.propuestas`
- Zonas/sectores de Carabayllo → `DATA.zonas`
- Agenda de caminatas/asambleas → `DATA.agenda`
- Links JNE/ONPE → `DATA.electoral`
- Redes sociales → `DATA.redes`
- Footer → `DATA.footer`

Cada campo marcado con `// TODO` en `data.js` es un dato real pendiente de la campaña (números de WhatsApp, links exactos de JNE/ONPE, usuarios de redes, plan de gobierno en PDF, zonas reales).

## Cómo ver el sitio en local

No hace falta instalar nada. Dos opciones:

1. Doble clic en `index.html` (abre directo en el navegador).
2. O, para evitar restricciones del navegador con `file://`, levantar un server simple:
   ```
   cd nandy-conecta
   python3 -m http.server 8000
   ```
   y abrir `http://localhost:8000`.

## Deploy

Cualquiera de estas opciones funciona (el sitio es 100% estático):

- **Netlify**: arrastrar la carpeta `nandy-conecta` a app.netlify.com/drop, o conectar el repo de GitHub para deploy automático en cada push.
- **Vercel**: `vercel` desde la carpeta, o conectar el repo de GitHub (framework preset: "Other").

## Pendientes (bloqueados por la campaña, no por desarrollo)

- Fotos y video reales en alta calidad (actualmente se usan crops de las piezas gráficas ya recibidas como placeholder).
- Número de WhatsApp real de campaña, zona y voluntarios.
- Zonas/sectores reales de Carabayllo.
- Links exactos de verificación JNE y consulta de local de votación ONPE.
- Usuarios/links reales de redes sociales.
- PDF del plan de gobierno para el botón de descarga.
- Agenda real actualizada (cada 2 semanas).

## Notas legales (JNE)

El footer ya incluye la atribución "Página informativa de la candidatura de Nandy Córdova Morales" según lo conversado. Recordar a la campaña reportar el costo/existencia del sitio ante ONPE como gasto de campaña — es responsabilidad de ellos, no del equipo técnico.
