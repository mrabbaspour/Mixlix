import Title, { titles } from "../Title/Title";
import Feature from "./Feature";
import featureItems from "./FeaturesData";

export default function Features() {
  return (
    <div className="features" id="features">
      <div style={{ textAlign: "center" }}>
        <Title {...titles[1]} />
      </div>
      <div className="container">
        <div className="row">
          {featureItems.map((featureItem) => (
            <div
              className="feature-item col-xl-3 col-lg-4 col-md-5 col-sm-10"
              key={featureItem.id}
            >
              <Feature {...featureItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
