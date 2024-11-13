// ChatWindow.jsx
import React, { useState } from 'react';
import ChatHeading from "./ChatHeading";
import ChatInputBox from "./ChatInputBox";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { GrGrow } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    if (message.role === 'user') {
      setIsLoading(true);
    }
    if (message.role === 'assistant') {
      setIsLoading(false); 
    }
  };

  return (
    <div className="flex h-screen">
      <div className="sidebar mt-[11.1vh]">
        <Sidebar />
      </div>

      <div className="flex-grow">
        <section id="header_section" className="flex items-center justify-between p-2 bg-gray-100 border-b">
        <div className="h1_header flex items-center">
            <span className="text-3xl">
              <GrGrow />
            </span>
            <h1 className="text-2xl font-bold ml-2">Growwth Buddy</h1>
            <p className="text-[16px] m-2 text-gray-500">By</p>
            <img
              className="w-[60px]"
              src="https://growwthpartners.com/wp-content/uploads/2024/05/growth-logo.png"
              alt="Growwth Logo"
            />
          </div>

          <div className="profile flex items-center space-x-4">
            <MdDarkMode className="cursor-pointer" />
            <MdOutlineLightMode className="cursor-pointer" />
            <div className="user">
              <CgProfile className="text-2xl cursor-pointer" />
            </div>
          </div>
        </section>

        {messages.length === 0 && (
          <section id="ChatHeading" className="p-4 absolute right-[55vh] bottom-[45vh]">
            <ChatHeading />
          </section>
        )}

        {messages.length > 0 && (
          <section id="Chat" className="p-4">
            <Chat messages={messages} isLoading={isLoading} />
          </section>
        )}

        <section id="InputBox" className="p-4 absolute bottom-[0vh] right-[55vh] ">
          <ChatInputBox onNewMessage={handleNewMessage} />
        </section>
      </div>
    </div>
  );
};

export default ChatWindow;
