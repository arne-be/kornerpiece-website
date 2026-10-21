# kornerpiece Website

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build the project for production (outputs to `dist` folder):

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/     # React components (NavBar, Footer, Projects, etc.)
│   ├── assets/         # Images and static assets
│   ├── constants/      # Constants and configuration
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static files
│   ├── imprint.html    # Impressum page
│   ├── datenschutz.html # Privacy policy page
│   └── style.css       # Styles for static pages
└── dist/               # Production build output
```

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Styled Components** - Additional styling

## 📄 Legal Pages

The website includes two static HTML pages:
- `/imprint.html` - Impressum (legal notice)
- `/datenschutz.html` - Datenschutzerklärung (privacy policy)

These pages use the same styling as the main site via `public/style.css`.
