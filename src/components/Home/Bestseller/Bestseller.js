import "./Bestseller.scss";
import BestsellerCard from "./BestsellerCard/BestsellerCard";
import Button from "../../global/Button/Button";

import Bestseller01 from "../../../assets/images/bestseller/bestseller01.webp";
import Bestseller02 from "../../../assets/images/bestseller/bestseller02.webp";
import Bestseller03 from "../../../assets/images/bestseller/bestseller03.webp";
import Bestseller04 from "../../../assets/images/bestseller/bestseller04.webp";
import Bestseller05 from "../../../assets/images/bestseller/bestseller05.webp";
import Bestseller06 from "../../../assets/images/bestseller/bestseller06.webp";
import Bestseller07 from "../../../assets/images/bestseller/bestseller07.webp";
import Bestseller08 from "../../../assets/images/bestseller/bestseller08.webp";
import Bestseller09 from "../../../assets/images/bestseller/bestseller09.webp";
import Bestseller10 from "../../../assets/images/bestseller/bestseller10.webp";

const bestsellerData = [
  {
    productImg: Bestseller01,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller02,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller03,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller04,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller05,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller06,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller07,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller08,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller09,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
  {
    productImg: Bestseller10,
    productTitle: "Graphic Design",
    productCategory: "English Department",
    productOldPrice: "$16.48",
    productNewPrice: "$6.48",
  },
];

const Bestseller = () => {
  return (
    <section className="bestseller">
      <div className="container bestseller-container">
        <div className="bestseller__header">
          <p className="bestseller__name">Featured Products</p>
          <h2 className="bestseller__title">Bestseller Products</h2>
          <p className="bestseller__description">Problems trying to resolve the conflict between </p>
        </div>
        <div className="bestseller-cards">
          {bestsellerData.map((item, index) => (
            <BestsellerCard key={index} {...item} />
          ))}
        </div>
        <Button className="button--blue">Load More Products</Button>
      </div>
    </section>
  );
};

export default Bestseller;
