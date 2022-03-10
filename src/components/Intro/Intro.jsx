import "./intro.css";
import Typical from 'react-typical';
import Me from "../../img/photo.png";

const Intro = () => {
  return (
    <div className='intro' id="intro">
        <div className='intro-left'>
          <div className="intro-left-wrapper">
            <h2 className="intro-intro">Hello, my name is</h2>
            <h1 className="intro-name">Abebe Teshome</h1>
            <div className="intro-title">
              <h1 className="intro-title-item">
                  <Typical 
                    loop={Infinity}
                    steps={[
                           "Front End Developer", 1000,
                          "Full Stack Developer", 1000,
                          "MERN Stack Developer", 1000,
                          "React Developer", 1000
                    ]} />
              </h1>
            </div>
            <p className="intro-desc">
              Knack of building websites using frontend and back end operitaions.
            </p>
          </div>
        </div>
        <div className='intro-right'>
          <div className="intro-bg"></div>
          <img src={Me} alt="me" className="intro-img" />
        </div>
    </div>
  )
}

export default Intro;