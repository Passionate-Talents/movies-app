import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header/Header";
import { Trending } from "./pages/trending/Trending";
import { Footer } from "./components/footer/footer";
import { Movies } from "./pages/movies/movies";
import { Series } from "./pages/series/series";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/movies-app" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
