import "./App.css";
import Header from "./Componnets/header/Header";
import { Routes, Route } from "react-router-dom";
import Trending from "./pages/trending/Trending";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
