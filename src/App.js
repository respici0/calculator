import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="calculator">
          <div className="container-fluid">
            <div className="col">
              <div className="row">
                <div id="display">Display</div>
              </div>
              <div className="row">
                <button type="button" className="numberButton" id="clear">
                  Clear
                </button>
                <button className="numberButton" id="divide">
                  <i class="fas fa-divide" />
                </button>
              </div>
              <div className="row">
                <button type="button" className="numberButton" id="seven">
                  7
                </button>
                <button type="button" className="numberButton" id="eight">
                  8
                </button>
                <button type="button" className="numberButton" id="nine">
                  9
                </button>
                <button type="button" className="numberButton" id="multiply">
                  <i class="fas fa-times" />
                </button>
              </div>
              <div className="row">
                <button type="button" className="numberButton" id="four">
                  4
                </button>
                <button type="button" className="numberButton" id="five">
                  5
                </button>
                <button type="button" className="numberButton" id="six">
                  6
                </button>
                <button type="button" className="numberButton" id="subtract">
                  <i class="fas fa-minus" />
                </button>
              </div>
              <div className="row">
                <button type="button" className="numberButton" id="one">
                  1
                </button>
                <button type="button" className="numberButton" id="two">
                  2
                </button>
                <button type="button" className="numberButton" id="three">
                  3
                </button>
                <button type="button" className="numberButton" id="add">
                  <i class="fas fa-plus" />
                </button>
              </div>
              <div className="row">
                <button type="button" className="numberButton" id="zero">
                  0
                </button>
                <button type="button" className="numberButton" id="decimal">
                  .
                </button>
                <button type="button" className="numberButton" id="equals">
                  <i class="fas fa-equals" />
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
