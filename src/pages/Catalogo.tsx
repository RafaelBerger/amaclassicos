import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Catalogo.css";

import teste from "../assets/imagetest.png";

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

      <main className="catalog_section_container" id="catalogo">
        <h1>Catálogo</h1>
        <h3>Temos veiculos disponiveis ainda não restaurados</h3>

        <div className="catalog_content_container">
          <div className="catalog_card_container">
            <div className="card_image_half">
              <img src={teste} alt="" className="card_image" />
            </div>
            <div className="card_content_half">
              <h4>Toyota Yaris</h4>
              <div>
                <p>2019</p>
                <p>R$ 200,000,00</p>
                <p>40.000 KM</p>
              </div>
              <div className="button_container">
                <Link to="/detalhes" className="content_card_button">
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Catalogo;
