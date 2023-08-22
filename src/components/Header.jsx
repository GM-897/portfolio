import React from "react";
import { AiOutlineMenu,AiOutlineUser } from "react-icons/ai";
// import yo from "../assets/king.png"

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>

    {/* <img src = {yo} alt="king"/> */}
    <h2>beast_gm</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="mailto:manmohitgrandhi@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
