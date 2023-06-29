import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import RecomendedHospitalList from "./RecomendedHospitalList";

const MessageCard: React.FC = () => {
  
  const messageHistory = useSelector((state:RootState) => state.ChatHistory) 
  return <div>
    <div className="shoadow-md" >
      {
        messageHistory.messages.map((message , index:number) =>{
          console.log(message)
          return (
            <div key={index} className= {typeof(message) === 'string'?"flex items-center gap-4 ":"flex items-center  gap-4  max-md:justify-end max-md:flex-row-reverse"} >
              {/* bg-[rgb(247,246,246)]  */}
              
        <div  className={typeof(message) === 'string'? " bg-[#f4f8ff] p-7  w-full  ":"bg-white  w-full p-7"}>
            {
            typeof message === 'string' 
            ? message === "An error occured while generating response try again" ?<p className="max-w-[600px] md:ml-[25%] text-red-600 ">{ message }</p>: <p className="max-w-[600px] md:ml-[25%] ">{ message }</p>:
            <div  className="max-w-[600px] md:ml-[25%] pl-1/2 ">
              <p>{message.value.reply}</p>
              {
                message.value.institutions && <RecomendedHospitalList institutions = {message.value.institutions} />
              }       
            </div>
             }
        </div>
              </div>           
          )
        })
      }
    </div> 
  </div>;
};

export default MessageCard;
