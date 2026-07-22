import { CodeSlash, Server, Database, Tools } from "react-bootstrap-icons";
import "./css/SkillCards.css";

const skills = [
  {
    icon: CodeSlash,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Python", "Django", "REST API", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "SQLite"],
  },
  {
    icon: Tools,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

const SkillCards = () => {
  return (
    <section id="skills">
      <div className="container" id="container">
        <h2 className="d-flex mt-3 text-decoration-underline justify-content-center    ">
          skills
        </h2>
        <div className="row  justify-content-center">
          {skills.map((item) => {
            const Icon = item.icon;
            return (
              <>
                <div className="card col-5 col-md m-2" id="card-body">
                  <div className="d-flex align-items-center mt-3  ms-3 mb-2">
                    <Icon className="text-primary fs-4 m-1" />
                    <span className=" text-light m-1" id="card-title">
                      {item.title}
                    </span>
                  </div>
                  <ul className="ms-3 ">
                    {item.items.map((skill) => {
                      return <li className="text-light mb-2">{skill}</li>;
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
