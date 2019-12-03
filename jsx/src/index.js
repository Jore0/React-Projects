// import the react and react dom library

import React from "react";
import ReactDOM from "react-dom";

// create a react component
// function getButtonText() {
//   return "Click on Me!";
// }
const App = () => {
  // const buttonText = "Click Me!";

  const textError = { text: "click me" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="name" htmlFor="name">
        Enter Name
      </label>
      <input id="name" type="text"></input>
      <button style={style}>
        {/* {textError} */}
        {/* produces error */}
        {textError.text}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
