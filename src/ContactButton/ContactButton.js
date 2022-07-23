import "./ContactButton.css";
import { AiOutlinePhone } from "react-icons/ai";

export default function ContactButton() {
  return (
    <button className="contact">
      <span>تماس با ما</span>
      <i>
        <AiOutlinePhone />
      </i>
    </button>
  );
}
