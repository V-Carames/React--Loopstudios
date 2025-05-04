import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import About from "../sections/About";
import Creations from "../sections/Creations";

function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Creations />
      </main>
      <Footer />
    </>
  );
}

export default Home;
