import React from "react";
import Ceil from "./renderCeil.jsx";
import "../styles/style.scss";

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName:
        "X" /* ,
      winner: "",
      count: 0,
      movesX: [],
      movesO: [], */,
    };
  }

  wrapperHandler(name) {
    console.log(this.state.playerName);
    if (this.state.playerName == "X") {
      this.setState({ playerName: "O" });
    } else {
      this.setState({ playerName: "X" });
    }
  }

  render() {
    const winCombinations = [
      [1, 2, 3],
      [1, 4, 7],
      [4, 5, 6],
      [1, 5, 9],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [7, 8, 9],
    ];
    /* wrapperHandler = (name) => {
      console.log(this.state.playerName);
      if (this.state.playerName == "X") {
        this.setState({ playerName: "O" });
      } else {
        this.setState({ playerName: "X" });
      }
    }; */

    return (
      <React.Fragment>
        <h3 className="message">Ходит игрок {this.state.playerName}</h3>

        <table className="table" ceilspacing>
          <tbody>
            <tr>
              <Ceil
                ceilHandler={this.wrapperHandler}
                name={this.state.playerName}
              />
            </tr>
            <tr className="table-row">
              <Ceil
                ceilHandler={this.wrapperHandler}
                name={this.state.playerName}
              />
            </tr>
            <tr className="table-row">
              <Ceil
                ceilHandler={this.wrapperHandler}
                name={this.state.playerName}
              />
            </tr>
          </tbody>
        </table>

        <div>
          <button className="button" type="button">
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default GameView;
