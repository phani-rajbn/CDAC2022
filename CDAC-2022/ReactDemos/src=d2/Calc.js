import React, { Component, Fragment } from 'react'
//UR component can have data in the form of refs. Refs became obselete in the later versions of React. Now we use React.createRef to create Refs to store data of the components. 
//Data for the calc: v1, v2, operand, result 
export default class Calc extends Component {
    state = { result : 0}
    constructor(){
        super()
        this.firstValue = React.createRef();
        this.secondValue = React.createRef();
        this.operand = React.createRef();
        this.onCalculate = this.onCalculate.bind(this)//This binding is important to associate UR events with the functions of UR class. 
    }
    onCalculate(event){
        const v1 = parseFloat(this.firstValue.current.value)
        const v2 = parseFloat(this.secondValue.current.value)
        const operand = this.operand.current.value
        let res =0.0;
        switch (operand) {
            case "+":
                res = v1 + v2;
                break;
            default:
                break;
        }
        this.setState({result : res})
        event.preventDefault();//block the default functionality of the button. 
    }
    render() {
        return (
            <Fragment>
                <p>
                    <input ref={this.firstValue} placeholder='First Value'/>
                </p>
                <p>
                    <input ref={this.secondValue} placeholder='Second Value' />
                </p>
                <p>
                    Select the option:
                    <select ref={this.operand}>
                        <option>+</option>
                        <option>-</option>
                        <option>X</option>
                        <option>/</option>
                    </select>
                </p>
                <p><button onClick={this.onCalculate}>Calculate</button></p>
                <p>
                    <span>Result: {this.state.result}</span>
                </p>
            </Fragment>
        )
    }
}
