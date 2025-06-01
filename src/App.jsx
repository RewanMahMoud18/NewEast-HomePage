import "./App.css";
import Banner from "./Components/Banner/Banner";
import Benifits from "./Components/Benifits/Benifits";
import Brands from "./Components/Brands/Brands";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import { Header } from "./Components/Header/Header";
import { LoginNav } from "./Components/LoginNav/LoginNav";
import { Navbar } from "./Components/Navbar/Navbar";
import PopularCategories from "./Components/PopularCategories/PopularCategories";
import Sliders from "./Components/Slider/Sliders";
import Testimonials from "./Components/Testimonial/Testimonials";

function App() {
  return (
    <div className="App">
      <LoginNav />
      <Header />
      <Navbar />
      <Banner />
      <Benifits />
      <PopularCategories />
      <Brands />
      <Sliders />
      <Counter />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
