import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './page/Home/Home'
import About from './page/About/About'
import Dashboard from './page/Dashboard/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <About />
    <Dashboard/>
  </StrictMode>,
)
