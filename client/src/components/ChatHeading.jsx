import React from 'react'
import { GrGrow } from "react-icons/gr";
const ChatHeading = () => {
  return (
    <div>
        <section id="main">
      <div className="logo font-bold flex items-center text-3xl justify-center mt-[1vh]">
        <GrGrow/>
        <p>Growwth Buddy</p>
      </div>
      <div className="assistant mt-2">
        <p className="text-center text-2xl font-thin text-gray-700">Your AI assistant to help you with your financial questions.</p>
      </div>
     </section>
    </div>
  )
}

export default ChatHeading