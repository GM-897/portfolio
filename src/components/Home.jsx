import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/my_logo.png";
import { HiDownload } from "react-icons/hi";
import { AiFillInfoCircle } from "react-icons/ai";
// import resume from "../assets/GM_RESUME_NEW.pdf"
// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillLinkedin,
// } from "react-icons/ai";

const Home = ({ ratio }) => {

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Man Mohit
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Leader"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:manmohitgrandhi@gmail.com">Hire Me</a>
            <a href="#work">
            

            </a>
          </div> 

          <aside>
            <article>
                <a href="GM_RESUME_NEW.pdf" download="GM_RESUME_NEW.pdf" >Resume
                <HiDownload />
                </a>
               
            </article>

            <article data-special>
              <p>Contact</p>
              <span>manmohitgrandhi@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="gman" />
      </section>
    </div>
  );
};

export default Home;
