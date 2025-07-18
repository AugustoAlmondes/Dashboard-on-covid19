import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './page/Home/Home'
import About from './page/About/About'
import Dashboard from './page/Dashboard/Dashboard'
import { ApiProvider } from './context/ApiContext/ApiProvider'
import Header from './components/Header/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
      <Header/>
      <Home />
      <About />
      <Dashboard />
    </ApiProvider>
  </StrictMode>,
)
