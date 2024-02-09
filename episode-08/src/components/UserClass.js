import React from "react";
import { generateProxyUrl } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "dummy",
      },
    };
    // console.log("Child Constructor");
  }
  async componentDidMount() {
    // console.log("Child componentDidMount");
    const data = await fetch(
      generateProxyUrl("https://api.github.com/users/shivanshurai97")
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  componentWillUnmount() {
    // console.log("Child componentWillUnmount");
  }

  render() {
    console.log(this.props.name + "Child render");
    // destructuring the props
    const { name, location, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Admin Details</h2>
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Git Username: {login}</h3>
      </div>
    );
  }
}

export default UserClass;
