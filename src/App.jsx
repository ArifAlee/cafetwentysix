import "./App.css";
import Header from "./components/Header";
import CallToAction from "./components/CallToAction";
import MenuItems from "./components/MenuItems";
import Hero from "./components/Hero";
import Catering from "./components/Catering";
import ViewMenuBtn from "./components/ViewMenuBtn";
import FindUs from "./components/FindUs";
import Loyalty from "./components/Loyalty";
import Footer from "./components/Footer";
import Review from "./components/Review";


function App() {
  return (
    <div className="bg-[var(--bgColor)] max-w-6xl h-auto m-auto lg:border border-white shadow-2xl">
      <Header />
      <Hero />
      <Review />
      <CallToAction />
      <MenuItems />
      <ViewMenuBtn />
      <Catering />
      <FindUs />
      <Loyalty />
      <Footer />
    </div>
  );
}

export default App;
