import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Зверніть увагу на імпорт
import Home from './components/Home.jsx';
import Contacts from './components/Contacts.jsx';
import Sales from './components/Sales.jsx';
import Support from './components/Support.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default AppRoutes;
