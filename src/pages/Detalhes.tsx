import "../Detalhes.css";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarBySlug, getInfos } from "../api/queries";
import { formatPriceBR } from "../utils/formatPrice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Detalhes() {
  const location = useLocation();
  const { slug } = useParams<{ slug: string }>();

  const [carBySlug, setCarBySlug] = useState<Car | null>(null);
  const [infos, setInfos] = useState<Infos | null>(null);

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }

    if (slug) {
      getCarBySlug(slug).then(setCarBySlug);
    }

    getInfos().then(setInfos);
  }, [location, slug]);

  if (!carBySlug) {
    return (
      <div className="loading_container">
        <div className="spinner" />
        <p>Carregando veículo...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="detalhes_layout">
        <div className="detalhes_container">
          {/* CARROSSEL + BOTAO ESQUERDA */}
          <div className="left_block">
            <a
              href={`https://wa.me/${infos?.numeroDoWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn_saiba"
            >
              Saiba mais
            </a>

            <div className="carrosel_wrapper">
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={10}
                slidesPerView={1}
                className="swiper_container"
              >
                {carBySlug?.fotos.map((url, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="carrosel_img"
                      src={url.url}
                      alt={`slide-${i}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="btn_preco">
              R$: {formatPriceBR(carBySlug?.preco)}
            </div>
          </div>

          {/* LISTA DE INFORMACOES */}
          <div className="right_block">
            <div className="info_box">
              Marca/Modelo: {carBySlug?.nomeDoCarro}
            </div>
            <div className="info_box">Ano: {carBySlug?.ano}</div>
            <div className="info_box">Motor: {carBySlug?.motor}</div>
            <div className="info_box">
              Documentação: {carBySlug?.documentacao}
            </div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </>
  );
}

export default Detalhes;
