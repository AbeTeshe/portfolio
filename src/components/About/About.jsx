import "./about.css";
import Comp from "../../img/code.png";

const About = () => {
  return (
    <div className="about" id="about">
        <div className="about-left">
            <img src={Comp}
                alt="about" className="about-img"/>
        </div>
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className="about-sub">Why Choose Me?</p>
            <div className="about-underline"></div>
            <p className="about-desc">
            I am a talented, ambitious and hardworking individual, with broad skills 
            in Web Development. I mainly developing websites using JavaScript, ReactJS and NodeJS as its backend, using these 
            programming languages I developed some great Websites like resume builder, Ecommerce site and travel-advisor
            using Google APIs. I am always energetic and eager to learn new skills,
            flexible in my working hours, hardworking and always the last to leave the office in the evening. 
            </p>
        </div>
    </div>
  )
}

export default About