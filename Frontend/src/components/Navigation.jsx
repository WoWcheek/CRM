import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>HOME</Link>      
      <Link to="/buyers" style={styles.link}>Buyers</Link>
      <Link to="/sales" style={styles.link}>Sales</Link>
      <Link to="/analyses" style={styles.link}>Analyses</Link>
      <Link to="/supports" style={styles.link}>Supports</Link>
      <Link to="/contacts" style={styles.link}>Contacts</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navigation;
