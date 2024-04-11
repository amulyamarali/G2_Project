import React from 'react';
import Features from './components/Features.jsx';
import Landing from './components/Landing.jsx';
import NavBar from './components/NavBar.jsx';
import Chat from './components/Chat.jsx';
import Analysis from './components/Analysis.jsx';

import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="flex flex-col items-center h-screen mt-2">
      {/* <Features /> */}
      <NavBar />
      {/* <Landing /> */}
      {/* <Chat /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/features' element={<Features />} />
        <Route path='/chatbot' element={<Chat />} />
        <Route path='/analysis' element={<Analysis />} />
      </Routes>
    </div>
  )
}

export default App
