import React, { useState, useEffect } from "react";
import "./Header.css";
import UserMenu from "./userMenu/UserMenu";

const Header = () => {
  const [userMenuClick, setUserMenuClick] = useState(false);
  const [blackHeader, setBlackHeader] = useState(false);

  const openMenu = () => {
    setUserMenuClick(true);
    console.log(userMenuClick);
  };
  const closeMenu = async () => {
    setUserMenuClick(false);
    console.log(userMenuClick);
  };

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={blackHeader ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix"
            title="Netflix"
          />
        </a>
      </div>
      <div className="header--user" onMouseOver={openMenu}>
        <a>
          <img
            src="https://i.imgur.com/tfnVE8n.png"
            title="Profile"
            alt="Profile"
          />
          {userMenuClick ? <UserMenu closeMenu={closeMenu} /> : null}
        </a>
      </div>
    </header>
  );
};

export default Header;
