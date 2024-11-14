import React from 'react';

function Contacts() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contacts</h1>
      
      <div style={styles.infoSection}>
        <div style={styles.contactDetails}>
          <h2>Ours contacts</h2>
          <p><strong>Telephone:</strong> +380 123 456 789</p>
          <p><strong>Email:</strong> support@crm-system.com</p>
          <p><strong>Address:</strong> Kyivska Street, 10, Kyiv, Ukraine</p>
        </div>

        <div style={styles.map}>
          <h2>We are on the map</h2>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999842473015!2d2.2922925156738793!3d48.85884407928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f01f6e5bbab%3A0x5c1d6e8b1b1e4c0!2sEiffel%20Tower!5e0!3m2!1sen!2sua!4v1631181214732!5m2!1sen!2sua"
            width="100%"
            height="200"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div style={styles.formSection}>
        <h2>Contact us</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" style={styles.input} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" style={styles.input} required />
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" style={styles.textarea} required></textarea>
          </label>
          <button type="submit" style={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  infoSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '20px',
  },
  contactDetails: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  map: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formSection: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Contacts;
