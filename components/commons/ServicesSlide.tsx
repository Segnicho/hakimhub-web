import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesCard from "./ServicesCard";
interface ArrowProps {
  className: string;
  onClick: () => void;
  isForward: boolean;
}
const Arrow: React.FC<ArrowProps> = (ArrowProps) => {
  const { className, onClick, isForward } = ArrowProps;
  return isForward ? (
    <div
      className={className}
      style={{
        background: "#f2f2f2",
        borderRadius: "50%",
        marginRight: "18px",
      }}
      onClick={onClick}
    ></div>
  ) : (
    <div
      className={className}
      style={{
        background: "#f2f2f2",
        borderRadius: "50%",
        marginLeft: "13px",
      }}
      onClick={onClick}
    ></div>
  );
};
interface SlideProps {
  slideShow: number;
  services: string[];
}
const ServicesSlide: React.FC<SlideProps> = ({ slideShow, services }) => {
  const settings = {
    speed: 500,
    slidesToShow: slideShow,
    nextArrow: (
      <Arrow className="" onClick={function (): void {}} isForward={true} />
    ),
    prevArrow: (
      <Arrow className={""} onClick={function (): void {}} isForward={false} />
    ),
  };
  return (
    <Slider {...settings} className="text-primary-text -ml-4">
      {services.map((service: string, index) => (
        <ServicesCard service={service} key={index} />
      ))}
    </Slider>
  );
};

export default ServicesSlide;
