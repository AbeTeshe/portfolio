import "./project.css";

const Project = ({img, title, desc,stack, sourceCode, link}) => {
  return (
    <div className="project">
        <img src={img} alt="project" className="project-image"/>
        <h1 className="project-title">{title}</h1>
        <div className="underline"></div>
        <p className="project-desc">{desc}</p>
        <h2 className="stack">Stack</h2>
        {stack.map((item, i) => (
          <ul key={i} className="stack-list">
            <li className="stack-list-item">{item}</li>
          </ul>
        ))}
        <div className="actions">
            <a className="project-link" href={sourceCode} rel="noreferrer"target="_blank">Source Code</a>
            <a className="project-link" href={link} rel="noreferrer" target="_blank">Links</a>
        </div>
    </div>
  )
}

export default Project;