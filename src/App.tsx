// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "./ui/pages/Home";
import { Navbar } from "./ui/organisms/NavBar";
import { PopularMovies } from "./ui/pages/PopularMovies";
import { ActionMovies } from "./ui/pages/ActionMovies";
import { AnimationMovies } from "./ui/pages/AnimationMovies";
import { TerrorMovies } from "./ui/pages/TerrorMovies";
import { UpcomingMovies } from "./ui/pages/UpcomingMovies";
import { Favorites } from "./ui/pages/Favorites";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/action" element={<ActionMovies />} />
          <Route path="/animation" element={<AnimationMovies />} />
          <Route path="/horror" element={<TerrorMovies />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
        </Routes>
      </main>
    </div>
  );
}
