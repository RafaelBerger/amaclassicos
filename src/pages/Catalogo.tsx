import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Catalogo.css";

function Catalogo() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <main className="teste" id="catalogo">
        asdsadsadASDASDASDASDASasdasdasd
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Catalogo;
