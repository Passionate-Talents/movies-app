import "./App.css";
import { Header } from "./Componnets/header/Header";
import { Trending } from "./pages/trending/Trending";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/movies-app" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
