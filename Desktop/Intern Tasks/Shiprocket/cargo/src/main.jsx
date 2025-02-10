import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CargoShipping from './pages/Product/CargoShipping.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CargoShipping />
  </StrictMode>,
)
