import Image from "next/image";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import TeamSection from "./components/Home/TeamSection";
import ServicesSection from "./components/Home/ServicesSection";
import ClientSuccessSection from "./components/Home/ClientSuccessSection";
import TestimonialsSection from "./components/Home/TestimonialsSection";
import ServicesPage from "./services/ServicesPage";
import WhyChooseUs from "./components/About/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ServicesPage />
      {/* <ClientSuccessSection /> */}
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
}
