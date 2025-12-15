import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Catalogo.css";

import { getCars, getInfos } from "../api/queries";

function Catalogo() {
  const location = useLocation();

  const [cars, setCars] = useState<Car[]>([]);
  const [infos, setInfos] = useState<Infos | null>(null);

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }

    getCars().then(setCars);
    getInfos().then(setInfos);
  }, [location]);

  console.log(cars);
  return (
    <>
      <Navbar />

      <main className="catalog_section_container" id="catalogo">
        <h1>Catálogo</h1>
        <h3>{infos?.aviso ?? ""}</h3>

        <div className="catalog_content_container">
          {cars.map((car) => (
            <Link
              key={car.id}
              to={`/detalhes/${car?.slugDoCarro}`}
              className="ancora"
            >
              <div className="catalog_card_container">
                <div className="card_image_half">
                  <img src={car.fotos[0].url} alt="" className="card_image" />
                </div>
                <div className="card_content_half">
                  <h4>{car.nomeDoCarro}</h4>
                  <div>
                    <p>{car.ano}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Catalogo;
