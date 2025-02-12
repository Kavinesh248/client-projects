import About from "../features/AboutUs/About";
import Courses from "../features/Courses/Courses";
import Header from "../features/Header/Header";
import Hero from "../features/Hero/Hero";
import WhyChooseUs from "../features/WhyChooseUs/WhyChooseUs";

const Home = function () {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChooseUs />
      <About />
      <Courses />
    </main>
  );
};

export default Home;
