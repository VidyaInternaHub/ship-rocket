import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Launchx from './pages/Product/Launchx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Launchx />
  </StrictMode>,
)
