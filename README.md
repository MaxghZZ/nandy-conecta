# Nandy Conecta

Landing mobile-first de la candidatura de **Nandy Córdova Morales** a la alcaldía de Carabayllo (Renovación Popular), elecciones municipales 2026.

Sitio estático — HTML/CSS/JS plano, sin backend, sin build step. Navegación por 5 tabs (bottom nav): Inicio, Nandy, Propuestas, Eventos, Redes. Cada tab tiene su propio hash de URL (`#inicio`, `#nandy`, `#propuestas`, `#eventos`, `#redes`) para poder apuntar códigos QR o enlaces directamente a una sección — no hay tracking asociado, es solo navegación.

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

- Número de WhatsApp de contacto general → `DATA.candidata.whatsapp`
- Próximo mitin → `DATA.proximoMitin` (el botón "Ver detalles" solo aparece si `link` no es `null`)
- Música oficial de campaña → `DATA.campaignMusic` (mientras sea `null`, el reproductor no se muestra; para activarlo: `{ titulo: "...", src: "ruta/al/archivo.mp3" }`)
- Trayectoria de Nandy → `DATA.trayectoria`
- Las 5 propuestas (Seguridad, Iluminación y Saneamiento Físico-Legal, Pistas y Obras Emblemáticas, Desarrollo Humano, Parques y Limpieza) → `DATA.propuestas`
- Plan de gobierno en PDF → `DATA.planGobiernoUrl` (el botón de descarga solo aparece si no es `null`)
- Zonas/sectores de Carabayllo → `DATA.zonas`
- Actividades → `DATA.actividades.caminatasRealizadas` (por zona, con video/enlace) y `DATA.actividades.proximas` (últimas 2 semanas + cierre de campaña, usar `esCierre: true` en la actividad de cierre). Mientras los arrays estén vacíos, la interfaz muestra un estado "sin actividades publicadas todavía" — no agregar eventos de ejemplo como si fueran reales.
- Links JNE/ONPE → `DATA.electoral`
- Redes sociales → `DATA.redes.facebook` / `DATA.redes.tiktok` (por ahora solo estas dos; mientras el valor sea `null`, esa red no se muestra — nunca se generan enlaces falsos)
- Footer → `DATA.footer`

Cada campo marcado con `// TODO` en `data.js` es un dato real pendiente de la campaña.

No hay funcionalidades de voluntariado, formularios de participación ni grupos de WhatsApp por zona en esta versión — están fuera del alcance aprobado.

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
- Número de WhatsApp real de campaña.
- Archivo de audio de la música oficial de campaña (`DATA.campaignMusic`).
- Redacción definitiva de las 5 propuestas (hoy tienen texto neutral "pendiente de redacción final").
- Link real al PDF del plan de gobierno.
- Zonas/sectores reales de Carabayllo.
- Caminatas realizadas por zona, con video o enlace (`DATA.actividades.caminatasRealizadas`).
- Próximas actividades de las últimas 2 semanas de campaña y la actividad de cierre (`DATA.actividades.proximas`).
- Links exactos de verificación JNE y consulta de local de votación ONPE.
- URLs reales y confirmadas de Facebook y TikTok (`DATA.redes`).

## Notas legales (JNE)

El footer ya incluye la atribución "Página informativa de la candidatura de Nandy Córdova Morales" según lo conversado. Recordar a la campaña reportar el costo/existencia del sitio ante ONPE como gasto de campaña — es responsabilidad de ellos, no del equipo técnico.
