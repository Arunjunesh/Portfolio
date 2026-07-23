import "./css/Navbar.css";

const Navbar = () => {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid px-3 px-lg-4">
          <div className="d-flex align-items-center">
            <h1 className=" me-2 text-primary">AJ</h1>
            <h2>Arunjunesh</h2>
          </div>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white fs-2"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav gap-2">
              <a className="nav-link  fs-5 text-light" href="#hero">
                Hero
              </a>
              <a className="nav-link fs-5 text-light" href="#about">
                About
              </a>
              <a className="nav-link fs-5 text-light" href="#skills">
                Skills
              </a>
              <a className="nav-link  fs-5 text-light" href="#projects">
                Projects
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
