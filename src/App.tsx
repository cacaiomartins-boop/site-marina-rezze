import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ForWhom from "./components/ForWhom";
import About from "./components/About";
import Approach from "./components/Approach";
import Steps from "./components/Steps";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import FloatingButton from "./components/FloatingButton";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    document.body.classList.add("hero-loaded");

    const items = document.querySelectorAll(".reveal-item");
    if (!("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    items.forEach((i) => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Divider />
        <ForWhom />
        <Divider />
        <About />
        <Divider />
        <Approach />
        <Divider />
        <Steps />
        <Divider />
        <Services />
        <Divider />
        <Testimonials />
        <Divider />
        <Faq />
        <Divider />
        <Contact />
        <Footer />
      </main>
      <FloatingButton />
    </>
  );
}
