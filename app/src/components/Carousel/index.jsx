import "./carousel.css";
import Slider from "react-slick";

function Carousel({ children }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
  };
  return (
    <Slider {...settings}>
      { children }
    </Slider>
  );
}

export default Carousel;