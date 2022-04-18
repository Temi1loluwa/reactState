import React from "react";

const HiddenPerson = ({ person }) => {
  const { fullName, profession } = person;
  return (
    <div className="container">
      <div
        className="card w-75"
        style={{ width: "90vw", marginTop: 50, marginBottom: 50 }}
      >
        <div className="card-body">
          <h5 className="card-title">{fullName}</h5>
          <p className="card-text">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPerson;
