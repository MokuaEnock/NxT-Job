import "./App.css";
import Landing from "./components/Home/landing";
import Navbar from "./components/navbar";
import SeekerView from "./components/seeker/seeker";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Recruiter from "./components/rectruiter/recruiter";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/seeker" element={<SeekerView />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
