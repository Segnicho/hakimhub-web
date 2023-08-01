import Image from 'next/image';

export interface GalleryProps {
  photos: string[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {

  return (
    <div className='my-4 mx-6'>
      <h3 className='text-xl md:text-2xl font-bold mx-4 my-6'>Gallery</h3>
      <div className='flex flex-col overflow-y-auto h-[400px] sm:h-[430px] lg:h-[520px]'>
        <div className={`sm:gap-4 sm:grid sm:grid-cols-3 lg:mx-4`}>
          {photos.map((photosUrl, index) => (
            <div
            key={index}
            className={`w-full rounded-lg snap-y  ${
              index > 1 && (index - 1) % 3 === 0 && index % 2 !== 0 ? 'sm:mt-[7px]' : ''
            } ${
              index >= 3 && (index - 1) % 3 !== 0 && index % 2 !== 0 ? 'sm:mt-[5px]' : ''
            } ${
              index === 4 ? 'sm:-mt-[94px]' : ''
            } ${
              index >= 10 && (index - 1) % 3 === 0 && index % 2 === 0 ? 'sm:-mt-[64px]' : ''
            } ${
              index >= 6 && (index - 1) % 3 !== 0 && index % 2 === 0 ? 'sm:mt-[4px]' : ''
            }`}
          >   
              <Image
                width={200}
                height={200}
                src={photosUrl}
                alt='photoimage'
                className={`brightness-100 object-cover w-full p-4 snap-center sm:p-0 lg:p-1 ${index % 2 === 0  ? 'sm:h-[250px] lg:h-[300px]' : 'sm:h-[150px] lg:h-[200px]'}`}
                style={{borderRadius:"1.0rem"}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;