import HeroImage from "../../assets/hero_headphones.png";


import styles from "./Hero.module.css";

function Hero(){
    return(
        <section className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img className={styles.heroImage} src={HeroImage} alt="headphone" />
      </section>
    )
}

export default Hero;