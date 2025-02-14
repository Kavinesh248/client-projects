import { assets } from "../../assets/assets";
import CourseCard from "../../components/CourseCard/CourseCard";
import styles from "./Courses.module.css";

const Courses = function () {
  console.log(assets.spokenEnglish);
  return (
    <section className={`${styles.sectionCourses} container`}>
      <article className={styles.courseHeader}>
        <h1>Popular Courses</h1>
        <p>
          A curated collection of amazing courses, chosen based on popularity
          and ratings by students.
        </p>
      </article>
      <div className={styles.courseContainer}>
        <CourseCard
          heroImage={assets.spokenEnglish}
          nameBg="#fef1e6"
          nameColor="#f57005"
          courseName="english"
          courseTitle="Master Fluent English: Speak with Confidence."
          coursePrice="2,500"
        />

        <CourseCard
          heroImage={assets.spokenFrench}
          nameBg="#ffeeee"
          nameColor="#e03131"
          courseName="french"
          courseTitle="Speak French Like a Native: Fast & Easy"
          coursePrice="2,500"
        />
      </div>
    </section>
  );
};

export default Courses;
