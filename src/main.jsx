import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/ahtear-resume'>
        <Navbar />
        <App />
    </BrowserRouter>
  </React.StrictMode>
)
