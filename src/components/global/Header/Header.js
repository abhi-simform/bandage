import "./Header.scss";

import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [subNavToggle, setSubNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  function handleClick() {
    setNavToggle(!navToggle);
    setSearchToggle(false);
  }
  function handleSubNav() {
    setSubNavToggle(!subNavToggle);
  }
  function handleSearchToggle() {
    setSearchToggle(!searchToggle);
  }
  return (
    <header className="header">
      <div className="header__logo">Bandage</div>

      <ul className={navToggle ? "nav__list nav__list--active" : "nav__list"}>
        <li className="nav__item">
          <a href="google.com" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item subnav-handle">
          <p href="google.com" className="nav__link" onClick={handleSubNav}>
            Shop <BiChevronDown />
          </p>
          <ul className={subNavToggle ? "subnav__list subnav__list--active" : "subnav__list"}>
            <li className="subnav__item">
              <a href="google.com" className="subnav__link">
                Random Link
              </a>
            </li>
            <li className="subnav__item">
              <a href="google.com" className="subnav__link">
                Random Link
              </a>
            </li>
            <li className="subnav__item">
              <a href="google.com" className="subnav__link">
                Random Link
              </a>
            </li>
            <li className="subnav__item">
              <a href="google.com" className="subnav__link">
                Random Link
              </a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <a href="google.com" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="google.com" className="nav__link">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="google.com" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="google.com" className="nav__link">
            Pages
          </a>
        </li>
      </ul>

      <div className="header__actions">
        <div className="actions__login">
          <AiOutlineUser /> <span>Login / Register</span>
        </div>
        <div className="actions__search">
          <AiOutlineSearch onClick={handleSearchToggle} /> <span onClick={handleSearchToggle}>Search</span>
          <input
            type="text"
            className={searchToggle ? "action__search__search action__search__search--active" : "action__search__search"}
            placeholder="Search"
          />
        </div>
        <div className="actions__cart">
          <AiOutlineShoppingCart /> <span>1</span>
        </div>
        <div className="actions__heart">
          <AiOutlineHeart /> <span>1</span>
        </div>
        <div className="actions__hamburger" onClick={handleClick}>
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
