import "./Footer.scss";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <h2 className="footer__title">Bandage</h2>
          <div className="footer__social">
            <a href="facebook.com">
              <AiFillFacebook />
            </a>
            <a href="instagram.com">
              <AiOutlineInstagram />
            </a>
            <a href="twitter.com">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__middle">
        <div className="container">
          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list__header">Company Info</h3>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Carrier
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                We are hiring
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list__header">Legal</h3>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Carrier
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                We are hiring
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list__header">Features</h3>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Business Marketing
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                User Analytic
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Live Chat
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Unlimited Support
              </a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <h3 className="footer__list__header">Resources</h3>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                IOS & Android
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Watch a Demo
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Customers
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                API
              </a>
            </li>
          </ul>
          <div className="footer__form">
            <h3 className="footer__list__header">Get In Touch</h3>
            <form className="footer__form__form">
              <input type="text" className="footer__form__input" placeholder="Your Email" />
              <input type="button" className="button button-primary" value="submit" placeholder="Subscribe" />
            </form>
            <p className="form__indicator">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__attribute">
            Made With Love By <a href="#">Finland.</a> All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
