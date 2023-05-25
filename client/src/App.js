import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  About, Contact, Location, Login, SignUp, Settings, Cart, Modal
} from "./Exports/exportsFile.js";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;