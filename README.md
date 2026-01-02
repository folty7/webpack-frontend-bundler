# Unceasing Solutions Front-End Core

Front-end core setup pre vývoj moderných webových aplikácií s podporou pre SCSS, JavaScript modulov a optimalizáciu assets.

## Technológie

### Build Tools
- **Webpack 5** - bundling a optimalizácia assets
- **Babel** - transpilácia moderného JavaScriptu
- **PostCSS** - spracovanie CSS s autoprefixer a nested syntaxou
- **Sass/SCSS** - preprocesing CSS

### JavaScript Knižnice
- Bootstrap 5.3.1
- Swiper 10.2.0 - moderný slider/carousel
- Splide 4.1.4 - alternatívny slider
- Fancybox (@fancyapps/ui 5.0.22) - lightbox galériа
- Atropos 2.0.2 - 3D parallax efekty
- Vanilla Tilt 1.8.1 - tilt efekty
- Animate.css 4.1.1 - animácie
- Velocity Animate 1.5.2 - výkonné animácie

### Optimalizácia
- Image optimization (imagemin s podporou pre JPG, PNG, GIF, SVG)
- CSS minimalizácia
- JavaScript minifikácia (Terser)

## Štruktúra projektu

```
FE-core/
├── assets/
│   ├── src/
│   │   ├── js/          # JavaScript zdrojové súbory
│   │   ├── scss/        # SCSS zdrojové súbory
│   │   ├── img/         # Obrázky
│   │   └── vendors/     # Vendor skripty
│   └── dist/            # Kompilované súbory
│       ├── js/
│       └── css/
├── index.html           # HTML template
├── webpack.config.js    # Webpack konfigurácia
├── postcss.config.js    # PostCSS konfigurácia
└── package.json
```

## Inštalácia

```bash
npm install
```

## Skripty

### Build
Skompiluje a optimalizuje všetky assets (JS, CSS, obrázky):

```bash
npm run build
```

### Lint
Spustí ESLint na JavaScript súboroch:

```bash
npm run lint
```

## Použitie

1. Umiestnite vaše zdrojové súbory do `assets/src/`:
   - JavaScript: `assets/src/js/`
   - SCSS: `assets/src/scss/`
   - Obrázky: `assets/src/img/`

2. Spustite build proces:
   ```bash
   npm run build
   ```

3. Skompilované súbory sa vygenerujú do `assets/dist/`

## HTML Template

V `index.html` sú referencované kompilované súbory:
- CSS: `assets/dist/css/main.min.css`
- JS: `assets/dist/js/main.min.js`

Template používa HTML Webpack Plugin pre dynamické vloženie title a assets.

## Autor

Andrej Folta

## Licencia

Proprietary - Unceasing Solutions
