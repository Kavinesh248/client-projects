import { assets } from "../../assets/assets";
import styles from "./Courses.module.css";

const Courses = function () {
  return (
    <section className={`${styles.sectionCourses} container`}>
      <div className={styles.cardContainer}>
        <img
          className={styles.heroImage}
          src={assets.course1}
          alt="Spinning glass cube"
        />
        <main className={styles.mainContent}>
          <div className={styles.courseContentWrapper}>
            <div className={styles.courseRatingWrapper}>
              <div className={styles.ratingStar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>4.3</span>
              <span>(31)</span>
            </div>

            <p className={styles.courseName}>Spoken English</p>
          </div>
          <p className={styles.courseTitle}>Learn Spoken English.</p>
        </main>
        {/* <div className={styles.cardAttribute}>
          <img
            src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
            alt="avatar"
            className={styles.smallAvatar}
          />
          <p>
            Creation of
            <span className={styles.spanEl}>
              <a href="#">Jules Wyvern</a>
            </span>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Courses;
