import React, { Component } from "react";
import "./App.css";
import People from "./Components/People";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          id: 1,
          fullName: "Calvin Brown",
          bio: "Hi, I am Calvin Brown. I have been defending people's right. My hobbies are reading and traveling the world!",
          imageSrc: "../Assets/lawyer.jpg",
          profession: "Lawyer",
          shows: true,
        },
        {
          id: 2,
          fullName: "Alexander Smith",
          bio: "Hi, I am Alexander Smith. I love to design",
          imageSrc: "../Assets/architect.jpg",
          profession: "Architect",
          shows: true,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState({
      people: this.state.people.map((el) =>
        el.id === id ? { ...el, shows: !el.shows } : el
      ),
    });
  };

  render() {
    return (
      <div>
        <People
          people={this.state.people}
          handleChange={this.handleChange}
          hidePerson={this.hidePerson}
        />
      </div>
    );
  }
}
