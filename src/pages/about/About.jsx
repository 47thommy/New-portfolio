import React from "react";
import myCV from "../../assets/images/Thomas's CV.pdf";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

// components
import { Cards, Blast } from "../../components";
import "./about.scss";

const About = () => {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  "A",
                  "b",
                  "o",
                  "u",
                  "t",
                  "",
                  "&",
                  "",
                  "S",
                  "k",
                  "i",
                  "l",
                  "l",
                  "s",
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                I'm a full-stack developer and machine learning engineer,
                passionate about crafting innovative solutions. My journey in
                technology spans web development and machine learning, driven by
                a love for creative problem-solving.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I excel in web development, from front-end interfaces to
                scalable back-end systems. I also thrive in machine learning,
                leveraging algorithms for impactful projects, such as natural
                language processing and computer vision.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I believe technology can drive positive change. I'm committed to
                creating software that simplifies tasks and unlocks insights in
                data. Eager for challenges and collaborations, I'm dedicated to
                continual learning and growth in this ever-evolving tech
                landscape. Let's shape the future together.
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: "2rem" }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  );
};

export default About;
