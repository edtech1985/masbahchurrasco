import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Main } from "./Routes";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import Cardapio from "../pages/Cardapio";
import History from "../pages/History";
import { ParallaxProvider } from "react-scroll-parallax";

export default function AppRouter() {
  return (
    <ParallaxProvider>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<History />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/sobre" element={<AboutUs />} />
            <Route path="/contato" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </ParallaxProvider>
  );
}
