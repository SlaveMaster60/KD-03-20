import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutPage from './AboutPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  </BrowserRouter>,
)
