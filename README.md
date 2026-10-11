# Haven Cebu Static Website - Organized Version

This is the same Cebu-only design, reorganized into smaller files so it is easier to edit.
There is still no database or backend.

## Folder structure

```text
HavenCebu_OrganizedDesign/
├─ index.html
├─ README.md
├─ assets/
│  └─ images/
├─ css/
│  ├─ main.css
│  ├─ variables.css
│  ├─ base.css
│  ├─ navigation.css
│  ├─ hero.css
│  ├─ about.css
│  ├─ events.css
│  ├─ faq.css
│  ├─ register.css
│  ├─ footer.css
│  └─ responsive.css
└─ js/
   ├─ main.js
   ├─ config.js
   ├─ components/
   │  ├─ navigation.js
   │  ├─ hero.js
   │  ├─ about.js
   │  ├─ events.js
   │  ├─ faq.js
   │  ├─ register.js
   │  └─ footer.js
   └─ ui/
      ├─ navigation.js
      ├─ registration.js
      └─ toast.js
```

## Where to edit common information

Edit `js/config.js` for:

- City name
- Event name
- Event date
- Location
- Attendee target
- Registration URL

## Where to edit page sections

Each major page section has its own file under `js/components/`.
For example:

- Hero: `js/components/hero.js`
- About / experience: `js/components/about.js`
- Past events: `js/components/events.js`
- FAQ: `js/components/faq.js`
- Registration: `js/components/register.js`
- Footer: `js/components/footer.js`

## Where to edit design

CSS is split by section under `css/`.
Global colors and fonts are in `css/variables.css`.
Mobile rules are in `css/responsive.css`.

## Running the site locally

Because the JavaScript is organized as browser modules, open the site through a small local web server instead of double-clicking `index.html`.

Easy options:

### VS Code
Use the Live Server extension and open `index.html` with Live Server.

### Python
From this folder, run:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Database

None. This build is intentionally frontend-only.
