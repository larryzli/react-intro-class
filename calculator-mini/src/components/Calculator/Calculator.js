import React, { Component } from 'react';
import calculatorImg from './calculator.png';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            header: 'Calculator',
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false
        }

        this.updateHeader = this.updateHeader.bind(this);
        this.setDisplay = this.setDisplay.bind(this);
    }
    updateHeader(val) {
        this.setState({
            header: val
        })
    }
    setDisplay(num){
        var display;
        if (this.state.display === '0'){
            this.setState({
                display: num
            })
        } else {
            this.setState({
                display: this.state.display + num
            })
        }
    }
    render() {
        return (
            <div id="calculator-container">
            <input onChange={ (e) => {
                this.updateHeader(e.target.value);
            }} id="header-input"/>
            <h1 id="header">{this.state.header}</h1>
            <img className="remove-highlight" src={calculatorImg} alt="calculator" />
            <div id="calculator-mask" className="remove-highlight">
              <div className="output">
                <span className="total">{this.state.display}</span>
              </div>
        
              <div className="btn clear"></div>
        
              <div onClick={() => this.setDisplay('0')} className="btn zero"></div>
              <div onClick={() => this.setDisplay('1')} className="btn one"></div>
              <div onClick={() => this.setDisplay('2')} className="btn two"></div>
              <div onClick={() => this.setDisplay('3')} className="btn three"></div>
              <div onClick={() => this.setDisplay('4')} className="btn four"></div>
              <div onClick={() => this.setDisplay('5')} className="btn five"></div>
              <div onClick={() => this.setDisplay('6')} className="btn six"></div>
              <div onClick={() => this.setDisplay('7')} className="btn seven"></div>
              <div onClick={() => this.setDisplay('8')} className="btn eight"></div>
              <div onClick={() => this.setDisplay('9')} className="btn nine"></div>
        
              <div className="btn equal"></div>
              <div className="btn multiply"></div>
              <div className="btn divide"></div>
              <div className="btn subtract"></div>
              <div className="btn add"></div>
            </div>
          </div>
        );
    }
}

export default Calculator;