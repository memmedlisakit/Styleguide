import React from 'react';
import ReactDOM from 'react-dom';
import WTSelect from '../common_components/wt_select';
const op = [['one','one'],['two','two']];
const element = (
	<div className="wt-row">
		<div className="wt-col-xs-3">
			<WTSelect label="price" name="select" options={op} selected="dsklgjldrgh;"/>
		</div>
	</div>
)


ReactDOM.render(element, document.querySelector('.react_dropdown'));
