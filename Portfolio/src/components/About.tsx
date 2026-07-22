import {
  Person,
  Envelope,
  GeoAlt,
  Mortarboard,
  Building,
  Calendar,
} from "react-bootstrap-icons";
import "./css/About.css";

const personalInfo = [
  {
    icon: Person,
    title: "Name",
    value: "Arunjunesh",
  },
  {
    icon: Envelope,
    title: "Email",
    value: "arunjunesh05@gmail.com",
  },
  {
    icon: GeoAlt,
    title: "Location",
    value: "Chennai, Tamil Nadu, India",
  },
  {
    icon: Mortarboard,
    title: "Degree",
    value: "B.Tech Information Technology",
  },
  {
    icon: Building,
    title: "University",
    value: "Vels University",
  },
  {
    icon: Calendar,
    title: "Batch",
    value: "2022 - 2026",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid px-3 px-md-4 py-5" id="about-me">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <div className="card border-0 p-4 text-center" id="person-icon">
              <i className="bi bi-person display-1 text-primary"></i>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-5" id="about-me-text">
            <p className="fs-3 fw-bold mb-3">About Me</p>
            <p className="mb-3 ">
              I'm a B.Tech Information Technology graduate (2026) passionate
              about full-stack web development. I build responsive web
              applications using React, Django, Python, and MySQL, and enjoy
              creating clean, user-friendly, and scalable solutions while
              continuously learning new technologies.
            </p>
            <p className="mb-0 ">
              I enjoy solving real-world problems through code and continuously
              improving my skills by building personal projects and exploring
              modern web technologies. My goal is to contribute to impactful
              software while growing as a Full Stack Developer in a
              collaborative environment.
            </p>
          </div>

          <div className="col-12 col-md-4 col-lg-4" id="personal-info">
            {personalInfo.map((item) => {
              const Icon = item.icon;
              return (
                <>
                  <div className="row mb-3 align-items-center" key={item.title}>
                    <div className="col-1">
                      <Icon />
                    </div>

                    <div className="col-4">
                      <p className="mb-0">{item.title}</p>
                    </div>

                    <div className="col-7">
                      <p className="mb-0">{item.value}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
