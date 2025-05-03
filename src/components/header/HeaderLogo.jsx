import { Link } from "react-router-dom";
import Logo from "/src/assets/logos/logo.svg";

function HeaderLogo() {
  return (
    <>
      <Link to="/" className="header__logo" aria-label="Home - Loopstudios">
        <img src={Logo} alt="" />
      </Link>
    </>
  );
}

export default HeaderLogo;
