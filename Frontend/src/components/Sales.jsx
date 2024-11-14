import React, { useState } from 'react';

function Sales() {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({
    client: '',
    title: '',
    description: '',
    price: '',
    startDate: '',
    cancelDate: '',
    completionDate: '',
  });

  const handleAddSale = () => {
    setSales([...sales, { ...newSale, id: Date.now() }]);
    setNewSale({
      client: '',
      title: '',
      description: '',
      price: '',
      startDate: '',
      cancelDate: '',
      completionDate: '',
    });
  };

  return (
    <div style={styles.container}>
      <h1>Sales Page</h1>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Client"
          value={newSale.client}
          onChange={(e) => setNewSale({ ...newSale, client: e.target.value })}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Title"
          value={newSale.title}
          onChange={(e) => setNewSale({ ...newSale, title: e.target.value })}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Description"
          value={newSale.description}
          onChange={(e) => setNewSale({ ...newSale, description: e.target.value })}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Price"
          value={newSale.price}
          onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
        />
        <input
          style={styles.input}
          type="date"
          placeholder="Start Date"
          value={newSale.startDate}
          onChange={(e) => setNewSale({ ...newSale, startDate: e.target.value })}
        />
        <input
          style={styles.input}
          type="date"
          placeholder="Cancel Date"
          value={newSale.cancelDate}
          onChange={(e) => setNewSale({ ...newSale, cancelDate: e.target.value })}
        />
        <input
          style={styles.input}
          type="date"
          placeholder="Completion Date"
          value={newSale.completionDate}
          onChange={(e) => setNewSale({ ...newSale, completionDate: e.target.value })}
        />
        <button style={styles.button} onClick={handleAddSale}>
          Add Sale
        </button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Client</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Start Date</th>
            <th>Cancel Date</th>
            <th>Completion Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.client}</td>
              <td>{sale.title}</td>
              <td>{sale.description}</td>
              <td>{sale.price}</td>
              <td>{sale.startDate}</td>
              <td>{sale.cancelDate}</td>
              <td>{sale.completionDate}</td>
              <td>
                <button style={styles.deleteButton}>Delete</button>
                <button style={styles.editButton}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  editButton: {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Sales;
