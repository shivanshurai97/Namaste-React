import React from "react";
import ReactDOM from "react-dom/client";

//Practice

// JSX (transpiled before it reaches JS) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

//ReactElement
// const heading = (
//   <h1 className="head" tabIndex={5}>
//     Namaste React 🚀 using JSX
//   </h1>
// );

//React Functional Component
// const Title = () => <h1 id="heading">Namaste React 🚀</h1>;

// const HeadingComponent = () => (
//   <div className="header">
//     {Title}
//     {<Title />}
//     {<Title></Title>}
//     {heading}
//     <h2 className="heading">Namaste React Functional Component </h2>
//   </div>
// );

//Assignment Episode 3

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

// const header = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "Namaste React H1 🚀"),
//   React.createElement("h2", {}, "Namaste React H2 🚀"),
//   React.createElement("h3", {}, "Namaste React H3 🚀"),
// ]);

//Create the same element using JSX
// const jsxHeader = (
//   <div className="title">
//     <h1>Namaste React H1 🚀</h1>
//     <h2>Namaste React H2 🚀</h2>
//     <h3>Namaste React H3 🚀</h3>
//   </div>
// );

//Create a functional component of the same with JSX
// Pass attributes into the tag in JSX
//Composition of Component(Add a component inside another)

// const TitleComponent = () => <h1 className="title"> Namaste React 🚀</h1>;

// const HeaderComponent = () => (
//   <div className="title">
//     {<TitleComponent></TitleComponent>}
//     <h1 style={{ color: "red" }}>Namaste React H1 🚀</h1>
//     <h2 style={{ color: "blue" }}>Namaste React H2 🚀</h2>
//     <h3 style={{ color: "green" }}>Namaste React H3 🚀</h3>
//   </div>
// );

// Create a Header Component from scratch using Functional Components with
// JSX
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right
// ○ Add CSS to make it look nice

const HeaderComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"
        className="logo"
      />
    </div>
    <div className="search-container">
      <input
        type="text"
        placeholder="Search......"
        className="search-box"
      ></input>
    </div>
    <div className="user-container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/007/407/996/large_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
        className="user-icon"
      />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
