import { MessageHistory, pushMessage } from "@/slices/chat/message-history";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import RecomendedHospital from "./RecomendedHospital";
import RecomendedHospitalList from "./RecomendedHospitalList";

const MessageCard: React.FC = () => {
  
  const messageHistory = useSelector((state:RootState) => state.ChatHistory) 
  return <div className = "">
    <div className="   shoadow-md  " >
      {
        messageHistory.messages.map((message , index:number) =>{
          console.log(message)
          return (
            <div key={index} className= {typeof(message) === 'string'?"flex items-center gap-4 ":"flex items-center  gap-4  max-md:justify-end max-md:flex-row-reverse"} >
              
              
        <div  className={typeof(message) === 'string'? "bg-[rgb(247,246,246)] p-7  w-full  ":"bg-white  w-full p-7    "}>
            {
            typeof message === 'string' 
            ? <p className="max-w-[600px] md:ml-[25%] ">{ message }</p>:
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
