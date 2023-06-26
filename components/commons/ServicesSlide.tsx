import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesCard from "./ServicesCard";
import NoServices from "./NoService";
import Service from "../home/Service";
interface SlideProps {
  slideShow: number;
  services: string[];
}
const ServicesSlide: React.FC<SlideProps> = ({ slideShow, services }) => {
  const settings = {
    speed: 500,
    slidesToShow: slideShow,
  };
  return (
    <Slider {...settings}>
      {services.map((service: string, index) => (
        <ServicesCard service={service} key={index} />
      ))}
    </Slider>
  );
};

export default ServicesSlide;
