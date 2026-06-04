import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GithubInput from "./components/GithubInput";
import MatrixBackground from "./components/MatrixBackground";
import Footer from "./components/Footer";

function App() {

  return (

    <div className="
      min-h-screen
      bg-[#020617]
      text-white
      overflow-x-hidden
    ">

      <MatrixBackground />

      <Navbar />

      <div className="pt-28">
        <HeroSection />
      </div>

      <GithubInput />

      <Footer />
    </div>

  );
}

export default App;