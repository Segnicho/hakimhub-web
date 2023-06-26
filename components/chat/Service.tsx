import { usePostChatBotMutation } from "@/slices/chat/chat-api";
import { pushMessage } from "@/slices/chat/message-history";
import { ChatResponse } from "@/types/chat/service";
import React from "react";
import { useDispatch } from "react-redux";

interface ServiceProps {
  title: string;
  detail: string;
}

const Service: React.FC<ServiceProps> = ({ title, detail }) => {
  const [postChat, {isLoading}] = usePostChatBotMutation()
  const dispatch = useDispatch()

  const clickHandler = (e: React.FormEvent) =>{
    e.preventDefault()
    dispatch(pushMessage(detail))
    

    postChat({
      message:detail,
      Address:"ipadhgjlpopoplkdress",
      isNewChat:true
  })
      .unwrap()
      .then((response:ChatResponse) => {
        // console.log(response)
        dispatch(pushMessage(response))
        
        
      })
      .catch((error) => {
        dispatch(pushMessage("An error occured while generating try again"))
        
      });

  }

  return (
    <div className="flex flex-col gap-4 items-center font-poppins font-semibold my-8 max-w-sm text-xl text-center" onClick={(e) => clickHandler(e)}>
      <p>{title}</p>
      <div className="shadow-chat-service rounded-lg p-4">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Service;
