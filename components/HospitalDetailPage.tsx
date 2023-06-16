// import { useRouter } from 'next/router'
// import Gallery from './Gallery'
// import DoctorsList from './DoctorsList'

// const HospitalDetailPage = () => {
//   const router = useRouter();

//   const handleOverviewClick = () => {
//     router.push('/hospital/[id]', `/hospital/${router.query.id}`);
//   };

//   const handleDoctorsClick = () => {
//     router.push('/hospital/[id]/doctors', `/hospital/${router.query.id}/doctors`);
//   };

//   const handleGalleryClick = () => {
//     router.push('/hospital/[id]/gallery', `/hospital/${router.query.id}/gallery`);
//   };

//   return (
//     <div>
//       {/* <h1>Hospital Detail Page</h1> */}
//       <nav className='grid grid-rows-1 grid-cols-3 w-full h-10 bg-white rounded-lg drop-shadow-md r-10 text-gray-500'>
//         <button onClick={handleOverviewClick} className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Overview</button>
//         <button onClick={handleDoctorsClick} className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Doctors</button>
//         <button onClick={handleGalleryClick} className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Gallery</button>
//       </nav>

//       {/* Render different content based on the current path */}
//       {/* {router.pathname === '/hospital/[id]' && <OverviewComponent />} */}
//       {router.pathname === '/hospital/[id]/doctors' && <DoctorsList />}
//       {router.pathname === '/hospital/[id]/gallery' && <Gallery />}
//     </div>
//   );
// };

// export default HospitalDetailPage;

// // const Nav = () => {
// //   return (
// //     <div className=''>
// //       <Link href="/page1">
// //         <div className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Over view</div>
// //       </Link>

// //       <Link href="/page2">
// //         <div className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Doctors</div>
// //       </Link>
// //       <Link href="/page2">
// //         <div className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'>Gallery</div>
// //       </Link>

// //         {/* <button className=''></button>
// //         <button className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'></button>
// //         <button className='hover:border-b-2 hover:border-blue-500 hover:text-blue-500 hover:font-extrabold'></button> */}
// //     </div>
// //   )
// // }

// // export default Nav