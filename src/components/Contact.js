import React from "react";
import '../App.css';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CgCopyright } from 'react-icons/cg';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;


const Contact = () => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        alert('Your message was sent!');
      }, (error) => {
        console.log(error.text);
        alert('There was something wrong with your message. Try again.');
      });
    e.target.reset();
  };

  return (
    <div className="contact-section" id="contact">
      <h3>Contact Me:</h3>
      <div className="contact-border">
        <p><span>Questions, Comments, Concerns, Services?<br /> Send me a message 👋🏼</span></p>
        <div className="test">
          <div className="contact-form">
            <form onSubmit={handleOnSubmit}>
              <div className="contact-input">
                <label> Name:</label>
                <input
                  required
                  type="name"
                  name="name"
                  placeholder="Name"
                />
              </div>

              <div className="contact-input" >
                <label> Email:</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>

              <div className="contact-input">
                <label> Message:</label>
                <input
                  required
                  type="text"
                  name="message"
                  placeholder="Message"
                />
              </div>
              <button>Submit</button>
            </form>
          </div>
          <section className="contact-tags">
            <p>Socials:</p>
            <a href="https://github.com/ambrojessica" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ambrojessica/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/ambrojessica" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
            <a href="mailto:ambrojessica0@gmail.com"><MdEmail /></a>
          </section>
        </div>

      </div><div className="copyright">
        <p>Copyright Jessica Ambrocio 2022<CgCopyright /> Created using React and CSS.</p>
      </div>
    </div >

  );
};

export default Contact;