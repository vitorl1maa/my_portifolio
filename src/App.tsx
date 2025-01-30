import About from "./components/About/About";
import AppInfo from "./components/AppInfo/AppInfo";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import SkillsInfo from "./components/SkillsInfo/SkillsInfo";

function App() {
  return (
    <main className="w-full h-screen font-roboto container-layout flex flex-col">
      <Navbar />
      <Banner />
      <About />
      <SkillsInfo />
      <AppInfo />
    </main>
  );
}

export default App;
