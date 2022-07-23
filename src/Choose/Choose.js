import "./Choose.css";
import Title, { titles } from "../Title/Title";
import ContactButton from "../ContactButton/ContactButton";
import { NavHashLink } from "react-router-hash-link";

export default function Choose() {
  return (
    <div className="choose" id="choose">
      <div className="container-fluid">
        <div className="row">
          <div className="choose-bg col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img src="images/choose_img.png" alt="choose" />
          </div>
          <div className="choose-title col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Title {...titles[2]} />
            <NavHashLink to="/contact-us#header">
              <ContactButton />
            </NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
