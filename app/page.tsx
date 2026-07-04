import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueProps from "@/components/ValueProps";
import EnterpriseSolutions from "@/components/EnterpriseSolutions";
import FocusPrinciples from "@/components/FocusPrinciples";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1">
      <Background />
      <Nav />
      <Hero />
      <ValueProps />
      <About />
      <Skills />
      <EnterpriseSolutions />
      <Projects />
      <Experience />
      <Timeline />
      <Achievements />
      <FocusPrinciples />
      <GithubStats />
      <Contact />
      <Footer />
      <ScrollTop />
      <JsonLd />
    </div>
  );
}
