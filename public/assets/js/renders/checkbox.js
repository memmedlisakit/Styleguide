import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../common_components/wt-chkbox';

const element = (
	<div>
		<Checkbox label="Checkbox" />
		<Checkbox label="Checkbox cheked" defaultChecked/>
		<Checkbox label="Checkbox disabled" disabled/>
	</div>
)


ReactDOM.render(element, document.querySelector('.react_checkbox'));
