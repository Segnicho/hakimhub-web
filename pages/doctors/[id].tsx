import React from 'react'
import Image from 'next/image'
import {BsBagFill} from "react-icons/bs"
import { useRouter } from 'next/router';
import { useGetDoctorByIdQuery } from "@/store/features/doctor-detail";
import { Loading } from '@/components';
function DoctorDetail() {
    const router = useRouter();
    const  id = router.query.id as string;
    
    const { data: doctor, error, isLoading } = useGetDoctorByIdQuery(id)
    if (isLoading){
        return (
         <Loading/>
        );
    }
    
    if (error){
        return <div>
        <div className="flex items-center justify-center h-screen ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <span className="ml-2 text-red-500 text-2xl font-bold">Error occurred. Please try again.</span>
        </div>  
      </div>;
    }
    return (
        <div className='md:flex  p-12 gap-16 '>
            <div className='min-w-[40%]  flex flex-col items-center justify-items-center '>
                <div className=' relative w-[100vw]  md:w-[30vw] h-[20rem] rounded-[2rem] shadow-md'>
                <Image 
                className='object-cover rounded-[2rem]'
                alt='Doctor detail'
                fill
                src = {doctor?.value?.photoUrl as string}
                sizes='1'
                priority
                 />
                </div>
            
                <p className='pt-16 text-3xl font-extrabold'>{doctor?.value?.fullName}</p>
                {doctor?.value?.specialities?.map((specialty:string, index:number) =>{
                   return ( <p className='font-semibold text-xl capitalize' key={index}>{specialty}</p>)       
                })}
                <p className='font-semibold text-xl capitalize'>{doctor?.value?.mainInstitutionName}</p>
                <div className='flex items-center gap-2 pt-3 pb-5'>
                <BsBagFill className='text-primary items-center text-xl justify-end'/>
                <p className='font-semibold text-2xl capitalize  '><span className='text-primary font-extrabold'> +{doctor?.value?.yearsOfExperience} years </span>experience</p>
                </div>

            </div>
            <div>
                <h1 className=' text-3xl font-bold pb-8'>Biography</h1>
                {
                    doctor?.value?.about?
                    <p className='max-w-[700px] text-xl font-normal text-[#8B8B8B]  '>{doctor?.value?.about} </p>:
                    <p className='max-w-[700px] text-xl font-normal text-[#f5baba]  '>No current information </p>

                }
                <p className='max-w-[700px] text-xl font-normal text-[#8B8B8B]  '>{doctor?.value?.about} </p>
                <h1 className='text-3xl font-bold pt-4 pb-8'>Education</h1>
                {doctor?.value?.educations.length !== 0 ?
                    doctor?.value?.educations.map(({EducationInstitutionLogoUrl,Degree,EducationInstitution,StartYear,GraduationYear}:Education,index:number) =>{
                        return (

                <div className='sm:flex justify-between gap-9' key={index}>
                <div className='sm:flex text-xl gap-6 font-normal'>
                    <div className='relative w-[1.5rem] h-[1.5rem] rounded-full pt-6 ' >
                        <Image
                        sizes='1'
                        className='rounded-full '
                        alt = 'Education'
                        fill
                        src = {EducationInstitutionLogoUrl}
                        priority
                         />
                        
                    </div>
                    <div>
                        <p>{Degree}</p>
                        <p className="text-sm capitalize pt-5 text-lightblack">{EducationInstitution}</p>
                    </div>
                    
                </div>
                    <div className='justify-self-end'>
                        <p>{StartYear?.toLocaleString()} - {GraduationYear?.toLocaleString()}</p>
                    </div>
                </div>
                        )
                    }):
                    <p className='max-w-[700px] text-xl font-normal text-[#f5baba]  '>No current information </p>
                }
                

            </div>
        </div>
    )
}

export default DoctorDetail