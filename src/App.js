import "./App.scss";
import Topbar from "./components/global/Topbar/Topbar";
import Header from "./components/global/Header/Header";
import Hero from "./components/Home/Hero/Hero";
import Clients from "./components/Home/Clients/Clients";
import Week from "./components/Home/Week/Week";
import Bestseller from "./components/Home/Bestseller/Bestseller";
import Wedo from "./components/Home/Wedo/Wedo";
import Services from "./components/Home/Services/Services";
import Featured from "./components/Home/Featured/Featured";
import Footer from "./components/global/Footer/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Clients />
      <Week />
      <Bestseller />
      <Wedo />
      <Services />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
