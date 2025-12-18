import Hero from "../components/HomeComponents/Hero";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import CenterServices from "../components/HomeComponents/CenterServices";
import OtherServies from "../components/HomeComponents/OtherServies";
import Testimonials from "../components/HomeComponents/Testimonials";
import ContactUs from "../components/HomeComponents/ContactUs";
export default function HomePage() {
  return (
    <main>
       <Hero />
       <WhyChooseUs />
       <CenterServices />
       <OtherServies />
       <Testimonials />
       <ContactUs />
    </main>
  );
}
