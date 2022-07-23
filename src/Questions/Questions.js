import Title, { titles } from "../Title/Title";
import questionData from "./questionData";
import Question from "./Question";
import ContactButton from "./../ContactButton/ContactButton";
import { NavHashLink } from "react-router-hash-link";

export default function Questions() {
  return (
    <div className="questions" id="questions">
      <div style={{ textAlign: "center", marginTop: 180 }}>
        <Title {...titles[4]} />
      </div>
      <div className="container">
        <div className="row">
          {questionData.map((question) => (
            <div
              className="question-item col-xl-5 col-lg-5 col-md-10 col-sm-10"
              key={question.id}
            >
              <Question {...question} />
            </div>
          ))}
        </div>
        <div className="more-question">
          <div>به مشاوره ی بیشتر احتیاج دارید ؟</div>
          <div>
            <NavHashLink to="/contact-us#header">
              <ContactButton />
            </NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
