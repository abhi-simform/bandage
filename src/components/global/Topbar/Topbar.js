import "./Topbar.scss";

import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <BsTelephone></BsTelephone> <a href="tel:+2255550118">(225) 555-0118</a> <HiOutlineMail></HiOutlineMail>{" "}
        <a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a>
      </div>
      <div className="topbar__center">
        <a href="#">Follow Us and get a chance to win 80% off</a>
      </div>
      <div className="topbar__right">
        Follow Us :
        <a href="instagram.com">
          <AiOutlineInstagram></AiOutlineInstagram>
        </a>
        <a href="youtube.com">
          <AiFillYoutube></AiFillYoutube>
        </a>
        <a href="facebook.com">
          <AiFillFacebook></AiFillFacebook>
        </a>
        <a href="twitter.com">
          <AiOutlineTwitter></AiOutlineTwitter>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
