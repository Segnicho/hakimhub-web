import React from "react";
import {
  IoChatbubbleEllipsesOutline,
  IoSendSharp,
  IoAdd,
} from "react-icons/io5";

const Chat: React.FC = () => {
  return (
    <div className="w-full sticky bottom-0 flex flex-row items-center justify-center gap-4">
      <button className="flex flex-col justify-between hover:bg-main shadow-chat-button rounded-full text-xl bg-chat py-4 px-4 md:px-6 capitalize text-white">
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
            className="appearance-none bg-transparent border-none w-full mr-3 px-2 focus:outline-none"
            type="text"
            placeholder="Ask me anything..."
            aria-label="message"
          />
          <button className="text-chat hover:text-main my-[5px]">
            <IoSendSharp size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
