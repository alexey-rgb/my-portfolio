import React from "react";
import { render } from "react-dom";
import "./styles/style.scss";

const Title = () => {
  let style = { width: 200 };
  const controlHandler = () => {
    const styles = ["lightblue", "lightgreen", "Tan"];
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    };
    let bodyStyleCurrent = window.getComputedStyle(document.body);
    const getRandomColor = () => {
      let bodyBackground = styles[getRandomIntInclusive(0, 2)];
      if (bodyBackground == bodyStyleCurrent.backgroundColor) {
        return styles[getRandomIntInclusive(0, 2)];
      } else {
        return styles[getRandomIntInclusive(0, 2)];
      }
    };
    return (document.body.style.backgroundColor = getRandomColor());
  };
  return (
    <div style={{ display: "flex", margin: "150px 0 0 calc((100% - 680px)/2)" }}>
      <div style={style}>
        <h2>My skills:</h2>
        <ul>
          <li>Js</li>
          <li>React</li>
          <li>Css3</li>
          <li>Less</li>
          <li>Sass</li>
          <li>Html5</li>
          <li>Webpack</li>
          <li>Gulp</li>
          <li>Adobe Photoshop</li>
          <li>Zeplin</li>
          <li>Avocode</li>
        </ul>
      </div>
      <div
        onClick={controlHandler}
        className="main__background-control theme-color"
      ></div>
    </div>
  );
};

render(<Title />, document.getElementById("root"));
