import React from "react";

export default function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="top-section">
          <div className="image"></div>
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
}
