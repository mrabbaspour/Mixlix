import PurchaseButton from "../PurchaseButton/PurchaseButton";
import "./Product.css";
import numberToPersian from "./numberToPersian";
// import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
export default function Product(props) {
  return (
    <>
      <div className="product-image">
        <img src={props.imgSrc} alt="product" />
      </div>
      <div className="product-body">
        <h4 className="product-title">{props.title}</h4>
        <span className="product-price">
          {numberToPersian(props.price)} تومان
        </span>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
        >
          <NavHashLink to={`/products/${props.id}#header`}>
            <PurchaseButton />
          </NavHashLink>
        </div>
      </div>
    </>
  );
}
