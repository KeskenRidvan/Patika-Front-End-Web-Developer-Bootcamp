import BMI from "./components/bmi/BMI";
import Classes from "./components/classes/Classes";
import Dashboard from "./components/dashboard/dashboard";
import Hero from "./components/hero/Hero";
import Trainers from "./components/trainers/Trainers";
import Purchase from "./components/purchase/Purchase";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";
import Review from "./components/review/Review";
import ContactUs from "./components/contact-us/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Dashboard />
      <Classes />
      <BMI />
      <Trainers />
      <Purchase />
      <Review />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
