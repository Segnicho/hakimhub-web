import { usePostChatBotMutation } from "@/slices/chat/chat-api";
import { pushMessage } from "@/slices/chat/message-history";
import { ChatResponse } from "@/types/chat/service";
import React from "react";
import { useDispatch } from "react-redux";
type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

interface ServiceProps {
  title: string;
  detail: string;
  setLoading: SetStateFunction<boolean>;
}

const Service: React.FC<ServiceProps> = ({ title, detail, setLoading }) => {
  const [postChat, {isLoading}] = usePostChatBotMutation()
  const dispatch = useDispatch()

  const clickHandler = (e: React.FormEvent) =>{
    e.preventDefault()
    setLoading(true)
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
        setLoading(false)
        
        
      })
      .catch((error) => {
        dispatch(pushMessage("An error occured while generating try again"))
        setLoading(false)
        
      });

  }

  return (
    <div className="flex flex-col gap-4 items-center  my-8 max-w-sm text-xl text-center" onClick={(e) => clickHandler(e)}>
      <p className="font-semibold">{title}</p>
      <div className="  text-[1.1rem] hover:border-primary  transition-all hover:text-primary cursor-pointer rounded-lg    bg-[rgb(248,246,246)] p-4">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Service;
