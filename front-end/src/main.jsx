
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.scss'
import App from './App.jsx'
import Login from './pages/login';
import Profil from './pages/profil';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Profil' element={<Login />} />
      <Route path='/Profil' element={<Profil />} />
    </Routes>
  </BrowserRouter>,
)
