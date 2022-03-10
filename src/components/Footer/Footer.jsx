import "./footer.css";
import { GitHub, LinkedIn, Instagram, Telegram } from "@mui/icons-material";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  console.log(year);
  return (
    <div className="footer">
        <h1>MyPortfolio</h1>
        <div className="footer-nav">
          <ul>
            <li><a className="footer-link" href="#intro">Home</a></li>
            <li><a className="footer-link" href="#about">About</a></li>
            <li><a className="footer-link" href="#about">Projects</a></li>
            <li><a className="footer-link" href="#about">Resume</a></li>
            <li><a className="footer-link" href="#about">ContactMe</a></li>
          </ul>
        </div>
        <div className="social-link">
          <ul>
            <li><a className="social-link" href="https://github.com/AbeTeshe" rel="noreferrer" target="_blank"><GitHub /></a></li>
            <li><a className="social-link" href="https://www.linkedin.com/in/abebe-teshome-1b4836202/" rel="noreferrer" target="_blank"><LinkedIn /></a></li>
            <li><a className="social-link" href="https://www.instagram.com/abebe864/" rel="noreferrer" target="_blank"><Instagram /></a></li>
            <li><a className="social-link" href="https://t.me/Abe_T1" rel="noreferrer" target="_blank"><Telegram /></a></li>
          </ul>
        </div>
        <p style={{color: 'white'}}>&copy;{year}, All rights reserved!</p>
    </div>
  )
}

export default Footer;