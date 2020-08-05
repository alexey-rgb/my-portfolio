import React from "react";

const Ceil = (props) => {
  const { ceilHandler, name } = props;
  const ceilArray = [];
  const getCeil = (j) => {
    return (
      <td
        id={j}
        key={j}
        onClick={() => ceilHandler(name)}
        className="ceil"
      ></td>
    );
  };
  for (let i = 0; i < 3; i++) {
    ceilArray.push(getCeil(i));
  }
  return ceilArray.map((ceil) => {
    return ceil;
  });
};

export default Ceil;
