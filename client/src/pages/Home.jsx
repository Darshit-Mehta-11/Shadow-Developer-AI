import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import GithubInput from "../components/GithubInput";
import BackgroundEffects from "../components/BackgroundEffects";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      <BackgroundEffects />

      <Navbar />

      <Hero />

      <GithubInput />

      <StatsSection />

    </div>
  );
};

export default Home;