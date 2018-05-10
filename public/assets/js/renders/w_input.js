import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import Winput from '../common_components/w_input';

class Elemnet extends React.Component {
    constructor() {
        super();
        this.state = {
            val01: "",
            val02: ""
        }
    }
    render() {
        return (
            <div>
                {/*
                    (className) in not work 
                    (valid) in not work 
                    (size) in not work 
                    (inline) in not work 
                */} 
                <Winput  
                    label="Username: "
                    id="limited_input"
                    maxLength={30}
                    value={this.state.val01} 
                    onChange={(input) => { this.setState({ val01: input.target.value }) }}
                />
                <br/>
                <Winput
                    maxLength={15}
                    value={this.state.val02}
                    bsStyle="error"
                    validationMessage="Entered value should not be more than 15"
                    floatErrorMessage={true}
                    onChange={(input) => { this.setState({ val02: input.target.value }) }}
                    onClick={()=>{console.log("click")}}
                    onBlur={()=>{console.log("blur")}}
                    onFocus={()=>{console.log("focus")}}
                />
                <Winput
                    label="Disabled: " 
                    maxLength={50} 
                    disabled={true}
                    value="This field is disabled and maxLength 50"
                    size="md"
                />
            </div>
        );
    }
}



ReactDOM.render(<Elemnet />, document.querySelector(".react_w_input"));