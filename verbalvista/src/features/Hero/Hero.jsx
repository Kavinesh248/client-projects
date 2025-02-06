import styles from "./Hero.module.css";
import { assets } from "../../assets/assets";
import "../../index.css";

const Hero = function () {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.hero}>
        <div className={styles.heroTextBox}>
          <h1 className={styles.headingPrimary}>
            A Better <span>Learning</span> Future Starts Here
          </h1>
          <p className={styles.headingDescription}>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary,
          </p>

          <button className={styles.btn}>Start the Journey</button>
          <button className={styles.btn}>Find Courses &rarr;</button>
        </div>
        <div className={styles.heroImageBox}>
          <img src={assets.heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
