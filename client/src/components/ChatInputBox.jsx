import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { LuSparkles } from "react-icons/lu";
import { BsSend } from "react-icons/bs";
import { TbFileSpreadsheet } from "react-icons/tb";

const ChatInputBox = ({ onNewMessage }) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState(''); 
  const textareaRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    resizeTextarea();
  };

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 130)}px`;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    
    onNewMessage({ role: 'user', content: inputText });
    setIsLoading(true);

    try {
      
      const response = await axios.post('http://localhost:5500/chat', { message: inputText });

      if (response.data.error) {
        console.error('Backend error:', response.data.error);
        return;
      }

      const assistantResponse = response.data.response || 'No response';

      
      onNewMessage({ role: 'assistant', content: assistantResponse });
    } catch (error) {
      console.error("Failed to send message:", error.response ? error.response.data : error.message);
    } finally {
      setIsLoading(false);
    }

    setInputText('');
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const formData = new FormData();
      formData.append('file', file);

      try {
        
        await axios.post('http://localhost:5500/uploads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } catch (error) {
        console.error("Error uploading file:", error.message);
      }
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [inputText]);

  return (
    <div className="w-[600px] m-auto p-4 bg-gray-100 rounded-[10px]">
      <section id="input" className="flex justify-center">
        <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 w-full max-w-xl">
          <label htmlFor="file-input">
            <TbFileSpreadsheet className="text-gray-700 mr-3 text-[20px] cursor-pointer" />
            <input
              type="file"
              id="file-input"
              accept=".xls,.xlsx,.csv"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          <textarea
            ref={textareaRef}
            className="flex-grow resize-none bg-transparent outline-none text-base placeholder-gray-400 overflow-y-auto"
            placeholder={fileName ? `File: ${fileName} - Ask your financial question...` : "Ask your financial question..."}
            value={inputText}
            onChange={handleInputChange}
            rows={1}
            style={{ lineHeight: '1.5', maxHeight: '80px' }}
          />
          <LuSparkles className="text-gray-500 mx-3" />
          <button className="text-blue-500 text-[17px] hover:text-blue-700" onClick={handleSendMessage} disabled={isLoading}>
            <BsSend />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChatInputBox;
