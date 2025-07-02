# Netflix Clone

A Netflix-inspired web application built with React, Vite, and Tailwind CSS. This project demonstrates a modern, responsive UI and basic movie browsing functionality using the TMDB API.

## Features

- Responsive Netflix-like UI
- Browse trending movies and genres
- Authentication (login/signup UI)
- Movie details and play container
- Modular React component structure
- Tailwind CSS for styling
- React Router for navigation

## Project Structure

```
netflix/
├── public/
├── src/
│   ├── assets/           # Images and icons
│   ├── components/       # Reusable UI components
│   ├── conf/             # Configuration files
│   ├── pages/            # Page components (MainPage, PlayContainer, etc.)
│   ├── store/            # State management (auth, store.js)
│   ├── TMDB/             # API services for TMDB
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd netflix
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Configuration
- TMDB API keys and other configuration can be set in `src/conf/conf.js`.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Folder Overview
- `components/` — Header, Footer, Hero page, Trending section, etc.
- `pages/` — Main page, Play container, and routing
- `store/` — State management (auth, store.js)
- `TMDB/` — API service logic

## License

This project is for educational purposes only and is not affiliated with Netflix.
