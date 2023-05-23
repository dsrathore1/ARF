import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Location from "./Pages/Location";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";
// import Settings from "./Pages/Settings";
// import Cart from "./Components/Cart.jsx";
// import Modal from "./Components/Modal";
// import LandingPage from "./Pages/LandingPage.jsx";

import {
  Home, About, Contact, Location, Login, SignUp, Settings, Cart, Modal, LandingPage
} from "./Exports/exportsFile.js";

import { auth } from "./firebaseConfig.js";

function App() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setName(user.displayName);
        setEmail(user.email);
      } else {
        setName("");
        setEmail("");
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home name={name} email={email} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;