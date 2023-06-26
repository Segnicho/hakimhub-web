import Image from 'next/image'
import Link from 'next/link';
const NoData: React.FC = () => {
  return (
    <div className='p-10 bg-white'>
      <div className="flex flex-wrap mb-10">
        <div className='w-1/3 flex flex-wrap justify-center'>
            <Image src={'/imgs/hospital/doctor.png'} alt={''} width={200} height={200} className=''/>
        </div>
        <div className='w-2/3 p-5'>
          <span className='font-bold text-7xl text-black'>Oops</span>
          <span className='font-bold text-3xl text-black flex flex-wrap mb-4 mt-4'>Seems like the hospital you&apos;re looking doesn&apos;t exist in our platform, </span>
          <span className='text-3xl text-black'>But if you want us to find you other alternatives based on your illness <Link href={'/hospitals'} className='text-primary font-bold'>Click here</Link></span>
        </div>
      </div>
      <span className='text-5xl font-bold text-black flex flex-wrap justify-center'>Open, Near by Hopitals </span>
      <div></div>
    </div>
  );
};


export default NoData;