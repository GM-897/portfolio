import React from "react";
import my from "../assets/gm_pic.png";

import {
  AiFillGithub,
  AiFillInstagram,
  // AiFillYoutube,
  AiOutlineArrowUp,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={my} alt="Abhishek" />

        <h2>G Man Mohit</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/manmohit-grandhi-89804622b/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/the_beast_gm/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
