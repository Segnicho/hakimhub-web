import { doctor, doctorImg } from "@/public";
import Image from "next/image";
import Link from "next/link";
import HospitalsList from "../hospital/HospitalsList";
import { useGetHospitalsQuery } from "@/store/features/hospital/hospitals-api";
import LoadingPage from "./Loading";
const NoData: React.FC = () => {
  const filters = {
    openStatus: true,
    operationYears: 0,
    services: [],
    name: "",
  };

  const { data: hospitals, isLoading, isError } = useGetHospitalsQuery(filters);
  return (
    <div className="p-10 bg-white text-primary-text">
      <div className="flex flex-wrap">
        <div className="w-1/3 flex flex-wrap justify-center h-60 w-250 max-lg:hidden">
          <Image
            src={doctor}
            alt={""}
            width={250}
            height={40}
            className=""
          />
        </div>
        <div className="w-2/3 p-16 pl-2 max-lg:p-2 max-lg:pl-0 max-lg:w-full">
          <span className="font-bold text-5xl max-lg:text-2xl">Oops</span>
          <span className="font-bold text-xl flex flex-wrap mb-4 mt-4 max-lg:text-md">
            Seems like the hospital you&apos;re looking doesn&apos;t exist in
            our platform,{" "}
          </span>
          <span className="text-xl max-lg:text-md">
            But if you want us to find you other alternatives based on your
            illness
            <Link href={"/chat"} className="text-primary font-bold ml-2">
              Click here
            </Link>
          </span>
        </div>
      </div>
      <div className="text-4xl font-bold ml-12 max-lg:ml-4 max-lg:text-xl pb-6">
      <span>
        Other Available Hospitals
      </span>
      </div>

      <div className="p-2">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <div>
            <HospitalsList hospitals={hospitals.value} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoData;
