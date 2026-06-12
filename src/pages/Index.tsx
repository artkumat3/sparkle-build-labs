import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Aryan Gupta — Full-stack & AI Automation Developer</title>
        <meta
          name="description"
          content="Aryan Gupta is a full-stack developer from Mau, UP, building AI-powered web apps and automations with React, Next.js, Python, Supabase, and OpenAI."
        />
        <link rel="canonical" href="https://sparkle-build-labs.lovable.app/" />
        <meta property="og:url" content="https://sparkle-build-labs.lovable.app/" />
        <meta property="og:title" content="Aryan Gupta — Full-stack & AI Automation Developer" />
        <meta property="og:description" content="Full-stack developer building AI-powered web apps and automations." />
      </Helmet>
      <SplashScreen />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
