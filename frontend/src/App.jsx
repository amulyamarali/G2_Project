import React from 'react'
import BarChart from './components/BarChart.jsx';
import Features from './components/Features.jsx';
import Landing from './components/Landing.jsx';
import NavBar from './components/NavBar.jsx';
import Chat from './components/Chat.jsx';
import Analysis from './components/Analysis.jsx';

import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginTop:"10px" }}>
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
