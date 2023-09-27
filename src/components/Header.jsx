import {React,createContext }from "react";
import { AiOutlineMenu} from "react-icons/ai";


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
        Projects
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#About">
        About
      </a>
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
