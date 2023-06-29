import RecomendedDoctor from "./RecomendedDoctor"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Doctor } from "@/types/chat/service";
import { useRouter } from "next/router";
interface RecomendedDoctorListInterface {
    doctors:Doctor[]
}
const RecomendedDoctorList: React.FC<RecomendedDoctorListInterface> = ({doctors}) => {
    const router = useRouter()
  const doctorClickHandler = (id:string) =>{
    router.push(`/doctors/${id}`)
  }
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
            <div className="cursor-pointer p-2"  key={doctor.id} onClick={() => doctorClickHandler(doctor.id)}>
                <RecomendedDoctor doctor = {doctor}/>
            </div>
         ))}
        </Slider>
        </div>
    )

}
export default RecomendedDoctorList