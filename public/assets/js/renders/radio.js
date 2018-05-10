import React from 'react';
import ReactDOM from 'react-dom';
import Radio from '../common_components/wt-radio';

const element = (
	<div>
		<Radio label="Radio" name="radio"/>
		<Radio label="Radio cheked" name="radio" defaultChecked/>
		<Radio label="Radio disabled" disabled/>
	</div>
)


ReactDOM.render(element, document.querySelector('.react_radio'));
