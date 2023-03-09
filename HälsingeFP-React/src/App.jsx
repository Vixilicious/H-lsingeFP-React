import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
