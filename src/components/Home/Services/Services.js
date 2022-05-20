import "./Services.scss";
import { FaBookReader } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { MdOutlineShowChart } from "react-icons/md";

const Services = () => {
  return (
    <section className="services">
      <div className="container services-container">
        <div className="bestseller__header">
          <p className="bestseller__name">Featured Products</p>
          <h2 className="bestseller__title">The Best Services</h2>
          <p className="bestseller__description">Problems trying to resolve the conflict between </p>
        </div>
        <div className="services-cards">
          <div className="services-card">
            <FaBookReader className="service-card__icon"></FaBookReader>
            <h3 className="service-card__title">Easy Wins</h3>
            <p className="service-card__description">Get your best looking smile now!</p>
          </div>
          <div className="services-card">
            <GoBook className="service-card__icon"></GoBook>
            <h3 className="service-card__title">Concrete</h3>
            <p className="service-card__description">Defalcate is most focused in helping you discover your most beautiful smile</p>
          </div>
          <div className="services-card">
            <MdOutlineShowChart className="service-card__icon"></MdOutlineShowChart>
            <h3 className="service-card__title">Hack Growth</h3>
            <p className="service-card__description">Overcame any hurdle or any other problem.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
