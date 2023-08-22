import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/my_logo.png";
import { HiDownload } from "react-icons/hi";
// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillLinkedin,
// } from "react-icons/ai";

const Home = ({ ratio }) => {
  // const clientCount = useRef(null);
  // const projectCount = useRef(null);

  // const animationClientsCount = () => {
  //   animate(0, 100, {
  //     duration: 1,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };
  // const animationProjectsCount = () => {
  //   animate(0, 500, {
  //     duration: 1,
  //     onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
  //   });
  // };

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
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
                <a href="./G MANMOHIT_RESUME.pdf" download >Resume
                {/* <i class="fa fa-download"></i> */}
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
      <BsChevronDown />
    </div>
  );
};

export default Home;
