import "./Wedo.scss";
import Wedo1 from "../../../assets/images/wedo/wedo1.webp";
import Wedo2 from "../../../assets/images/wedo/wedo2.webp";

const Wedo = () => {
  return (
    <section className="wedo">
      <div className="container wedo-container">
        <div className="wedo-right">
          <p className="wedo__title">Featured Products</p>
          <h2 className="wedo__tagline">We love what we do</h2>
          <div className="wedo__description">
            <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
          </div>
        </div>
        <div className="wedo-left">
          <div className="wedo__images">
            <img src={Wedo1} alt="" />
            <img src={Wedo2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wedo;
