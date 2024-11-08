import React from 'react';

const Chat = ({ messages }) => {
  return (
    <div className="w-[700px] m-auto p-4 bg-gray-50 rounded-lg min-h-[10vh] max-h-[60vh] mt-2 overflow-y-auto">
      {messages.map((message, index) => (
        <div key={index} className={`mb-3 ${message.role === "user" ? "text-right" : "text-left"}`}>
          <div className={`inline-block max-w-[80%] px-4 py-2 rounded-lg ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
