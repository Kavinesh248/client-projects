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

          <button className={styles.btn}>Start Now</button>
          <button className={`${styles.btn} ${styles.btnWhite}`}>
            Find Courses &rarr;
          </button>

          <aside className={styles.deliverdReview}>
            <div className={styles.reviewImgs}>
              <img src={assets.client1} alt="client image" />
              <img src={assets.client2} alt="client image" />
              <img src={assets.client3} alt="client image" />
              <img src={assets.client4} alt="client image" />
              <img src={assets.client5} alt="client image" />
              <img src={assets.client6} alt="client image" />
            </div>
            <p className={styles.reviewText}>
              Join our community to extend your <br /> knowledge!
            </p>
          </aside>
        </div>
        <div className={styles.heroImageBox}>
          <img src={assets.heroImage} alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
