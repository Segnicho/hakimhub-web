import { Doctor } from "@/types/chat/chat-types";
import Image from "next/image";
interface RecomendedDoctorProp{
    doctor:Doctor
}
const RecomendedDoctor: React.FC<RecomendedDoctorProp> = ({doctor}) => {
    return (
        <div data-testid="recomended-doctor-outer-div" className=" flex flex-col justify-center  items-center rounded-md shadow-md  m-2 p-3 ">
            <div className=' relative w-[3.5rem] h-[3.5rem] rounded-full  shadow-md'>
                <Image 
                className='object-cover rounded-full'
                alt='recomended hospital detail'
                fill
                src = {doctor.photoUrl}
                sizes='1'
                 />
            </div>
            <p className="capitalize text-center">{doctor.fullName}</p>
            <div>
            <p className="text-primary font-bold text-center border-t-2">{doctor.specialities && doctor.specialities[0]}</p>
            </div>

        </div>
    )
}
export default RecomendedDoctor;