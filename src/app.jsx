import { Routes, Route } from "react-router-dom";

import "./app.css";
import { Header } from "./components/header/header";
import { Trending } from "./pages/trending/trending";
import { Footer } from "./components/footer/footer";
import { Movies } from "./pages/movies/movies";
import { Series } from "./pages/series/series";
import { Search } from "./pages/search/search";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/movies-app" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
