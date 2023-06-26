import Image from "next/image"
import RecomendedDoctors from "./RecomendedDoctors"
const RecomendedHospital: React.FC = () => {
  return (
    <div className="mt-10">
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
            Tikur anbessa
          </p>
          <p className="text-sm text-secondary-text">
          Black Lion (Tikur Anbessa) Specialized Hospital, School of Medicine, College of Health Sciences...
          </p>

        </div>
      </div>

      <div className=" mt-3">
        <p className="font-semibold text-lg">Doctors</p>
        
        <div>
          <RecomendedDoctors/>
          
        </div>
      </div>
      </div>
  )
}

export default RecomendedHospital