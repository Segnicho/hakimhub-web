import Image from "next/image";

const RecomendedDoctors: React.FC = () => {
    return (
        <div className=" flex flex-col justify-center items-center rounded-md w-1/3 ">
            <div className=' relative w-[3rem] h-[3rem] rounded-full  shadow-md'>
                <Image 
                className='object-cover rounded-full'
                alt='recomended hospital detail'
                fill
                src = '/imgs/doctor-detail/doctor-detail.png'
                sizes='1'
                 />
            </div>
            <p>John Doe</p>
            <div>
            <p className="text-primary font-bold">General manager</p>
            </div>

        </div>
    )
}
export default RecomendedDoctors;