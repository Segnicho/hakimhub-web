import { TbBrandWebflow } from 'react-icons/tb'
import { MdPhone } from 'react-icons/md';

interface ContactProps {
  website?: string;
  phoneNumber?: string;
}

const ContactCard: React.FC<ContactProps> = ({ website, phoneNumber }) => {
  return (
    <div className="sm:w-[400px] sm:mx-28 lg:w-[300px] lg:mx-16 xl:w-[350px] xl:mx-16 2xl:w-[400px] 2xl:mx-16 w-sm bg-white rounded-lg drop-shadow shadow-xl p-4 mx-10 my-4">
      <h1 className="text-2xl font-bold my-2 mx-3">Contact</h1>
      <div className="h-48 overflow-y-auto gap-4">
        <h3 className="text-xl my-2 mx-3">Reception</h3>
        <div className="flex items-center gap-5 max-w-sm bg-white rounded-lg drop-shadow-lg my-4">
          <MdPhone className="h-10 w-12 text-primary bg-white rounded-full drop-shadow-md p-3" />
          <p className="text-lg font-medium">{phoneNumber}</p>
        </div>
        <div className="flex items-center gap-5 max-w-sm bg-white rounded-lg drop-shadow-md my-4">
          <MdPhone className="h-10 w-12 text-primary bg-white rounded-full drop-shadow-md p-3" />
          <p className="text-lg font-medium">{phoneNumber}</p>
        </div>
      </div>
     {(website && 
      <div className="my-2">
      <h3 className="text-xl my-2 mx-3">Web</h3>
      <div className="flex items-center gap-5 max-w-sm bg-white rounded-lg drop-shadow-md">
        <TbBrandWebflow className="h-10 w-12 text-primary bg-white rounded-full drop-shadow-md p-3" />
        <p className="text-lg font-medium">{website}</p>
      </div>
    </div>)} 
    </div>
  );
};

export default ContactCard;