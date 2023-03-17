import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Tjanster from "./Components/Tjanster/Tjanster";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/tjanster" element={<Tjanster />} />
        <Route path="/tjanster" element={<Tjanster />} />
      </Routes>
    </div>
  );
}

export default App;
