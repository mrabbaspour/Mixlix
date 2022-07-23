import "./PurchaseButton.css";
import { FiShoppingCart } from "react-icons/fi";

export default function PurchaseButton() {
  return (
    <button className="purchase">
      <span>خرید</span>
      <i>
        <FiShoppingCart />
      </i>
    </button>
  );
}
