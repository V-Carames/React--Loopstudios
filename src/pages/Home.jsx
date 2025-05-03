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
    </>
  );
}

export default Home;
