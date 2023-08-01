import Image from "next/image"
import { Institution } from "@/types/chat/chat-types";
import RecomendedDoctorList from "./RecomendedDoctorList";
import { useRouter } from "next/router";
interface RecomendedHospitalProp{
  institution : Institution
}
const RecomendedHospital: React.FC<RecomendedHospitalProp> = ({institution}) => {
  const router = useRouter()
  const hospitalClickHandler = (id:string) =>{
    router.push(`/hospitals/${id}`)
  }
  
  return (
    <div className=" shadow-sm mb-5 border p-3 border-[rgb(248,246,246)] rounded-md px-2">
      <div onClick={() => hospitalClickHandler(institution.id)} className="flex items-center gap-3">
              <div className=' relative w-[4rem] h-[4rem] rounded-full  shadow-md'>
                <Image 
                className='object-cover rounded-full'
                alt='recomended hospital detail image'
                fill
                src = {institution.bannerUrl}
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

      <div className="mt-3">
        <p className="font-semibold text-lg text-secondary-text py-3">Doctors</p>
        <RecomendedDoctorList doctors = {institution.doctors} />   
      </div>
      </div>
  )
}

export default RecomendedHospital