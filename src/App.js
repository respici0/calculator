import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialVal: 0,
      currentVal: 0,
      sum: 0
    };
  }

  onChange = e => {
    let num = e.target.value;
    this.setState(
      {
        initialVal: num
      },
      () => console.log(this.state)
    );
  };

  // maybe do a switch statement with the signs?
  addition = () => {
    this.state.sum += this.state.initialVal;
  };

  subtraction = () => {
    this.state.sum -= this.state.initialVal;
  };

  multiply = () => {
    this.state.sum *= this.state.initialVal;
  };

  division = () => {
    this.state.sum /= this.state.initialVal;
  };

  render() {
    return (
      <React.Fragment>
        <div className="calculator">
          <div className="container-fluid">
            <div className=" col">
              <div className="row">
                <div className="container-fluid" id="display">
                  <div className="col">
                    <div className="row justify-content-end">
                      {this.state.sum}
                    </div>
                    <div className="row justify-content-end">
                      {this.state.initialVal}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <button type="button" className="numberButton" id="clear">
                  Clear
                </button>
                <button className="numberButton" id="divide">
                  <i className="fas fa-divide" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="seven"
                  value="7"
                  onClick={this.onChange}
                >
                  7
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="eight"
                  value="8"
                  onClick={this.onChange}
                >
                  8
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="nine"
                  value="9"
                  onClick={this.onChange}
                >
                  9
                </button>
                <button type="button" className="numberButton" id="multiply">
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="four"
                  value="4"
                  onClick={this.onChange}
                >
                  4
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="five"
                  value="5"
                  onClick={this.onChange}
                >
                  5
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="six"
                  value="6"
                  onClick={this.onChange}
                >
                  6
                </button>
                <button type="button" className="numberButton" id="subtract">
                  <i className="fas fa-minus" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="one"
                  value="1"
                  onClick={this.onChange}
                >
                  1
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="two"
                  value="2"
                  onClick={this.onChange}
                >
                  2
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="three"
                  value="3"
                  onClick={this.onChange}
                >
                  3
                </button>
                <button type="button" className="numberButton" id="add">
                  <i className="fas fa-plus" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="zero"
                  value="0"
                  onClick={this.onChange}
                >
                  0
                </button>
                <button type="button" className="numberButton" id="decimal">
                  .
                </button>
                <button type="button" className="numberButton" id="equals">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            Created by{" "}
            <a href="https://robertpaulrespicio.com/" target="_block">
              Respici0
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
