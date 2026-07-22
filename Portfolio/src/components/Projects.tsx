import { PeopleFill, HandIndexThumb } from "react-bootstrap-icons";
import "./css/Projects.css";

const projects = [
  {
    icon: PeopleFill,
    title: "Employee Management System",
    description:
      "A full-stack employee management system with authentication, employee CRUD operations, department management, search, filtering, and a responsive React interface powered by Django REST APIs.",
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "REST API",
      "MySQL",
      "Bootstrap",
    ],
    github: "",
  },
  {
    icon: HandIndexThumb,
    title: "Real-Time Sign Language Translation",
    description:
      "A real-time sign language recognition application that detects hand gestures from webcam input and translates them into text using MediaPipe, YOLOv8, and deep learning models.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "YOLOv8",
      "PyTorch",
      "NumPy",
    ],
    github: "",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="d-flex mb-3 justify-content-center text-decoration-underline">
        Projects
      </h2>

      <div className="container d-flex justify-content-center">
        <div className="row">
          {projects.map((item) => {
            const Icon = item.icon;
            return (
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card p-3 " id="project-card">
                  <div className="d-flex align-items-center">
                    <div className="icon-box me-2">
                      <Icon className=" project-icon text-primary fs-2  flex-shrink-0" />
                    </div>
                    <h4 className="text-light mb-0" id="title">
                      {item.title}
                    </h4>
                  </div>
                  <ul className="d-flex flex-wrap gap-2 mt-4">
                    {item.technologies.map((technology) => {
                      return (
                        <li className="text-light me-4 ">{technology} </li>
                      );
                    })}
                  </ul>
                  <div className=" mt-auto p-3 ">
                    <p className=" text-light " id="description">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto mx-2">
                    <button className="btn btn-primary w-100">
                      <i className="bi bi-github me-2"></i>GitHub
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
