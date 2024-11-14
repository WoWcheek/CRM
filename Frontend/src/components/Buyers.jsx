import React, { useState } from 'react';

function Buyers() {
  const [buyers, setBuyers] = useState([]);
  const [newBuyer, setNewBuyer] = useState({ name: '', email: '' });

  const handleAddBuyer = () => {
    setBuyers([...buyers, { ...newBuyer, id: Date.now() }]);
    setNewBuyer({ name: '', email: '' });
  };

  const handleDeleteBuyer = (id) => {
    setBuyers(buyers.filter((buyer) => buyer.id !== id));
  };

  const handleUpdateBuyer = (id, updatedBuyer) => {
    setBuyers(
      buyers.map((buyer) => (buyer.id === id ? { ...buyer, ...updatedBuyer } : buyer))
    );
  };

  return (
    <div>
      <h2>Контакти покупців</h2>
      <input
        type="text"
        placeholder="Ім'я покупця"
        value={newBuyer.name}
        onChange={(e) => setNewBuyer({ ...newBuyer, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newBuyer.email}
        onChange={(e) => setNewBuyer({ ...newBuyer, email: e.target.value })}
      />
      <button onClick={handleAddBuyer}>Додати покупця</button>

      <ul>
        {buyers.map((buyer) => (
          <li key={buyer.id}>
            {buyer.name} ({buyer.email}){' '}
            <button onClick={() => handleDeleteBuyer(buyer.id)}>Видалити</button>
            <button
              onClick={() =>
                handleUpdateBuyer(buyer.id, { name: 'Updated Name', email: 'updated@mail.com' })
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

export default Buyers;
