import React from 'react';
import ReactDOM from 'react-dom';
import Teaxtarea from '../common_components/wt-textarea';

const element = (
	<div>
		<Teaxtarea label="Name" id="name"/>
		<Teaxtarea label="Disabled" className="wt-form-group__textarea--disabled" disabled/>
		<Teaxtarea label="Error" bsStyle="error" validationMessage="This field is required"/>
	</div>
);


ReactDOM.render(element,document.querySelector('.react_textarea'));
