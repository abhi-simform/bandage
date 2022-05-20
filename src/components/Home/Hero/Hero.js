import "./Hero.scss";
import Button from "../../global/Button/Button";
import HeroImg from "../../../assets/images/hero-img.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h4 className="hero__time">Summer 2022</h4>
          <h1 className="hero__tagline">New Collection</h1>
          <p className="hero__description">We know how large objects will act, but things on a small scale.</p>
          <Button className="button--primary">Shop Now</Button>
        </div>
        <div className="hero-graphic">
          <img src={HeroImg} alt="" className="hero__image" />
          <div className="hero__ellipse hero__ellipse--white white--1"></div>
          <div className="hero__ellipse hero__ellipse--white white--2"></div>
          <div className="hero__ellipse hero__ellipse--white white--3"></div>
          <div className="hero__ellipse hero__ellipse--purple purple--1"></div>
          <div className="hero__ellipse hero__ellipse--purple purple--2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
