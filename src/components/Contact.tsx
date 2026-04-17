import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/aditya-shinde-88710712b/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — aditya-shinde-88710712b
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.Tech CSE, IIIT Bangalore — 2024–2026
            </p>
            <p>
              B.E. CSE, Konkan Gyanpeeth College of Engg. — 2019–2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/adityavshinde"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-shinde-88710712b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:Aditya.Vijay.Shinde@iiitb.ac.in"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+917840940097"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aditya Shinde</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
