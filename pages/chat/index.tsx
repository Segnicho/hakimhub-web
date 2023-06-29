import React, {useState, useEffect} from "react";
import Image from "next/image";
import { chat_logo } from "@/public";
import services from "@/data/chat/services.json";
import Service from "@/components/chat/Service";
import ServiceType from "@/types/chat/service";
import Chat from "@/components/chat/Chat";
import MessageList from "@/components/chat/RecomendedHospitalList";
import MessageCard from "@/components/chat/MessageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FC } from 'react';
import { Loading } from "@/components";
import TypingLoading from "@/components/commons/TypingLoading";

const Index: FC = () => {
  const messages = useSelector((state:RootState) => state.ChatHistory.messages)
  const [loading,setLoading] = useState<boolean>(false)
  console.log(messages)
  console.log(typeof(messages))

  
  
  return (
    <div className="min-h-screen relative bg-white">
      
      <div className="max-w-screen-2xl min-h-[100vh]">
      <div className="flex flex-col "> 
        <div className="flex-grow">
        {messages.length === 0 ?

          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center pt-8">
              <Image
                src={chat_logo}
                alt="Hakimhub's logo"
                width={60}
                height={60}
              />
            </div>
            <h1 className="text-4xl font-bold text-center font-inter">
              Welcome to Hakim<span className="text-main">Hub</span>-Bot
            </h1>
            <p className="text-secondary-text text-lg text-center font-bold font-inter">
              Your AI-powered copilot for your health
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around p-8">
              {services.map((service: ServiceType) => (
                <Service
                  key={service.id}
                  title={service.title}
                  detail={service.detail}
                />
              ))}
            </div>
          </div>
          :
          ""
            
          }
        </div>
        { messages.length > 0 && <MessageCard/>}
        {loading && <TypingLoading/>}     
      </div>
    </div> 
        <Chat setLoading = {setLoading} />

      
    </div>
    
      
      
     
    
    
  );
};

export default Index;
