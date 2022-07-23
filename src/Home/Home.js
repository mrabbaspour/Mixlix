import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Features from "../Feature/Features";
import Choose from "../Choose/Choose";
import Blog from "../Blog/Blog";
import Questions from "../Questions/Questions";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <Brands />
        <Features />
        <Choose />
        <Blog />
        <Questions />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
