import React from 'react';
import { Link } from 'react-router-dom'; // Для посилань всередині маршрутизатора

function Navigation() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Головна</Link>
      <Link to="/sallers" style={styles.link}>Продавці</Link>
      <Link to="/buyers" style={styles.link}>Покупці</Link>
      <Link to="/products" style={styles.link}>Товари</Link>
      <Link to="/sales" style={styles.link}>Продажі</Link>
      <Link to="/support" style={styles.link}>Підтримка</Link>
      <Link to="/contacts" style={styles.link}>Наші контакти</Link>
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
