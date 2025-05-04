import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterSocialMedias from "./FooterSocialMedias";
import FooterCopyright from "./FooterCopyright";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__container">
          <FooterLogo />
          <FooterNav />
        </div>
        <div>
          <FooterSocialMedias />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
