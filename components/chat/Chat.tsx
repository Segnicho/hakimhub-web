import { usePostChatBotMutation } from "@/store/features/chat/chat-api";
import {
  pushMessage,
  removeAllMessage,
} from "@/store/features/chat/message-history";
import { RootState } from "@/store";
import { ChatResponse } from "@/types/chat/chat-types";
import React, { useState, useRef, useEffect } from "react";
import {
  IoChatbubbleEllipsesOutline,
  IoSendSharp,
  IoAdd,
} from "react-icons/io5";
import { 
  useSelector,
  useDispatch,
 } from "react-redux";

type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;
type ChatProp = {
  setLoading: SetStateFunction<boolean>;
};
const Chat: React.FC<ChatProp> = ({ setLoading }) => {
  const [input, setInput] = useState("");
  const [newChat, setNewChat] = useState(true);
  const [buttonActive, setButtonActive] = useState(false);
  const dispatch = useDispatch();
  const ipaddress = useSelector((state: RootState) => state.IpSlice.ipAddress);
  const [postChat, { isLoading }] = usePostChatBotMutation();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const submitData = async () => {
      try {
        await fetch("/api/get-ip");
        
      } catch (error) {
      }
    };

    submitData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);
  const submitClickHandler = (e: React.FormEvent) => {
    setButtonActive(true);
    setLoading(true);
    e.preventDefault();
    dispatch(pushMessage(input));

    postChat({
      message: input,
      Address: ipaddress,
      isNewChat: newChat,
    })
      .unwrap()
      .then((response: ChatResponse) => {
        setLoading(false);
        dispatch(pushMessage(response));
        setButtonActive(false);
      })
      .catch((error) => {
        setLoading(false);
        dispatch(
          pushMessage("An error occured while generating response.Please try again")
        );
        setButtonActive(false);
      });
    setNewChat(false);
    setInput("");
  };
  const newTopic = () => {
    setNewChat(true);
    dispatch(removeAllMessage());
    setLoading(false);
  };
  return (
    <div className="w-full  fixed bottom-0 mt-16 flex flex-row items-center justify-center gap-4">
      <button
        onClick={newTopic}
        className="flex flex-col  justify-center items-center border hover:shadow-chat-button rounded-full text-xl  w-[3rem] h-[3rem] md:px-6 hover:bg-primary bg-[#56b2fd] capitalize text-white"
      >
      <IoAdd className=" text-white" size="1.4rem" />
      </button>

      <form className="flex flex-stretch w-[80vw] md:w-[50vw] py-2">
        <div className="flex w-full items-center shadow-md rounded-md p-2 bg-[rgb(248,246,246)]">
          <IoChatbubbleEllipsesOutline
            className="text-secondary-text hidden md:flex my-[6px]  "
            size={24}
          />
          <input
            ref={inputRef}
            className="appearance-none bg-transparent border-none w-full mr-3 px-2 focus:outline-none"
            type="text"
            placeholder="Ask me anything..."
            aria-label="message"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            disabled={buttonActive}
            className="text-chat hover:text-main my-[5px]"
            onClick={(e) => submitClickHandler(e)}
          >
            <IoSendSharp size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;