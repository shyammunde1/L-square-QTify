import React from "react";
import styles from './HomePage.module.css'; 

import HeroImage from '../assets/hero_headphones.png';

function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTitle}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img className={styles.heroImage} src={HeroImage} alt='headphone'/>
    </section>
  );
}

export default HomePage;