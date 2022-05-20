import Button from "../../global/Button/Button";
import "./Week.scss";

import Week1 from "../../../assets/images/week/week1.webp";
import Week2 from "../../../assets/images/week/week2.webp";
import Week3 from "../../../assets/images/week/week3.webp";

const Week = () => {
  return (
    <section className="week">
      <div className="container week-container">
        <div className="week-card">
          <img src={Week1} alt="" className="week__image" />
          <div className="week-content">
            <h3 className="week__title">Top Product Of the Week</h3>
            <Button className="button--white">Explore Items</Button>
          </div>
        </div>
        <div className="week-card">
          <img src={Week2} alt="" className="week__image" />
          <div className="week-content">
            <h3 className="week__title">Top Product Of the Week</h3>
            <Button className="button--white">Explore Items</Button>
          </div>
        </div>
        <div className="week-card">
          <img src={Week3} alt="" className="week__image" />
          <div className="week-content">
            <h3 className="week__title">Top Product Of the Week</h3>
            <Button className="button--white">Explore Items</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Week;
