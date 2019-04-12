import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialVal: 0,
      secondVal: 0,
      currentVal: 0,
      sum: 0,
      arithmeticVal: null,
      symbolPressed: false,
      equalsPressed: false
    };
  }

  onNumberChange = e => {
    let value = e.target.value;
    let { initialVal, secondVal, symbolPressed } = this.state;

    if (symbolPressed === false) {
      console.log(value, "first number");
      if (initialVal === 0 || initialVal === "00") {
        this.setState({
          initialVal: value
        });
      } else
        this.setState(
          {
            initialVal: (initialVal += value)
          },
          () => console.log(this.state)
        );
    } else if (symbolPressed === true) {
      console.log(value, "second number");
      if (secondVal === 0 || secondVal === "00") {
        this.setState({
          secondVal: value
        });
      } else
        this.setState(
          {
            secondVal: (secondVal += value)
          },
          () => console.log(this.state)
        );
    }
  };

  symbolChange = e => {
    let symbol = e.target.value;
    let {
      initialVal,
      symbolPressed,
      equalsPressed,
      sum,
      secondVal,
      arithmeticVal
    } = this.state;
    console.log(symbol, "symbol function pressed");
    this.setState(
      {
        arithmeticVal: symbol,
        symbolPressed: true
      },
      () => console.log(this.state)
    );
    if (equalsPressed === true && sum !== 0 && symbolPressed === true) {
      this.setState({
        initialVal: sum,
        secondVal: 0,
        arithmeticVal: symbol
      });
      console.log("second sum around");
      switch (arithmeticVal) {
        case "+":
          initialVal += parseInt(secondVal);
          break;
        case "-":
          initialVal -= secondVal;
          break;
        case "*":
          initialVal *= secondVal;
          break;
        case "/":
          initialVal /= secondVal;
          break;
        default:
          break;
      }
      this.setState({ sum });
    }
  };

  onClear = () => {
    console.log("clear pressed");
    this.setState({
      initialVal: 0,
      secondVal: 0,
      currentVal: 0,
      sum: 0,
      arithmeticVal: null,
      symbolPressed: false
    });
    console.log(this.state);
  };

  //parseint
  equalsPressed = () => {
    let { initialVal, secondVal, arithmeticVal, sum } = this.state;
    console.log("equals pressed", this.state);

    switch (arithmeticVal) {
      case "+":
        sum = parseInt(initialVal) + parseInt(secondVal);
        break;
      case "-":
        sum = initialVal - secondVal;
        break;
      case "*":
        sum = initialVal * secondVal;
        break;
      case "/":
        sum = initialVal / secondVal;
        break;
      default:
        break;
    }
    this.setState({ sum, equalsPressed: true });

    // else if will go here when I know wtf I'm doing lol
  };

  // maybe do a switch statement with the signs?

  render() {
    let { initialVal, secondVal, arithmeticVal, sum } = this.state;
    return (
      <React.Fragment>
        <div className="calculator">
          <div className="container-fluid">
            <div className=" col">
              <div className="row">
                <div className="container-fluid" id="display">
                  <div className="col">
                    <div className="row justify-content-end">{sum}</div>
                    <div className="row justify-content-end">
                      {initialVal} {arithmeticVal} {secondVal}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="clear"
                  onClick={this.onClear}
                >
                  Clear
                </button>
                <button
                  className="numberButton"
                  id="divide"
                  onClick={this.symbolChange}
                  value="/"
                >
                  <i className="fas fa-divide" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="seven"
                  value={7}
                  onClick={this.onNumberChange}
                >
                  7
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="eight"
                  value={8}
                  onClick={this.onNumberChange}
                >
                  8
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="nine"
                  value={9}
                  onClick={this.onNumberChange}
                >
                  9
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="multiply"
                  onClick={this.symbolChange}
                  value="*"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="four"
                  value={4}
                  onClick={this.onNumberChange}
                >
                  4
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="five"
                  value={5}
                  onClick={this.onNumberChange}
                >
                  5
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="six"
                  value={6}
                  onClick={this.onNumberChange}
                >
                  6
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="subtract"
                  onClick={this.symbolChange}
                  value="-"
                >
                  <i className="fas fa-minus" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="one"
                  value={1}
                  onClick={this.onNumberChange}
                >
                  1
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="two"
                  value={2}
                  onClick={this.onNumberChange}
                >
                  2
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="three"
                  value={3}
                  onClick={this.onNumberChange}
                >
                  3
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="add"
                  onClick={this.symbolChange}
                  value="+"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="numberButton"
                  id="zero"
                  value={0}
                  onClick={this.onNumberChange}
                >
                  0
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="decimal"
                  value="."
                  onClick={this.onNumberChange}
                >
                  .
                </button>
                <button
                  type="button"
                  className="numberButton"
                  id="equals"
                  onClick={this.equalsPressed}
                >
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
