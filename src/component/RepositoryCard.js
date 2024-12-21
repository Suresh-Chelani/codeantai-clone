import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./RepositoryCard.css";

const RepositoryCard = ({ name, visibility, language, size, updated }) => {
  return (
    <div className="repository-card">
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        <h3>{name}</h3>
        <div
          style={{
            border: "1px solid #B2DDFF",
            backgroundColor: "#EFF8FF",
            padding: "3px",
            borderRadius: "10px",
            color: "#175CD3",
            fontSize: "0.7em",
          }}
        >
          {visibility}
        </div>
      </div>
      <div className="repository-details">
        <span>
          {language}
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "blue",
              marginLeft: "8px",
            }}
          >
            .
          </span>
        </span>
        <span>
          <FaDatabase style={{ marginRight: "6px", height: "10px" }} />
          {size} KB
        </span>
        <span>Updated {updated} ago</span>
      </div>
    </div>
  );
};

export default RepositoryCard;
