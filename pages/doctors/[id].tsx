import React from 'react'
import Image from 'next/image'
import {BsBagFill} from "react-icons/bs"
function DoctorDetail() {
    return (
        <div className='md:flex  p-12 gap-16'>
            <div className='min-w-[40%]  flex flex-col items-center justify-items-center '>
                <div className=' relative w-[100vw]  md:w-[30vw] h-[20rem] rounded-[2rem] shadow-md'>
                <Image 
                className='object-cover rounded-[2rem]'
                alt='Doctor detail'
                fill
                src = '/imgs/doctor-detail/doctor-detail.png'
                sizes='1'
                 />
                </div>
            
                <p className='pt-16 text-3xl font-extrabold'>Dr.Andus huda</p>
                <p className='font-semibold text-xl capitalize'>tooth spexialist</p>
                <p className='font-semibold text-xl capitalize'>black lion hostipal</p>
                <div className='flex items-center gap-2 pt-3 pb-5'>
                <BsBagFill className='text-primary items-center text-xl justify-end'/>
                <p className='font-semibold text-2xl capitalize  '><span className='text-primary font-extrabold'> +3 years </span>experience</p>
                </div>

            </div>
            <div>
                <h1 className=' text-3xl font-bold pb-8'>Biography</h1>
                <p className='max-w-[700px] text-xl font-normal text-[#8B8B8B]  '>Madison Blackstone is a director of brand marketing, 
                    with experience managing global teams and multi-million-dollar
                     campaigns. Her background in brand strategy, visual design, and 
                     account management inform her mindful but competitive approach. 
                     Madison is fueled by her passion for understanding the nuances of
                      cross-cultural advertising. Madison Blackstone is a director of 
                      brand marketing, with experience managing global teams and multi
                      -million-dollar campaigns. Her background in brand strategy, vis
                      ual design, and account management inform her mindful but competitive
                       approach. Madison is fueled by her passion for understanding the nuances 
                       of cross-cultural advertising. </p>
                <h1 className='text-3xl font-bold pt-4 pb-8'>Education</h1>
                
                <div className='sm:flex justify-between'>
                <div className='sm:flex text-xl gap-6 font-normal'>
                    <div className='relative w-[1.5rem] h-[1.5rem] rounded-full pt-6 ' >
                        <Image
                        sizes='1'
                        className='rounded-full '
                        alt = 'Education'
                        fill
                        src = "/imgs/doctor-detail/Addis_Ababa_University_logo.png" />
                        
                    </div>
                    <div>
                        <p>Bachelor of medicne</p>
                        <p className="text-sm capitalize pt-5 text-lightblack">Addis Ababa University</p>
                    </div>
                    
                </div>
                    <div className='justify-self-end'>
                        <p>oct 2016 - jun 2022</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DoctorDetail