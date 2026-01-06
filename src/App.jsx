import Banner from "./components/banner";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
  return (
    <>
      <LenisScroll />
      <Banner />
      <Navbar />
      <main className="">
        <div className="container-1000">
          <HeroSection />
          <BenefitsSection />
          <TopicSection />
          <HowItWorksSection />
          <MeetOurTeamSection />
          <OurTestimonialsSection />
          <FeaturedTestimonialSection />
          <OurPricingSection />
          <FaqSection />
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
