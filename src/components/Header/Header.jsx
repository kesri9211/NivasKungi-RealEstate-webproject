import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpended, setMenuOpended] = useState(false);

  const getMenuStyle = (menuOpended) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpended && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.jpeg" alt="logo" width={100} />

        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpended(false);
        }}
        >
          <div className="h-menu flexCenter" style={getMenuStyle(menuOpended)}>
            <a href="">Regidencies</a>
            <a href="">Our value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpended((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
