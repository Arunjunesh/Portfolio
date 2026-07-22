const Footer = () => {
  return (
    <footer className="py-4 px-3 text-center border-top border-secondary">
      <div className="mb-3">
        <a
          href="https://github.com/Arunjunesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github fs-3 me-5"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arunjunesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin fs-3 me-5"></i>
        </a>
        <a href="mailto:arunjunesh05@gmail.com">
          <i className="bi bi-envelope fs-3 me-5"></i>
        </a>
      </div>
      <p className="mb-0 fs-4 text-light">
        Thanks for visiting! Designed & Developed by Arunjunesh
      </p>
    </footer>
  );
};

export default Footer;
