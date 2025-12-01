import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Catalogo.css";

import chevroletFleet from "../assets/chevrolet-fleetmaster.jpeg";
import f1000 from "../assets/f1000.jpeg";
import fiat100 from "../assets/fiat-100.jpeg";
import ford28 from "../assets/ford-28.jpeg";
import fordBolha from "../assets/ford-bolha.jpeg";
import importadoMercedes from "../assets/importado-mercedes.jpeg";
import jeepAco from "../assets/jeep-aco.jpeg";
import martaRocha from "../assets/marta-rocha.jpeg";
import mercury from "../assets/mercury.jpeg";
import mustang from "../assets/mustang.jpeg";

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
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={mercury} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>MERCURY</h4>
                <div>
                  <p>1957</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={martaRocha} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>CAMIONETE MARTA ROCHA (preta fosca)</h4>
                <div>
                  <p>1956</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>

          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={fordBolha} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>
                  CAMIONETE FORD CABINE ABERTA com desenhos de bolhas de sabão
                </h4>
                <div>
                  <p>1995</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={mustang} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>MUSTANG VERMELHO</h4>
                <div>
                  <p>1992</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>

          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={jeepAco} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>JEEP com capota de aço</h4>
                <div>
                  <p>1964</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={f1000} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>FORD F-1000 (Furgão de madeira)</h4>
                <div>
                  <p>1985</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={ford28} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>CAMIONETE FORD 28</h4>
                <div>
                  <p>1928</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={importadoMercedes} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>IMPORTADO MERCEDEZ BENZ</h4>
                <div>
                  <p>1958</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={fiat100} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>FIAT 100E</h4>
                <div>
                  <p>1973</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detalhes">
            <div className="catalog_card_container">
              <div className="card_image_half">
                <img src={chevroletFleet} alt="" className="card_image" />
              </div>
              <div className="card_content_half">
                <h4>IMPORTADO CHEVROLET FLEETMASTER 47</h4>
                <div>
                  <p>1947</p>
                  {/* <p>R$ 18.900,000</p> */}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Catalogo;
