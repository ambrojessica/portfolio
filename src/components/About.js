import React, { useEffect } from "react";
import '../App.css';
import selfie from './images/selfie.jpg';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useState } from "react";

const About = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <h3>About Me</h3>
        <div className="about-description">
          <img src={selfie} alt='Jessica Ambrocio portrait' />
          <div className="about-paragraphs">
            <h5>I'm a Latinx Frontend Web Developer.</h5>
            <p>I am a 2022 graduate from BloomTech. I attended community college back in Fall 2018, I didn't finish my associates however, I plan on going to SLCC Fall 2023. I'm ready to start my tech career one project at a time. <br /><span>También hablo español!</span></p>
            <div className='about-interests'>
              <button onClick={toggleOpen}>
                {open ? 'Close' : 'See My Interests'} </button>
              {open &&
                <p>🎬🎮🎵<br />
                  📚🖥️👩‍💻<br />
                  💄🏋️‍♀️✈️<br />
                  🍣🍜🍹
                </p>
              }
            </div>
          </div>
        </div>
        <button className="up-arrow" onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}><AiOutlineArrowUp /></button>
      </div>
    </div>
  );
};

export default About;