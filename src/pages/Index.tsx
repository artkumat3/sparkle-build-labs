import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Engineering from "@/components/Engineering";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SplashScreen />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Engineering />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
