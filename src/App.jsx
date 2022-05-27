import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./Componnets/header/Header";
import { Trending } from "./pages/trending/Trending";
import { Footer } from "./footer/footer";

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
