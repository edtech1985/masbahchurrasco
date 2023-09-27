import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import Menu from "../pages/Menu";
import Place from "../pages/Place";
import { Main } from "./Routes";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casa" element={<Place />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/contato" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Main>
      <Footer />
    </Router>
  );
}
