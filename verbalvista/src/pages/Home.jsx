import About from "../features/AboutUs/About";
import Courses from "../features/Courses/Courses";
import Cta from "../features/CtaSection/Cta";
import Footer from "../features/Footer/Footer";
import Header from "../features/Header/Header";
import Hero from "../features/Hero/Hero";
// import Testimonials from "../features/Testimonials/Testimonials";
import WhyChooseUs from "../features/WhyChooseUs/WhyChooseUs";

const Home = function () {
  return (
    <main>
      <Header />
      <Hero />
      <WhyChooseUs />
      <About />
      <Courses />
      {/* <Testimonials /> */}
      <Cta />
      <Footer />
    </main>
  );
};

export default Home;
