import React from "react";
import { Institution } from "@/types/chat/service";
import RecomendedHospital from "./RecomendedHospital";

interface RecomendedHospitalListInterface{
  institutions : Institution[]
}
const RecomendedHospitalList: React.FC<RecomendedHospitalListInterface> = ({institutions}) => {
  
  return <div className="mt-4 px-2 ">
    <div className="mb-3">
      <p> Based on your syptoms I recommend that you see the following Hospitals </p>
    </div>
    {
      institutions.map((institution:Institution) =>{
        return(
          <RecomendedHospital institution={institution} key={institution.id}/>
        )
      })
    }
    
  </div>;
};

export default RecomendedHospitalList;
