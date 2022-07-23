import "./Question.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef } from "react";

export default function Question(props) {
  const question = useRef();
  const toggleIcon = useRef();

  const showAnswer = () => {
    question.current.classList.toggle("show");
    toggleIcon.current.classList.toggle("rotate");
  };

  return (
    <div className="question-content" ref={question} onClick={showAnswer}>
      <div>
        <h4 className="question-text">{props.question}</h4>
        <p className="answer">{props.answer}</p>
      </div>
      <div>
        <i className="toggle-icon" ref={toggleIcon}>
          <MdKeyboardArrowDown />
        </i>
      </div>
    </div>
  );
}
