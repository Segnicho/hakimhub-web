import React from "react";

interface ServiceProps {
  title: string;
  detail: string;
}

const Service: React.FC<ServiceProps> = ({ title, detail }) => {
  return (
    <div className="flex flex-col gap-4 items-center font-poppins font-semibold my-8 max-w-sm text-xl text-center">
      <p>{title}</p>
      <div className="shadow-chat-service rounded-lg p-4">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Service;
