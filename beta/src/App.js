import "./App.css";
import Landing from "./components/Home/landing";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Landing />
      {/* <Routes>
        <Route path="/login" />
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
