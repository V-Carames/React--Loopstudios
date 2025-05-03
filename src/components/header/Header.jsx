import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import Hero from "../../sections/Hero";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo />
        <HeaderNav />
      </div>
      <Hero heading="Immersive experiences that deliver" />
    </header>
  );
}

export default Header;
