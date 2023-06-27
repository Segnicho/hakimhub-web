import RecomendedDoctor from "./RecomendedDoctor"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Doctor } from "@/types/chat/service";
interface RecomendedDoctorListInterface {
    doctors:Doctor[]
}
const RecomendedDoctorList: React.FC<RecomendedDoctorListInterface> = ({doctors}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(doctors.length, 3),
        slidesToScroll: 1
      };
    return (
        <div>
          
        <Slider {...settings}>
         {doctors.map((doctor:Doctor) => (
          <RecomendedDoctor doctor = {doctor} key={doctor.id}/>
         ))}
        </Slider>
          
          
        </div>
    )

}
export default RecomendedDoctorList