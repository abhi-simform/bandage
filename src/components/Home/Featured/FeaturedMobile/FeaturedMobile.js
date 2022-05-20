import "./FeaturedMobile.scss";

import { BiAlarm } from "react-icons/bi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

const FeaturedMobile = (props) => {
  return (
    <div className="mobile-card">
      <div className="mobile-card__image">
        <img src={props.image} alt="" />
      </div>
      <div className="mobile-card__content">
        <div className="mobile-card__tags">
          <span>{props.tags[0]}</span>
          <span>{props.tags[1]}</span>
          <span>{props.tags[2]}</span>
        </div>
        <h3 className="mobile-card__title">{props.title}</h3>
        <p className="mobile-card__description">{props.description}</p>
        <div className="mobile-card__details">
          <p className="details__time">
            <BiAlarm></BiAlarm>
            {props.time}
          </p>
          <p className="details__comment">
            <AiOutlineAreaChart></AiOutlineAreaChart>
            {props.comment}
          </p>
        </div>
        <a href="#" className="mobile-card__link">
          Learn More
          <BsChevronRight></BsChevronRight>
        </a>
      </div>
      <span className="mobile-fixed">New</span>
    </div>
  );
};

export default FeaturedMobile;
