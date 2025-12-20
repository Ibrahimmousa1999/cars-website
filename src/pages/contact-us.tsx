import ContactUs from "../components/HomeComponents/ContactUs";
import { usePageMetadata } from "../hooks/usePageMetadata";

export default function ContactUsPage() {
    usePageMetadata(
        "Contact Us",
        "Get in touch with our team. We're here to answer your questions and provide the best car services."
    );
    return <>
    <div className="pt-3">
        <ContactUs />
    </div>
    </>;
}