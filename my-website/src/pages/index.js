import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Home() {
  return (
    <Layout title="Home">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Welcome to BIAN API Documentation</h1>
          <p className="hero__subtitle">This site documents detailed information about BIAN APIs</p>
        </div>
      </header>
      <main>
        <div className="container">
          <p>Explore the documentation to find detailed information about various BIAN APIs.</p>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
