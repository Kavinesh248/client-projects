import styles from "./Cta.module.css";

const Cta = function () {
  return (
    <section className={`${styles.sectionCta} `} id="cta">
      <div className={styles.cta}>
        <div className={styles.ctaTextBox}>
          <h2 className={styles.headingSecondary}>
            Get your Introductory Class for free.
          </h2>
          <p className={styles.ctaText}>
            Fluent, confident, and career-ready—your language journey starts
            today! Learn at your pace, anytime, anywhere. And your first lesson
            is on us!
          </p>

          <form className={styles.ctaForm} name="signUp">
            <div>
              <label htmlFor="fullName">Your Full Name</label>
              <input
                id="full-name"
                type="text"
                placeholder="John Smith"
                name="full-name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="me@gmail.com"
                name="email"
                required
              />
            </div>
            {/* <div>
              <label htmlFor="options">Where did you hear from us?</label>
              <select id="options" name="options">
                <option value="">Please select a option</option>
                <option value="friends and family">Friends and family</option>
                <option value="youtube">YouTube</option>
                <option value="podcast">Podcast</option>
                <option value="ad">Facebook ad</option>
                <option value="others">Others</option>
              </select>
            </div> */}

            <button className={`${styles.btn} ${styles.btnForm}`}>
              Sign up now
            </button>
          </form>
        </div>

        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
