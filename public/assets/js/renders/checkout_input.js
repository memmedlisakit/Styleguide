import Input from '../common_components/wt_checkout_input';
import React from 'react';
import ReactDOM from 'react-dom';
   

const element = (
    <div>
        <Input label="Simple"
            id="username"
            type="password"
            formClass="form-group"
            required={true}
            edit={true} 
        />
        <Input label="Error"
            bsStyle={"error"}
            validationMessage="This field is required!!"
            className="input_error"
        />
        <Input label="Disabled"
            disabled
            value="This field is disabled"
        />
    </div>
);



ReactDOM.render(element, document.querySelector(".react_checkout_input"));