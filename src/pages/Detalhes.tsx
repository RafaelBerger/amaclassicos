// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css'
import "../Detalhes.css";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import teste from "../assets/imagetest.png";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detalhes() {
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

      <main className="details_section">
        <div>
          <img src={teste} alt="" className="details_image" />
        </div>

        <div className="details_content_container">
          <div className="main_details">
            <h3>Toyota Yaris</h3>
            <p>R$ 200,000,00</p>
          </div>
          <div className="further_details">
            <div className="details_content_block">
              <h4>Ano</h4>
              <p>1945</p>
            </div>

            <div className="details_content_block">
              <h4>Modelo</h4>
              <p>Yaris XEI</p>
            </div>
            <div className="details_content_block">
              <h4>KM</h4>
              <p>40.000</p>
            </div>
            <div className="details_content_block">
              <h4>Cor</h4>
              <p>Laranja</p>
            </div>
            <div className="details_content_block">
              <h4>Combustivel</h4>
              <p>Etanol</p>
            </div>
            <div className="details_content_block">
              <h4>Cambio</h4>
              <p>Manual</p>
            </div>
            <div className="details_content_block">
              <h4>Teto solar</h4>
              <p>Sim</p>
            </div>
          </div>
          <div className="button_div">
            <a
              href="https://wa.me/5519982058008"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar mensagem
            </a>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </>
  );
}

export default Detalhes;
