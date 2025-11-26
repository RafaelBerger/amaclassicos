import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarroselProps {
  images: string[];
}

export default function Carrosel({ images }: CarroselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, // importante
  };

  return (
    <div className="carrosel_container">
      <Slider {...settings}>
        {images.map((url, i) => (
          <div key={i} className="slide_item">
            <img src={url} alt={`Slide ${i}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
