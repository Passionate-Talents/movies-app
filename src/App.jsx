import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./Componnets/header/Header";
import { Trending } from "./pages/trending/trending";
import { Footer } from "./Componnets/footer/footer";
import { Movies } from "./pages/trending/movies/movies";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
