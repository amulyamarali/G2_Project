import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Landing from './Landing';
import { BeatLoader } from 'react-spinners';

function Chat() {
    const [messages, setMessages] = useState([{ text: 'Hey, how can I help you?', sender: 'bot' }]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);  // New state variable for loading status

    const sendMessage = async () => {
        setIsLoading(true);  // Set loading to true before fetching the response
        const response = await axios.post('http://localhost:3000/chat', { query: input });
        setMessages([...messages, { text: input, sender: 'user' }, { text: response.data.message, sender: 'bot' }]);
        setInput('');
        setIsLoading(false);  // Set loading to false after fetching the response
    };

    const navigate = useNavigate();  // Initialize navigate

    return (
        <div className="flex flex-col items-center h-screen">
            {/* <NavBar /> */}
            {/* <Landing />  */}
            {messages.map((message, index) => (
                <div key={index} className={`${message.sender} flex w-full px-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'} my-2 ${message.sender === 'user' ? 'mr-2' : 'ml-2'}`}>
                    <div className={`${message.sender === 'user' ? 'bg-green-200' : 'bg-red-200'} px-2 rounded-md`}>
                        <p className="text-base">{message.sender === 'bot' ? '🤖 ' : '👤 '}{message.text}</p>
                    </div>
                </div>
            ))}
            {isLoading ? <BeatLoader /> : null}
            <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                className="w-96 px-2 text-base my-2 items-center border-2 border-solid border-gray-500"/>
            <button className="px-4 py-2 bg-red-400 text-white rounded-md" onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;