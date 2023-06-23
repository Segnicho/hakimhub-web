import Image from 'next/image';

interface GalleryProps {
  photos: string[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const columns = Math.ceil(photos.length / 3);
  return (
    <div className='my-4 mx-6'>
      <h3 className='text-3xl font-bold mx-4 my-6'>Gallery</h3>
      <div className='overflow-y-scroll h-[720px]'>
        <div className={`grid grid-cols-3 grid-rows-${columns}`}>
          {photos.map((photosUrl, index) => (
            <div
              key={index}
              className={`relative w-full rounded-lg snap-y ${
                index % 2 === 0 ? 'h-96' : 'h-56'
              } ${
                index > 1 && (index - 1) % 3 === 0 && index % 2 !== 0  ? 'mt-[20px]' : ''
              }${
                index >= 3 && (index - 1) % 3 !== 0 && index % 2 !== 0  ? 'mt-[20px]' : ''
              } ${
                index == 4 ? '-mt-[78px]' : ''
              }${
                index >= 10 && (index - 1) % 3 === 0 && index % 2 === 0 ? '-mt-[74px]' : ''
              }${
                index >= 6 && (index - 1) % 3 !== 0 && index % 2 === 0 ? 'mt-[16px]' : ''
              }`}
            >
              <Image
                width={300}
                height={300}
                src={photosUrl}
                alt='photoimage'
                className={`brightness-100 object-cover w-full p-4 snap-center backdrop-opacity-95 `}
                style={{ borderRadius: '2.0rem', height: index % 2 === 0 ? '400px' : '300px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
