import "./projectList.css";
import Project from '../Project/Project'
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="project-list" id="projects">
        <div className="project-list-texts">
            <h1 className="project-list-title">My Projects</h1>
            <p p className="project-list-desc">These are projects I built so far using frontend and backend Technologies.</p>
            <div className="project-underline"></div>
        </div>
        <div className="project-list-list">
            {projects.map((item) => (
                <Project 
                   key={item.id} 
                   img={item.img} title={item.title} 
                   desc={item.desc}
                   stack={item.stack}
                   sourceCode={item.sourceCode}
                   link={item.link}/>
            ))}
        </div>
    </div>
  )
};

export default ProjectList;