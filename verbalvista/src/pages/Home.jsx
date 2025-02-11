import About from "../features/AboutUs/About";
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
    </main>
  );
};

export default Home;
