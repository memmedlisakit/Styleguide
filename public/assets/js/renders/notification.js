import React from 'react';
import ReactDOM from 'react-dom';
import Notification from '../common_components/wt-notifications';

ReactDOM.render(
	<div>
	<Notification success="Success"/><br />
	<Notification warning="Warning"/><br />
	<Notification error="Error"/>
	</div>,
	document.querySelector('.react_notification'));


