import Image from 'next/image';
import gallery from './../public/data/gallery.json';

const Gallery = () => {
  const columns = Math.ceil(gallery.Photos.length / 3); 
  return (
    <div className='my-4 mx-6'>
      <h3 className='text-3xl font-bold mx-4'>Gallery</h3>
    <div className={`grid grid-cols-3 grid-rows-${columns}`}>
      {gallery.Photos.map((photo, index) => (
        <div
          key={index}
          className={`relative w-full rounded-lg ${index % 2 === 0 ? 'h-96' : 'h-56'}`}
        >
          <Image
            width = {300}
            height = {300}
            src={photo.Url}
            alt='photoimage'
            className={`object-cover w-full p-4 ${index % 2 === 0 && index >= 6 ? 'mt-14' : ''}  ${index % 2 !== 0 && index > 1 && (index - 1) % 3 !== 0 ? 'mt-32' : ''} ${index >= 4 && (index - 1) % 3 === 0 ? '-mt-20' : ''} ${index % 2 !== 0 && (index - 1) % 3 === 0 && index > 1? 'mt-12' : ''}`}
            style={{ borderRadius: '2.0rem' , height: index % 2 === 0 ? '500px' : '300px' }}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
