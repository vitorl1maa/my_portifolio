import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main className="w-full h-screen font-roboto container-layout flex flex-col">
      <Navbar />
      <Banner />
      <About />
      <Projects />
    </main>
  );
}

export default App;
