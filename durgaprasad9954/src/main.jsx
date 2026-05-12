import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './App.css'
import Header from './Pages/Header.jsx'
import Body from './Pages/body.jsx'
import Secondsection from "./Pages/Secondsection.jsx";
import WhyChoose from "./Pages/WhyChoose.jsx"
import Skills from "./Pages/Skils.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
