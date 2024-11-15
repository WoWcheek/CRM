import React, { useState } from 'react';

function Buyers() {
  const [buyers, setBuyers] = useState([]);
  const [newBuyer, setNewBuyer] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    country: '',
    phoneNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const validateInput = () => {
    const newErrors = {};
    const phoneRegex = /^\d{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const genderRegex = /^(male|female|other)$/i; 
    const countryRegex = /^[a-zA-Z\s]+$/; 

    if (!newBuyer.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!genderRegex.test(newBuyer.gender)) {
      newErrors.gender = 'Gender must be "male", "female", or "other".';
    }

    if (!dateRegex.test(newBuyer.dateOfBirth)) {
      newErrors.dateOfBirth = 'Date of birth must be in YYYY-MM-DD format.';
    }

    if (!countryRegex.test(newBuyer.country)) {
      newErrors.country = 'Country must contain only letters.';
    }

    if (!phoneRegex.test(newBuyer.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    }

    if (!emailRegex.test(newBuyer.email)) {
      newErrors.email = 'Invalid email format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleAddBuyer = () => {
    if (validateInput()) {
      setBuyers([...buyers, { ...newBuyer, id: Date.now() }]);
      setNewBuyer({
        fullName: '',
        gender: '',
        dateOfBirth: '',
        country: '',
        phoneNumber: '',
        email: '',
      });
      setErrors({});
    }
  };

  const handleDeleteBuyer = (id) => {
    setBuyers(buyers.filter((buyer) => buyer.id !== id));
  };

  const filteredBuyers = buyers.filter((buyer) => {
    return (
      buyer.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buyer.phoneNumber.includes(searchQuery)
    );
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Buyers Page</h1>

      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search by Full Name or Phone Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Full Name"
          value={newBuyer.fullName}
          onChange={(e) => setNewBuyer({ ...newBuyer, fullName: e.target.value })}
          style={styles.input}
        />
        {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}

        <input
          type="text"
          placeholder="Gender (male/female/other)"
          value={newBuyer.gender}
          onChange={(e) => setNewBuyer({ ...newBuyer, gender: e.target.value })}
          style={styles.input}
        />
        {errors.gender && <p style={styles.error}>{errors.gender}</p>}

        <input
          type="date"
          placeholder="Date of Birth"
          value={newBuyer.dateOfBirth}
          onChange={(e) => setNewBuyer({ ...newBuyer, dateOfBirth: e.target.value })}
          style={styles.input}
        />
        {errors.dateOfBirth && <p style={styles.error}>{errors.dateOfBirth}</p>}

        <input
          type="text"
          placeholder="Country"
          value={newBuyer.country}
          onChange={(e) => setNewBuyer({ ...newBuyer, country: e.target.value })}
          style={styles.input}
        />
        {errors.country && <p style={styles.error}>{errors.country}</p>}

        <input
          type="text"
          placeholder="Phone Number (10 digits)"
          value={newBuyer.phoneNumber}
          onChange={(e) => setNewBuyer({ ...newBuyer, phoneNumber: e.target.value })}
          style={styles.input}
        />
        {errors.phoneNumber && <p style={styles.error}>{errors.phoneNumber}</p>}

        <input
          type="email"
          placeholder="Email"
          value={newBuyer.email}
          onChange={(e) => setNewBuyer({ ...newBuyer, email: e.target.value })}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <button type="button" onClick={handleAddBuyer} style={styles.button}>
          Add Buyer
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBuyers.map((buyer) => (
            <tr key={buyer.id}>
              <td>{buyer.fullName}</td>
              <td>{buyer.gender}</td>
              <td>{buyer.dateOfBirth}</td>
              <td>{buyer.country}</td>
              <td>{buyer.phoneNumber}</td>
              <td>{buyer.email}</td>
              <td>
                <button onClick={() => handleDeleteBuyer(buyer.id)} style={styles.deleteButton}>
                  Delete
                </button>
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
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
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
    border: '1px solid #ccc',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    margin: '0',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
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

export default Buyers;
