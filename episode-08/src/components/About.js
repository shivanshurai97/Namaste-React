import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  // mandatory in class components due to class inheritance syntax
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  componentWillUnmount() {
    // console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h2>This is Namaste Food Website</h2>
        <UserClass name={"First"} location={"Delhi"} />
      </div>
    );
  }
}

export default About;
