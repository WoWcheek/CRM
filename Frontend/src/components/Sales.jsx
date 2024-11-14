import React, { useState } from 'react';

function Sales() {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({
    product: '',
    quantity: '',
    customer: '',
    date: '',
  });

  const handleAddSale = () => {
    setSales([...sales, { ...newSale, id: Date.now() }]);
    setNewSale({ product: '', quantity: '', customer: '', date: '' });
  };

  const handleDeleteSale = (id) => {
    setSales(sales.filter((sale) => sale.id !== id));
  };

  const handleUpdateSale = (id, updatedSale) => {
    setSales(
      sales.map((sale) => (sale.id === id ? { ...sale, ...updatedSale } : sale))
    );
  };

  return (
    <div>
      <h2>Управління продажами</h2>

      <div>
        <input
          type="text"
          placeholder="Товар"
          value={newSale.product}
          onChange={(e) => setNewSale({ ...newSale, product: e.target.value })}
        />
        <input
          type="number"
          placeholder="Кількість"
          value={newSale.quantity}
          onChange={(e) => setNewSale({ ...newSale, quantity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Покупець"
          value={newSale.customer}
          onChange={(e) => setNewSale({ ...newSale, customer: e.target.value })}
        />
        <input
          type="date"
          placeholder="Дата"
          value={newSale.date}
          onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
        />
        <button onClick={handleAddSale}>Додати продаж</button>
      </div>

      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            <strong>{sale.product}</strong> - {sale.quantity} шт. - Покупець: {sale.customer} - Дата: {sale.date}{' '}
            <button onClick={() => handleDeleteSale(sale.id)}>Видалити</button>
            <button
              onClick={() =>
                handleUpdateSale(sale.id, {
                  product: 'Оновлений товар',
                  quantity: '10',
                  customer: 'Оновлений покупець',
                  date: '2024-01-01',
                })
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

export default Sales;
