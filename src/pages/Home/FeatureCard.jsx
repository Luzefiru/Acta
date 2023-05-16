import React from "react";
import "./FeatureCard.css";

function FeatureCard(props) {
  return (
    <div className="FeatureCard">
      <h3>{props.content}</h3>
      <h1>{props.number}</h1>
    </div>
  );
}

export default FeatureCard;
