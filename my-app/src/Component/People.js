import ShowButton from "./ShowButton";
import React from "react";
import Person from "./Person";
import HiddenPerson from "./HiddenPerson";

const People = ({ people, handleChange, hidePerson }) => {
  return (
    <div>
      {people.map((person, key) => (
        <>
          {person.shows ? (
            <Person person={person} key={key} />
          ) : (
            <HiddenPerson person={person} key={key} />
          )}

          <ShowButton
            id={person.id}
            shows={person.shows}
            fullName={person.fullName}
            handleChange={handleChange}
            hidePerson={hidePerson}
          />
        </>
      ))}
    </div>
  );
};

export default People;
