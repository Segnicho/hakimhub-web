import { doctorImg } from "@/public";
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
        <div className="w-1/3 flex flex-wrap justify-center h-60 w-250">
          <Image
            src={doctorImg}
            alt={""}
            width={250}
            height={40}
            className=""
          />
        </div>
        <div className="w-2/3 p-16 pl-2">
          <span className="font-bold text-5xl">Oops</span>
          <span className="font-bold text-xl flex flex-wrap mb-4 mt-4">
            Seems like the hospital you&apos;re looking doesn&apos;t exist in
            our platform,{" "}
          </span>
          <span className="text-xl">
            But if you want us to find you other alternatives based on your
            illness{" "}
            <Link href={"/hospitals"} className="text-primary font-bold">
              Click here
            </Link>
          </span>
        </div>
      </div>
      <span className="text-4xl font-lg flex flex-wrap ml-12 pb-4">
        Open, Other Hopitals{" "}
      </span>

      <div>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <div className="p-5">
            <HospitalsList hospitals={hospitals.value} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoData;
