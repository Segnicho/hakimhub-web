import { MessageHistory, pushMessage } from "@/slices/chat/message-history";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import RecomendedHospital from "./RecomendedHospital";
import RecomendedHospitalList from "./RecomendedHospitalList";

const MessageCard: React.FC = () => {
  
  const messageHistory = useSelector((state:RootState) => state.ChatHistory) 
  return <div className = "   min-h-screen ">
    <div className="  w-1/2 shoadow-md  max-w-[1000px] mx-auto" >
      {
        messageHistory.messages.map((message , index:number) =>{
          console.log(message)
          return (
            <div key={index} className= {typeof(message) === 'string'?"flex items-center gap-4 ":"flex items-center  gap-4  max-md:justify-end max-md:flex-row-reverse"} >
              {
                typeof(message) === 'string' ?
                <p className="bg-white rounded-xl  p-4 mt-12 " >you</p>:
                <p className="bg-white rounded-xl  p-4 mt-12 " >bot</p>
              }
              
        <div  className={typeof(message) === 'string'? "bg-primary p-7 mt-12 max-w-[900px] rounded-xl ":"bg-white max-w-[900px] p-7 mt-12 rounded-xl "}>
            {
            typeof message === 'string' 
            ? <p>{ message }</p>:
            <div>
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
