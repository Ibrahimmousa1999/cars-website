import Hero from "../components/HomeComponents/Hero";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import CenterServices from "../components/HomeComponents/CenterServices";
import OtherServies from "../components/HomeComponents/OtherServies";
import Testimonials from "../components/HomeComponents/Testimonials";
import ContactUs from "../components/HomeComponents/ContactUs";
export default function HomePage() {
  return (
    <main>
       <Hero description="Odio tellus aliquet at tellus. Fames nulla nulla consequat amet,
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
