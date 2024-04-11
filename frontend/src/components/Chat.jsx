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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh',  }}>
            {/* <NavBar /> */}
            {/* <Landing />  */}
            {messages.map((message, index) => (
                <div key={index} className={message.sender} style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    width: '100%',
                    padding: '10px',
                    margin: message.sender === 'user' ? '10px 10px 10px 0' : '10px 0 10px 10px'
                }}>
                    <div style={{
                        backgroundColor: message.sender === 'user' ? '#d1e7dd' : '#f08080',
                        padding: '10px',
                        borderRadius: '10px'
                    }}>
                        <p>{message.sender === 'bot' ? '🤖 ' : '👤 '}{message.text}</p>
                    </div>
                </div>
            ))}
            {isLoading ? <BeatLoader /> : null}
            <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                style={{
                    width: '400px', // make the input box wider
                    padding: '10px', // add some padding to make it bulkier
                    fontSize: '16px', // increase font size
                    margin: '0 10px', // add some margin to the top and bottom
                    alignItems: 'center'
                }}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;