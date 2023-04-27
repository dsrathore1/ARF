import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Location from "./Pages/Location";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Settings from "./Pages/Settings";
import Modal from "./Components/Modal";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;