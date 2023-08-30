import { Fragment } from "react";
import About from "../components/about/About";
import Header from "../components/header/Header";
import AboutUs from "../components/about-us/About-us";
import Services from "../components/services/Services";
import Articles from "../components/articles/Articles";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <AboutUs />
      <Services/>
      <Articles/>
      <Footer/>
    </Fragment>
  );
}

export default HomePage;