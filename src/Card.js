import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="card-image"> </div>
      <div className="card-text">
        <span class="date">4 days ago</span>
        <h2>Post One</h2>
        <p> This is a card div for state of haryana </p>
      </div>
      <div className="card-stats">
        <div className="stat">
          <div className="value">
            4<sup>m</sup>
          </div>
          <div className="type">read</div>
        </div>
        <div className="stat border">
          <div className="value">5123</div>
          <div className="type">views</div>
        </div>
        <div className="stat">
          <div className="value">32</div>
          <div className="type">comments</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
