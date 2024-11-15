import React from 'react';

function Home() {
  const features = [
    { title: 'Contact Management', description: 'Maintain a complete client database.' },
    { title: 'Sales Funnel', description: 'Track all stages of sales.' },
    { title: 'Customer Support', description: 'Respond quickly to inquiries.' },
  ];
  

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome to the CRM System</h1>
        <p style={styles.paragraph}>Effectively manage your contacts, sales, and support!</p>
      </div>
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
    fontSize: '24px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '250px',
    textAlign: 'left',
  },
  textContainer: {
    backgroundColor: '#fff', 
    padding: '10px', 
    display: 'inline-block', 
    borderRadius: '10px', 
  },
  heading: {
    color: 'black', 
    fontSize: '42px',
  },
  paragraph: {
    color: 'black', 
    fontSize: '36px', 
  },
};


export default Home;
