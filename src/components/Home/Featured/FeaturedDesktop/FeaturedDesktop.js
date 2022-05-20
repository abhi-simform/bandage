import "./FeaturedDesktop.scss";

import CardActions from "./CardActions/CardActions";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { AiOutlineDotChart } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

const FeaturedDesktop = (props) => {
  return (
    <div className="desktop-card">
      <div className="desktop-card__left">
        <img src={props.image} alt="" className="left__image" />
        <CardActions></CardActions>
      </div>
      <div className="desktop-card__right">
        <div className="right__category">
          <p className="category__name">{props.category}</p>
          <span className="category__rating">
            <AiFillStar></AiFillStar>
            {props.rating}
          </span>
        </div>
        <h3 className="right__title">{props.title}</h3>
        <p className="right__description">{props.description}</p>
        <p className="sales">
          <AiOutlineDownload></AiOutlineDownload>
          {props.sales}
        </p>
        <p className="right__price">
          {props.oldprice}
          <span className="newprice">{props.newprice}</span>
        </p>
        <div className="right__colors">
          <span className={`color ${props.colors[0]}`}></span>
          <span className={`color ${props.colors[1]}`}></span>
          <span className={`color ${props.colors[2]}`}></span>
          <span className={`color ${props.colors[3]}`}></span>
        </div>
        <div className="right__details">
          <span className="detail details__time">
            <BiAlarm></BiAlarm>
            {props.time}
          </span>
          <span className="detail details__lessons">
            <AiOutlineDotChart></AiOutlineDotChart>
            {props.lessons}
          </span>
          <span className="detail details__progress">
            <AiOutlineAreaChart></AiOutlineAreaChart>
            {props.progress}
          </span>
        </div>
        <a href="#" className="button button--blue button--rounded">
          Learn More <BsChevronRight></BsChevronRight>
        </a>
      </div>
      <span className="desktop-fixed">Sale</span>
    </div>
  );
};

export default FeaturedDesktop;
