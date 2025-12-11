import "../Detalhes.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detalhes() {
  const location = useLocation();

  const images = [
    "https://us-west-2.graphassets.com/cmiz6nnmu04j707nafnnk16df/cmj0it7ur3wk907lp6ou6kebo",
    "https://us-west-2.graphassets.com/cmiz6nnmu04j707nafnnk16df/cmj0it7rv3jj107n3lw34hrfb",
    "https://us-west-2.graphassets.com/cmiz6nnmu04j707nafnnk16df/cmj0it7io3jin07n3gv8al39v",
  ];

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

      <main className="detalhes_layout">
        <div className="detalhes_container">
          {/* CARROSSEL + BOTAO ESQUERDA */}
          <div className="left_block">
            <a
              href="https://wa.me/5519982058008"
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
                {images.map((url, i) => (
                  <SwiperSlide key={i}>
                    <img
                      className="carrosel_img"
                      src={url}
                      alt={`slide-${i}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button className="btn_preco">R$: 200,000</button>
          </div>

          {/* LISTA DE INFORMACOES */}
          <div className="right_block">
            <div className="info_box">
              Marca/Modelo: Toyota Corolla asdasdasdassadasdsadsadsadasdasdasda{" "}
            </div>
            <div className="info_box">Ano: 2020</div>
            <div className="info_box">Motor: 6cc</div>
            <div className="info_box">Documentação: completa</div>
          </div>
        </div>
      </main>

      <Contact />
      <Footer />
    </>
  );
}

export default Detalhes;

{
  /* <div className="button_div">
  <a
    href="https://wa.me/5519982058008"
    target="_blank"
    rel="noopener noreferrer"
  >
    Enviar mensagem
  </a>
</div>; */
}
