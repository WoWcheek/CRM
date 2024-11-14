import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Зверніть увагу на імпорт
import Home from './components/Home.jsx';
import Sallers from './components/Sallers.jsx';
import Products from './components/Products.jsx';
import Buyers from './components/Buyers.jsx';
import Sales from './components/Sales.jsx';
import Support from './components/Support.jsx';
import Contacts from './components/Contacts.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sallers" element={<Sallers />} />
      <Route path="/buyers" element={<Buyers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default AppRoutes;
