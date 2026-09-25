import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Numbers from './pages/Numbers';
import NumberDetail from './pages/NumberDetail';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/numeros" element={<Numbers />} />
        <Route path="/numero/:id" element={<NumberDetail />} />
        <Route path="/precios" element={<Pricing />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
