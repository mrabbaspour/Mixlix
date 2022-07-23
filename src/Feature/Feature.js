import "./Feature.css";

export default function Feature(props) {
  return (
    <>
      <div className="feature-image">
        <img src={props.featureImage} alt="item" />
      </div>
      <div className="feature-content">
        <h6>{props.featureTitle}</h6>
        <p>{props.featureText}</p>
      </div>
    </>
  );
}
