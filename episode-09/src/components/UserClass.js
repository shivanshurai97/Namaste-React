import React from "react";
import { generateProxyUrl } from "../utils/constants";
import { GIT_PROFILE_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "dummy",
        avatar_url: "",
      },
    };
    // console.log("Child Constructor");
  }
  async componentDidMount() {
    // console.log("Child componentDidMount");
    const data = await fetch(generateProxyUrl(GIT_PROFILE_URL));
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
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Admin Details</h2>
        <img className="profile-img" src={avatar_url} alt="profile-img" />
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Git Username: {login}</h3>
      </div>
    );
  }
}

export default UserClass;
