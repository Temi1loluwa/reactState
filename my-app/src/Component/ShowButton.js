import React from "react";
// import { useState } from "react";

const ShowButton = ({ id, shows, fullName, handleChange }) => {
  return (
    <div className="container">
      <button
        onClick={() => handleChange(id)}
        type="button"
        className={shows ? "btn btn-danger" : "btn btn-success"}
      >
        {shows ? `Hide ${fullName}` : `Show ${fullName}`}
      </button>
    </div>
  );
};

export default ShowButton;
