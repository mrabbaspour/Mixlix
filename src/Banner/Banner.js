import "./Banner.css";
import Title, { titles } from "../Title/Title";
import PurchaseButton from "../PurchaseButton/PurchaseButton";
import ContactButton from "../ContactButton/ContactButton";
import { NavHashLink } from "react-router-hash-link";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <Title {...titles[0]} />
        <div className="btns-box">
          <NavHashLink to="/products#header">
            <PurchaseButton />
          </NavHashLink>
          <NavHashLink to="/contact-us#header">
            <ContactButton />
          </NavHashLink>
        </div>
      </div>
      <div className="banner-picture">
        <img src="images/man.png" alt="man" />
        <img src="images/100.png" alt="protein" />
      </div>
    </div>
  );
}
