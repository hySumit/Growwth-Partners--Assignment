import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="p-2 bg-gray-200 fixed top-[80px] left-4 z-50 rounded-md"
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 bg-gray-100  p-4 fixed h-full z-40 transition-transform duration-300">
          
          <button className=" mt-10 flex items-center w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg mb-4">
            <BsPlus size={20} className="mr-2" />
            New Chat
          </button>
          {/* Sidebar Content */}
          <nav className="mt-4">
            <ul>
              <li className="p-2 hover:bg-gray-300 m-1 bg-gray-200 rounded">Chat 1</li>
              <li className="p-2 hover:bg-gray-300 m-1 bg-gray-200 rounded">Chat 2</li>
              <li className="p-2 hover:bg-gray-300 m-1 bg-gray-200 rounded">Chat 3</li>
              {/* Add more chat items as needed */}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
