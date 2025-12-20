import Hero from "../components/HomeComponents/Hero";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import CenterServices from "../components/HomeComponents/CenterServices";
import OtherServies from "../components/HomeComponents/OtherServies";
import Testimonials from "../components/HomeComponents/Testimonials";
import ContactUs from "../components/HomeComponents/ContactUs";
import heroImage from "../assets/images/hero-image.png";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function HomePage() {
  usePageMetadata(
    "Home",
    "Welcome to our car services. We provide top-quality automotive solutions for all your needs."
  );
  return (
    <main>
       <Hero image={heroImage}
       description="Odio tellus aliquet at tellus. Fames nulla nulla consequat amet,
            facilisis. Ultrices pulvinar auctor id elementum nisi tincidunt
            tristique vestibulum. At lectus non, gravida." header="We Always Create the Best Quality Products for Customers" />
       <WhyChooseUs />
       <CenterServices />
       <OtherServies />
       <Testimonials />
       <ContactUs />
    </main>
  );
}
