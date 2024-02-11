import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './style.css'
import { NavProvider } from './src/context/nav'

const root = createRoot(document.getElementById('app'))
root.render(
  <NavProvider>
    <App />
  </NavProvider>
)
