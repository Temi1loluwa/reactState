import React, { useState, useEffect } from "react";

const Person = ({ person }) => {
  const { fullName, bio, imageSrc, profession } = person;

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div
        className="card mb-5"
        style={{ maxWidth: "90vw", marginTop: "50px" }}
      >
        <div className="row g-0">
          <div class="col-md-4">
            <img
              src={imageSrc}
              className="img-fluid rounded-start"
              alt="a medic"
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{fullName}</h4>
              <h5>{profession}</h5>
              <p className="card-text">{bio}</p>
              <p className="card-text">
                <small className="text-muted">
                  Last mounted {count} seconds ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
