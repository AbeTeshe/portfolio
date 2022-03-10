import "./resume.css";
import { useState } from "react";
import { School, Work, Computer, Language, Interests } from "@mui/icons-material";
import {skill, languages} from '../../data';

const Resume = () => {
  const [index, setIndex] = useState(0);
  const detail = [<Education />, <Experience />, <Skills/>, <Languages />, <Interest />]
  return (
    <div className="resume" id="resume">
        <h1 className="resume-title">My Resume</h1>
        <p className="resume-sub">Here is my educational background, work experience and my skills.</p>
        <div className="resume-underline"></div>
        <div className="resumeContainer">
            <div className="resumeLeft">
                <div className="icons">
                    <p onClick={() => setIndex(0)} className={index === 0  && 'active'}><School /></p>
                    <p onClick={() => setIndex(1)} className={index === 1  && 'active'}><Work /></p>
                    <p onClick={() => setIndex(2)} className={index === 2  && 'active'}><Computer/></p>
                    <p onClick={() => setIndex(3)} className={index === 3  && 'active'}><Language/></p>
                    <p onClick={() => setIndex(4)} className={index === 4  && 'active'}><Interests/></p>
                </div>
                <div className="titles">
                    <p onClick={() => setIndex(0)} className={index === 0  && 'active'}>Education</p>
                    <p onClick={() => setIndex(1)} className={index === 1  && 'active'}>Work Experience</p>
                    <p onClick={() => setIndex(2)} className={index === 2  && 'active'}>Programming Skills</p>
                    <p onClick={() => setIndex(3)} className={index === 3  && 'active'}>Languages</p>
                    <p onClick={() => setIndex(4)} className={index === 4  && 'active'}>Interests</p>
                </div>
            </div>
            <div className="details">
                {detail[index]}
            </div>
        </div>
    </div>
  )
}

const Education = () => {
    return (
        <div>
           <div className="education">
                <div>
                    <h3>Addis Ababa University, Ethiopia</h3>
                    <p>Bachelor of Science in Computer Engineering</p>
                </div>
                <div>
                    <p className="duration">2015-2020</p>
                </div>
           </div>
           <div className="education">
                <div>
                    <h3>Python and ReactJS on Coursera Online Course</h3>
                    <p>Rice University and Hong Kong Science and Technology Respectively</p>
                </div>
                <div>
                    <p className="duration">2018  and 2021</p>
                </div>
           </div>
           <div className="education">
                <div>
                    <h3>Bishoftu High School, Ethiopia</h3>
                    <p>High School Education.</p>
                </div>
                <div>
                    <p className="duration">2011-2015</p>
                </div>
           </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div>
           <div className="experience">
                <div>
                    <h3>Toheey Technologies PLC </h3>
                    <h6>Intern Website Developer</h6>
                    <p>- Worked on a website for hotel management system</p>
                    <p>- The website was developed using MEAN Stack.</p>
                </div>
                <div>
                    <p className="duration">2019-2020</p>
                </div>
           </div>
           <div className="experience">
                <div>
                    <h3>CNET Software Technologies PLC</h3>
                    <h6>Functional Consultant </h6>
                    <p>- Preparing Software Requirement specifications(SRS) for new projects</p>
                    <p>- Implement the database of the project for the client's ERP implementation.</p>
                    <p></p>
                </div>
                <div>
                    <p className="duration">2020-Present</p>
                </div>
           </div>
        </div>
    )
}

const Skills = () => {
    const index = skill.length/2;
    
    const firstHalf = skill.slice().splice(0, index);
    const secondHalf = skill.slice().splice(-index);
    return (
        <div className="skills">
            <div className="firstHalf">
                {firstHalf.map((item, i) => (
                    <div key={i} className="skill-item">
                        <h4>{item.language}</h4>
                        <div style={{width: `${item.percent * 2}px`, backgroundColor: '#59b256'}} className="box"></div>
                    </div>
                ))}
            </div>
            <div className="secondHalf">
                {secondHalf.map((item, i) => (
                    <div className="skill-item">
                        <h4>{item.language}</h4>
                        <div style={{width: `${item.percent * 2}px`, backgroundColor: '#59b256'}} className="box"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const Languages = () => {
    return (
        <div className="language">
            <div>
                {languages.map((item, i) => (
                    <div key={i}>
                        <h4 className="language-name">{item.language}</h4>
                        <div style={{width: `${item.percent * 2}px`, backgroundColor: '#59b256'}} className="box"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Interest = () => {
    return (
        <div className="interest">
            <div>
                <h4>Travelling</h4>
                <h4>Sports</h4>
                <h4>Movies</h4>
                <h4>Reading Books</h4>
            </div>
        </div>
    )
}

export default Resume;