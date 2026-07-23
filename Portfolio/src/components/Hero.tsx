import "./css/Hero.css";
import hero from "../assets/pcImage.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container-fluid px-3 px-md-4 py-5">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6">
            <p className="text-primary mb-0 mt-3 fs-5 fw-bold">Hi, I'm</p>
            <p className="text-light mb-0 fs-1 fw-bold">Arunjunesh</p>
            <p className="text-primary mb-0 fs-5 fw-bold">
              Full Stack Developer | React • Django • Python
            </p>
            <p
              className="text-light mb-0 fw-bold mb-3"
              style={{ fontSize: "14px" }}
            >
              I build modern, responsive, and scalable web applications from
              front to back. Passionate about creating intuitive user interfaces
              with React and developing robust backend services using Django
              REST Framework. I enjoy turning ideas into real-world applications
              while continuously learning new technologies.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <a
                href="./Arunjunesh_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-download"></i> Download Resume
              </a>
              <a
                href="https://github.com/Arunjunesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary text-light"
              >
                <i className="bi bi-github"></i> Github
              </a>
              <a
                href="https://www.linkedin.com/in/arunjunesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary text-light"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a
                href="mailto:arunjunesh05@gmail.com"
                className="btn btn-outline-secondary text-light"
              >
                <i className="bi bi-envelope"></i> Contact Me
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src={hero}
              className="img-fluid hero-image"
              id="hero-image"
              alt="Illustration of a computer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
