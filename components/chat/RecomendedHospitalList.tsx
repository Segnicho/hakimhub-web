import React from "react";
import { Institution } from "@/types/chat/chat-types";
import RecomendedHospital from "./RecomendedHospital";

interface RecomendedHospitalListProp{
  institutions : Institution[]
}
const RecomendedHospitalList: React.FC<RecomendedHospitalListProp> = ({institutions}) => {

  return <div className="mt-4 px-2 ">
    <div className="mb-3">
      <p> Based on your symptoms I recommend that you see the following Hospitals </p>
    </div>
    {
      institutions.map((institution:Institution) =>{
        return(
          <div className="cursor-pointer"  key={institution.id} >
            <RecomendedHospital institution={institution}/>
          </div>
        )
      })
    }
    
  </div>;
};

export default RecomendedHospitalList;
