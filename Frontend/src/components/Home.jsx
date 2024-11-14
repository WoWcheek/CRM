import React from 'react';

function Home() {
  const features = [
    { title: 'Управління контактами', description: 'Ведіть повну базу клієнтів.' },
    { title: 'Воронка продажів', description: 'Відстежуйте всі етапи продажів.' },
    { title: 'Підтримка клієнтів', description: 'Швидко реагуйте на запити.' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Вітаємо у CRM-системі</h1>
      <p style={styles.paragraph}>Ефективно керуйте своїми контактами, продажами та підтримкою!</p>
      <div style={styles.cardContainer}>
        {features.map((feature, index) => (
          <div key={index} style={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
    textAlign: 'left',
  },
  heading: {
    color: 'white', // Колір тексту
    fontSize: '64px', // Розмір тексту
  },
  paragraph: {
    color: 'white', // Колір тексту
    fontSize: '42px', // Розмір тексту
  },
};


export default Home;
