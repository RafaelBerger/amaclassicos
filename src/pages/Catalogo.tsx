import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Catalogo.css";

function Catalogo() {
  const location = useLocation();
  console.log(location.hash.substring(1));

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  //TODO: CONSERTAR ROLAMENTO VERTICAL DA PAGINA, VERIFICAR SE TEM ALGO INDO MUITO PARA A DIREITA SE NAO SO OVERFLOW

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
