import React, { useState } from 'react';

function Sellers() {
  const [sellers, setSellers] = useState([]);
  const [newSeller, setNewSeller] = useState({ name: '', company: '' });

  const handleAddSeller = () => {
    setSellers([...sellers, { ...newSeller, id: Date.now() }]);
    setNewSeller({ name: '', company: '' });
  };

  const handleDeleteSeller = (id) => {
    setSellers(sellers.filter((seller) => seller.id !== id));
  };

  const handleUpdateSeller = (id, updatedSeller) => {
    setSellers(
      sellers.map((seller) => (seller.id === id ? { ...seller, ...updatedSeller } : seller))
    );
  };

  return (
    <div>
      <h2>Контакти продавців</h2>
      <input
        type="text"
        placeholder="Ім'я продавця"
        value={newSeller.name}
        onChange={(e) => setNewSeller({ ...newSeller, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Компанія"
        value={newSeller.company}
        onChange={(e) => setNewSeller({ ...newSeller, company: e.target.value })}
      />
      <button onClick={handleAddSeller}>Додати продавця</button>

      <ul>
        {sellers.map((seller) => (
          <li key={seller.id}>
            {seller.name} ({seller.company}){' '}
            <button onClick={() => handleDeleteSeller(seller.id)}>Видалити</button>
            <button
              onClick={() =>
                handleUpdateSeller(seller.id, { name: 'Updated Name', company: 'Updated Co.' })
              }
            >
              Оновити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sellers;
