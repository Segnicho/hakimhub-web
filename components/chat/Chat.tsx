import { usePostChatBotMutation } from "@/slices/chat/chat-api";
import { pushMessage, removeAllMessage } from "@/slices/chat/message-history";
import { ChatResponse } from "@/types/chat/service";
import React, { useState, useRef, useEffect } from "react";
import {
  IoChatbubbleEllipsesOutline,
  IoSendSharp,
  IoAdd,
} from "react-icons/io5";
import { useDispatch } from "react-redux";

const Chat: React.FC = () => {
  const [input, setInput] = useState("")
  const [newChat, setNewChat] = useState(true)
  const [buttonActive, setButtonActive] = useState(false)
  const dispatch = useDispatch()
  const  [postChat,{ isLoading,isSuccess }]  = usePostChatBotMutation()
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);
  const submitClickHandler = (e: React.FormEvent) =>{
    setButtonActive(true)
    e.preventDefault()
    dispatch(pushMessage(input))

    postChat({
      message:input,
      Address:"ipadhgjlpopoplkdress",
      isNewChat:newChat
  })
      .unwrap()
      .then((response:ChatResponse) => {
        console.log(response)
        dispatch(pushMessage(response))
        setButtonActive(false)
        
        
      })
      .catch((error) => {
        dispatch(pushMessage("An error occured while generating response try again"))
        setButtonActive(false)
        
      });
    //since there shouldn't be new chat on every request  
    setNewChat(false)
    setInput('');
    

  }
  const newTopic = () =>{
    setNewChat(true)
    dispatch(removeAllMessage())

  }
  return (
    <div className="w-full sticky bottom-0 flex flex-row items-center justify-center gap-4">
      <button onClick={newTopic} className="flex flex-col justify-between hover:bg-main shadow-chat-button rounded-full text-xl bg-chat py-4 px-4 md:px-6 capitalize text-white">
        <p className="hidden md:flex">New Topic</p>
        <IoAdd className="flex md:hidden" />
      </button>
      <form className="flex flex-stretch w-[80vw] md:w-[50vw] py-2">
        <div className="flex w-full items-center border rounded-full border-secondary-text p-2 bg-white">
          <IoChatbubbleEllipsesOutline
            className="text-secondary-text hidden md:flex my-[6px]"
            size={24}
          />
          <input
          ref = {inputRef}
            className="appearance-none bg-transparent border-none w-full mr-3 px-2 focus:outline-none"
            type="text"
            placeholder="Ask me anything..."
            aria-label="message"
            value = {input}
            onChange={(e) => {setInput(e.target.value)}}
          />
          <button disabled = {buttonActive} className="text-chat hover:text-main my-[5px]" onClick={(e) => submitClickHandler(e)}>
            <IoSendSharp size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
