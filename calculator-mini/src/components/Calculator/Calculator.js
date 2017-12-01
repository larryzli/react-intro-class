import React, { Component } from "react";
import calculatorImg from "./calculator.png";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      header: "Calculator",
      display: "0",
      operator: "",
      temp: 0,
      resetDisplay: false
    };

    this.updateHeader = this.updateHeader.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  updateHeader(val) {
    this.setState({
      header: val
    });
  }
  setDisplay(num) {
    if (this.state.resetDisplay === true) {
      this.clearDisplay();
    }
    let display =
      this.state.resetDisplay === true
        ? num
        : this.state.display === "0" ? num : this.state.display + num;
    this.setState({
      display: display.length <= 13 ? display : this.state.display
    });
  }
  setOperator(operator) {
    if (this.state.operator === "") {
      this.setState({
        temp: parseInt(this.state.display, 10),
        operator: operator,
        display: "0"
      });
    }
  }
  calculate() {
    if (this.state.operator === "") {
      return;
    }
    let result =
      this.state.operator === "+"
        ? this.state.temp + parseInt(this.state.display, 10)
        : this.state.operator === "-"
          ? this.state.temp - parseInt(this.state.display, 10)
          : this.state.operator === "/"
            ? this.state.temp / parseInt(this.state.display, 10)
            : this.state.operator === "*"
              ? this.state.temp * parseInt(this.state.display, 10)
              : null;
    this.setState({
      resetDisplay: true,
      display: result
    });
  }
  clearDisplay() {
    this.setState({
      display: "0",
      operator: "",
      temp: 0,
      resetDisplay: false
    });
  }
  render() {
    return (
      <div id="calculator-container">
        <input
          onChange={e => {
            this.updateHeader(e.target.value);
          }}
          id="header-input"
        />
        <h1 id="header">{this.state.header}</h1>
        <img
          className="remove-highlight"
          src={calculatorImg}
          alt="calculator"
        />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div>

          <div onClick={() => this.clearDisplay()} className="btn clear" />

          <div onClick={() => this.setDisplay("0")} className="btn zero" />
          <div onClick={() => this.setDisplay("1")} className="btn one" />
          <div onClick={() => this.setDisplay("2")} className="btn two" />
          <div onClick={() => this.setDisplay("3")} className="btn three" />
          <div onClick={() => this.setDisplay("4")} className="btn four" />
          <div onClick={() => this.setDisplay("5")} className="btn five" />
          <div onClick={() => this.setDisplay("6")} className="btn six" />
          <div onClick={() => this.setDisplay("7")} className="btn seven" />
          <div onClick={() => this.setDisplay("8")} className="btn eight" />
          <div onClick={() => this.setDisplay("9")} className="btn nine" />

          <div onClick={() => this.calculate()} className="btn equal" />
          <div onClick={() => this.setOperator("*")} className="btn multiply" />
          <div onClick={() => this.setOperator("/")} className="btn divide" />
          <div onClick={() => this.setOperator("-")} className="btn subtract" />
          <div onClick={() => this.setOperator("+")} className="btn add" />
        </div>
      </div>
    );
  }
}

export default Calculator;
