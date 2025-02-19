import styles from "./Testimonials.module.css";
import { assets } from "../../assets/assets";

const testimonials = [
  {
    id: 1,
    course: "Spoken English",
    quote: "Gained Confidence in Speaking!",
    text: "Before joining, I struggled with speaking English fluently. Now, I can confidently communicate in daily life. Amazing experience!",
    image: assets.client1,
    name: "Rahul Sharma",
    position: "Student",
  },
  {
    id: 2,
    course: "French Tuition",
    quote: "Mastered French in No Time!",
    text: "The classes were interactive, and I learned practical French phrases that helped me in my travels. Highly recommended!",
    image: assets.client2,
    name: "Emily Carter",
    position: "Traveler",
  },
  {
    id: 3,
    course: "Phonetics",
    quote: "Improved My Pronunciation!",
    text: "I used to mispronounce many words. This phonetics course helped me refine my speech and sound more natural.",
    image: assets.client3,
    name: "Alex Johnson",
    position: "Teacher",
  },
  // {
  //   id: 4,
  //   course: "IELTS Training",
  //   quote: "Achieved My Target Band!",
  //   text: "Thanks to this training, I scored 8.0 on my IELTS exam! The tips and strategies were extremely helpful.",
  //   image: assets.client4,
  //   name: "Sophia Lee",
  //   position: "IELTS Aspirant",
  // },
];

const Testimonials = () => {
  return (
    <section className={`${styles.sectionContainer} container`}>
      <h2>Testimonials</h2>
      <h1>What&apos;s our students say?</h1>
      <div className={styles.sectionGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.sectionCard}>
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <h4>{testimonial.quote}</h4>
            <p>{testimonial.text}</p>
            <img src={testimonial.image} alt={testimonial.name} />
            <h5>{testimonial.name}</h5>
            <h6>{testimonial.position}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
