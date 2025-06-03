import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Navbar from './navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
        <Navbar />
        <App />
    </HashRouter>
  </React.StrictMode>
)
