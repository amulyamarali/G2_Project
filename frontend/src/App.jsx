import React from 'react'
import BarChart from './components/BarChart.jsx';
import Features from './components/Features.jsx';
import Landing from './components/Landing.jsx';
import NavBar from './components/NavBar.jsx';
import Chat from './components/Chat.jsx';

import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      {/* <Features /> */}
      <NavBar />
      {/* <Landing /> */}
      {/* <Chat /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/features' element={<Features />} />
        <Route path='/chatbot' element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
