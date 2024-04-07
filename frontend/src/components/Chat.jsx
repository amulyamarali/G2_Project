import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Chat() {
    const [messages, setMessages] = useState([]);
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
        <div>
            {/* <NavBar /> */}
            {messages.map((message, index) => (
                <div key={index} className={message.sender} style={{ padding: '10px', margin: '10px', backgroundColor: message.sender === 'user' ? '#d1e7dd' : '#f08080' }}>
                    <p>{message.sender === 'bot' ? '🤖 ' : '👤 '}{message.text}</p>
                </div>
            ))}
            {isLoading && <p>Loading...</p>}  
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;