import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, Products, Contact } from "./pages";
import { NasaPage } from "./nasaPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="portfolio/nasa" element={<NasaPage />} />
      </Routes>
    </div>
  );
}

export default App;
