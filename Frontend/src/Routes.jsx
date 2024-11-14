import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './components/Home.jsx';
import Sellers from './components/Sellers.jsx';
import Products from './components/Products.jsx';
import Buyers from './components/Buyers.jsx';
import Sales from './components/Sales.jsx';
import Analyses from './components/Analyses.jsx';
import Contacts from './components/Contacts.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sellers" element={<Sellers />} />
      <Route path="/buyers" element={<Buyers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/analyses" element={<Analyses />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default AppRoutes;
