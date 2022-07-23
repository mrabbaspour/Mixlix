import "./ContactUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm";
import Location from "./Location";
import Branch from "./Branch";

export default function ContactUs() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="contact-bg">
          <h1>میکس لیکس</h1>
          <h4>تماس با ما</h4>
        </div>
        <ContactForm />
        <Location />
        <Branch />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
