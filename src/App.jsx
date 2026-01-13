import { useEffect, useState } from "react";
import Banner from "./components/banner";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ContactModal } from "./components/contact-modal";
import HeroSection from "./sections/hero-section";
import HowItWorksSection from "./sections/how-it-works-section";
import BenefitsSection from "./sections/benefits-section";
import TopicSection from "./sections/topic-section";
import FeaturedTestimonialSection from "./sections/featured-testimonial-section";
import MeetOurTeamSection from "./sections/meet-our-team-section";
import OurTestimonialsSection from "./sections/our-testimonials-section";
import OurPricingSection from "./sections/our-pricing-section";
import FaqSection from "./sections/faq-section";
import CallToActionSection from "./sections/call-to-action-section";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Força scroll para o topo ao carregar/recarregar a página
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <LenisScroll />
      <Banner />
      <Navbar onOpenModal={openModal} />
      <main className="">
        <div className="container-1000">
          <HeroSection onOpenModal={openModal} />
          <BenefitsSection />
          <TopicSection onOpenModal={openModal} />
          <HowItWorksSection />
          <MeetOurTeamSection />
          <OurTestimonialsSection />
          <FeaturedTestimonialSection onOpenModal={openModal} />
          <OurPricingSection onOpenModal={openModal} />
          <FaqSection onOpenModal={openModal} />
          <CallToActionSection />
        </div>
      </main>
      <Footer onOpenModal={openModal} />
      <ContactModal open={isModalOpen} onClose={closeModal} />
    </>
  );
}
