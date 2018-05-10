import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../common_components/wt-input';

const element = (
	<div>
		<Input label="Name" id="wti1"/>
		<Input validationMessage="This field is required!!" bsStyle="error" label="Error"/>
		<Input label="Disabled" className="wt-form-group__input--disabled" disabled/>
	</div>
);


ReactDOM.render(element,document.querySelector('.react_inputs'));
