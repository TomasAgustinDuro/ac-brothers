import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FirstSection from "./sections/first/FirstSection";
import SecondSection from "./sections/second/SecondSection";
import ThirdSection from "./sections/third/ThirdSection";
import FourthSection from "./sections/fourth/FourthSection";
import FifthSection from "./sections/fifth/FifthSection";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </>
  );
}

export default App;
