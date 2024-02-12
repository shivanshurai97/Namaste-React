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
      <div className="text-center mt-24">
        <p className="m-5 text-lg font-semibold">
          This is Namaste Food Website
        </p>
        <UserClass />
      </div>
    );
  }
}

export default About;
