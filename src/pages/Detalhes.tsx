import "../Detalhes.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import numero1 from "../assets/chevrolet/1.jpeg";
import numero2 from "../assets/chevrolet/2.jpeg";
import numero3 from "../assets/chevrolet/3.jpeg";
import numero4 from "../assets/chevrolet/4.jpeg";
import numero5 from "../assets/chevrolet/5.jpeg";
import numero6 from "../assets/chevrolet/6.jpeg";
import numero7 from "../assets/chevrolet/7.jpeg";
import numero8 from "../assets/chevrolet/8.jpeg";
import numero9 from "../assets/chevrolet/9.jpeg";
import numero10 from "../assets/chevrolet/10.jpeg";
import numero11 from "../assets/chevrolet/11.jpeg";
import numero12 from "../assets/chevrolet/12.jpeg";
import numero13 from "../assets/chevrolet/13.jpeg";
import numero14 from "../assets/chevrolet/14.jpeg";
import numero15 from "../assets/chevrolet/15.jpeg";
import numero16 from "../assets/chevrolet/16.jpeg";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detalhes() {
  const location = useLocation();

  // const images = [
  //   "https://avatars.githubusercontent.com/u/84355579?v=4",
  //   "https://avatars.githubusercontent.com/u/68913110?v=4",
  //   "https://avatars.githubusercontent.com/u/59837027?v=4",
  // ];

  const images = [
    numero16,
    numero1,
    numero2,
    numero3,
    numero4,
    numero5,
    numero6,
    numero7,
    numero8,
    numero9,
    numero10,
    numero11,
    numero12,
    numero13,
    numero14,
    numero15,
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

      <main className="details_section">
        <div className="details_content_container">
          <div>
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
                  <SwiperSlide key={i} id="swiper_slide">
                    <img
                      className="carrosel_img"
                      src={url}
                      alt={`slide-${i}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div>
            <div className="further_details">
              <div className="details_content_block">
                <p>
                  <b>Marca:</b> Chevrolet
                </p>
              </div>

              <div className="details_content_block">
                <p>
                  <b>Modelo:</b> FleetMaster
                </p>
              </div>
              <div className="details_content_block">
                <p>
                  <b>Ano:</b> 1947
                </p>
              </div>
              <div className="details_content_block">
                <p>
                  <b>Motor:</b> 6cc Original
                </p>
              </div>
              <div className="details_content_block">
                <p>
                  <b>Câmbio:</b> Manual
                </p>
              </div>
              <div className="details_content_block">
                <p>
                  <b>Preço:</b> R$ 200,000,000
                </p>
              </div>
              <div className="details_content_block">
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
