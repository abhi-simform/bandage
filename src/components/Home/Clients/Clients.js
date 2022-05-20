import "./Clients.scss";
import Client1 from "../../../assets/images/clients/client1.svg";
import Client2 from "../../../assets/images/clients/client2.svg";
import Client3 from "../../../assets/images/clients/client3.svg";
import Client4 from "../../../assets/images/clients/client4.svg";
import Client5 from "../../../assets/images/clients/client5.svg";
import Client6 from "../../../assets/images/clients/client6.svg";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container clients-container">
        <a href="https://google.com">
          <img src={Client1} alt="client logo" className="client__image" />
        </a>
        <a href="https://google.com">
          <img src={Client2} alt="client logo" className="client__image" />
        </a>
        <a href="https://google.com">
          <img src={Client3} alt="client logo" className="client__image" />
        </a>
        <a href="https://google.com">
          <img src={Client4} alt="client logo" className="client__image" />
        </a>
        <a href="https://google.com">
          <img src={Client5} alt="client logo" className="client__image" />
        </a>
        <a href="https://google.com">
          <img src={Client6} alt="client logo" className="client__image" />
        </a>
      </div>
    </section>
  );
};

export default Clients;
