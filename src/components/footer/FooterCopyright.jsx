function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <p className="footer__copyright">
      © {currentYear} Loopstudios. All rights reserved.
    </p>
  );
}

export default FooterCopyright;
