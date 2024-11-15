import React, { useState } from 'react';

function Supports() {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    clientFullName: '',
    topic: '',
    description: '',
    receivedAt: '',
  });

  const handleAddRequest = () => {
    if (validateRequest(newRequest)) {
      setRequests([...requests, { ...newRequest, id: Date.now() }]);
      setNewRequest({ clientFullName: '', topic: '', description: '', receivedAt: '' });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  const handleDeleteRequest = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const validateRequest = (request) => {
    const { clientFullName, topic, description, receivedAt } = request;
    return clientFullName && topic && description && receivedAt;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Supports Page</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Client Full Name"
          value={newRequest.clientFullName}
          onChange={(e) => setNewRequest({ ...newRequest, clientFullName: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Topic"
          value={newRequest.topic}
          onChange={(e) => setNewRequest({ ...newRequest, topic: e.target.value })}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={newRequest.description}
          onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
          style={styles.textarea}
        />
        <input
          type="date"
          value={newRequest.receivedAt}
          onChange={(e) => setNewRequest({ ...newRequest, receivedAt: e.target.value })}
          style={styles.input}
        />
        <button onClick={handleAddRequest} style={styles.addButton}>
          Add Request
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Client Full Name</th>
            <th>Topic</th>
            <th>Description</th>
            <th>Received At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.clientFullName}</td>
              <td>{request.topic}</td>
              <td>{request.description}</td>
              <td>{request.receivedAt}</td>
              <td>
                <button onClick={() => handleDeleteRequest(request.id)} style={styles.deleteButton}>
                  Delete
                </button>
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
  title: {
    marginBottom: '20px',
  },
  form: {
    marginBottom: '20px',
  },
  input: {
    width: '95%',
    fontSize: '16px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '95%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  addButton: {
    width: '95%',
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
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  tableRow: {
    backgroundColor: '#fff',
  },
  tableCell: {
    border: '1px solid #ccc',
    padding: '10px',
  },
};

export default Supports;
