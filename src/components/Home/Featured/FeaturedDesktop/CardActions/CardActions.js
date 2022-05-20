import "./CardActions.scss";

import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

const CardActions = () => {
  return (
    <div className="left__actions">
      <div>
        <AiOutlineHeart></AiOutlineHeart>
      </div>
      <div>
        <BsCart></BsCart>
      </div>
      <div>
        <AiFillEye></AiFillEye>
      </div>
    </div>
  );
};

export default CardActions;
