import "./contact.css";
import { useContext, useRef, useState } from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_a1l812r', 'template_og8rjmn', formRef.current, 'OL6LrVDEYc-x0tLS5')
      .then((result) => {
           formRef.current.reset();
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    }
  return (
    <div className="contact" id="contact">
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">Get in touch</h1>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <img src={Phone} alt="" className="contact-icon" />
                        +251 927 347 337
                    </div>
                    <div className="contact-info-item">
                        <img src={Email} alt="" className="contact-icon" />
                        abebeteshome37@gmail.com
                    </div>
                    <div className="contact-info-item">
                        <img src={Address} alt="" className="contact-icon" />
                        Addis Ababa, Ethiopia
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <p className="contact-desc">
                    <strong>What’s your story?</strong> Get in touch. Always available for
                    website development projects.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text"  placeholder="Name" name="user_name"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                    <button type="submit" className="contact-button">Submit</button>
                    {done && "Thank you for reaching me out. I will get back to you soon!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact