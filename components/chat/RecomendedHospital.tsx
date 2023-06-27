import Image from "next/image"
import { Doctor,Institution } from "@/types/chat/service";
import RecomendedDoctorList from "./RecomendedDoctorList";
interface RecomendedHospitalInterface{
  institution : Institution
}
const RecomendedHospital: React.FC<RecomendedHospitalInterface> = ({institution}) => {
  
  return (
    <div className=" shadow-md rounded-md px-2">
      <div className="flex items-center gap-3">
              <div className=' relative w-[4rem] h-[4rem] rounded-full  shadow-md'>
                <Image 
                className='object-cover rounded-full'
                alt='recomended hospital detail'
                fill
                src = '/imgs/doctor-detail/doctor-detail.png'
                sizes='1'
                 />
                </div>
        <div>
          <p className="font-bold text-xl text-primary capitalize">
            {institution.institutionName}
          </p>
          <p className="text-sm text-secondary-text">
            {institution.summary.slice(0,60)}...
          </p>
        </div>
      </div>

      <div className=" mt-3">
        <p className="font-semibold text-lg">Doctors</p>
        <RecomendedDoctorList doctors = {institution.doctors} />   
      </div>
      </div>
  )
}

export default RecomendedHospital