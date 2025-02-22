import { assets } from "../../assets/assets";
import CourseCard from "../../components/CourseCard/CourseCard";
import { courses } from "../../utils/courseDetails";
import styles from "./Courses.module.css";

const Courses = function () {
  console.log(assets.spokenEnglish);
  return (
    <section className={`${styles.sectionCourses} container`} id="course">
      <article className={styles.courseHeader}>
        <h1>Popular Courses</h1>
        <p>
          A curated collection of amazing courses, chosen based on popularity
          and ratings by students.
        </p>
      </article>
      <div className={styles.courseContainer}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
