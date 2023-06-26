import React, {useState} from "react";
import Image from "next/image";
import { chat_logo } from "@/public";
import services from "@/data/chat/services.json";
import Service from "@/components/chat/Service";
import ServiceType from "@/types/chat/service";
import Chat from "@/components/chat/Chat";
import MessageList from "@/components/chat/MessageList";
import MessageCard from "@/components/chat/MessageCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FC } from 'react';

const Index: FC = () => {
  const messages = useSelector((state:RootState) => state.ChatHistory.messages)
  console.log(messages)
  console.log(typeof(messages))
  
  return (
    // <></>
    <div className="min-h-screen">
      
      <div className="max-w-screen-2xl">
      <div className="flex flex-col p-8"> 
        <div className="flex-grow">
        {messages.length === 0 ?

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <Image
                src={chat_logo}
                alt="Hakimhub's logo"
                width={110}
                height={110}
              />
            </div>
            <h1 className="text-5xl font-bold text-center font-inter">
              Welcome to Hakim<span className="text-main">Hub</span>
            </h1>
            <p className="text-secondary-text text-xl text-center font-bold font-inter">
              Your AI-powered copilot for your health
            </p>

            <div className="flex flex-col md:flex-row justify-around">
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
          
        <Chat />
      </div>
    </div> 

      
    </div>
    
      
      
     
    
    
  );
};

export default Index;
