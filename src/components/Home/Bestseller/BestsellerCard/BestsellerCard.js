import "./BestsellerCard.scss";

const BestsellerCard = (props) => {
  return (
    <div className="bestseller-card">
      <img src={props.productImg} alt="" className="bestseller-card__img" />
      <div className="bestseller-card__content">
        <h3 className="bestseller-card__title">{props.productTitle}</h3>
        <p className="bestseller-card__category">{props.productCategory}</p>
        <p className="bestseller-card__price">
          {props.productOldPrice} <span className="bestseller-card__price--new">{props.productNewPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default BestsellerCard;
