# 📰 Dragon News Portal

A modern, responsive, and dynamic news portal web application built with **React**, **React Router**, **Tailwind CSS**, **DaisyUI**, and **Firebase Authentication**.

Live Demo: [https://fir-practice-project-1-6bf28.web.app](https://fir-practice-project-1-6bf28.web.app)

---

## 📌 Features

* **Dynamic News Categorization:** Filter news articles seamlessly by category (e.g., All News, Breaking News, Sports, International, Entertainment).
* **Live News Marquee:** Dynamic breaking news ticker fetching and displaying top headlines in real-time.
* **Authentication System:** Secure user authentication powered by Firebase (Email/Password, Google Sign-In, GitHub Sign-In).
* **Protected Routes:** Restricts detailed news views (`NewsDetails`) to authenticated users with seamless redirection back to the intended page after login.
* **Fully Responsive Design:** Optimized mobile-first layout with smooth horizontal category scrolling, responsive drawers/navbars, and responsive grids for tablet and desktop displays.
* **Clean UI/UX:** Styled using modern UI standards, custom typography, and proportional icon layouts.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router (v7)
* **Styling:** Tailwind CSS, DaisyUI, React Icons
* **Ticker Animation:** `react-fast-marquee`
* **Authentication & Hosting:** Firebase Auth, Firebase Hosting
* **Date Utilities:** `date-fns`

---

## 📂 Project Structure

```text
src/
├── assets/         # Static assets and logo image assets
├── Componenets/    # Shared layout components (Navbar, Header, Marque, Left/Right Containers, Cards)
├── Provider/       # AuthProvider context for Firebase state management
├── Routes/         # React Router configurations and PrivateRoute protection logic
├── main.jsx        # App entry point
└── index.css       # Tailwind CSS imports and global styles