import About from "./components/About/About";
import AppInfo from "./components/AppInfo/AppInfo";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SchoolMobile from "./components/Projects/SchoolMobile/SchoolMobile";
import Westand from "./components/Projects/Westand/Westand";
import WestandPage from "./components/Projects/WestandPage/WestandPage";
import SkillsInfo from "./components/SkillsInfo/SkillsInfo";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main className="w-full h-screen font-roboto container-layout flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Banner />
        <About />
        <SkillsInfo />
        <AppInfo />
        <Westand />
        <SchoolMobile />
        <WestandPage />
        <Contact />
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
