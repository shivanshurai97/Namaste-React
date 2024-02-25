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
      <div className="w-80 m-auto p-5 text-lg border-2 border-solid border-black bg-[#f0f0f0] rounded-2xl">
        <p className="m-2 font-semibold">Admin Details</p>
        <img
          className="w-[200px] h-[200px] mx-auto"
          src={avatar_url}
          alt="profile-img"
        />
        <p className="m-2">Name : {name}</p>
        <p className="m-2">Location : {location}</p>
        <p className="m-2">Git Username: {login}</p>
      </div>
    );
  }
}

export default UserClass;
