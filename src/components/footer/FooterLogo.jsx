import { Link } from "react-router-dom";
import Logo from "/src/assets/logos/logo.svg";

function FooterLogo() {
  return (
    <>
      <Link to="/" className="footer__logo" aria-label="Home - Loopstudios">
        <img src={Logo} alt="" />
      </Link>
    </>
  );
}

export default FooterLogo;
