 import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../common_components/wt-button';
const style = {marginRight:'10px'};
const buttons = (
	<div>
		<p>
			<Button type="primary" disabled style={style}>Primary Button Disabled</Button>
			<Button type="primary" style={style}>Primary Button</Button>
		</p>
		<p>
			<Button style={style} disabled>Green Button Disabled</Button>
			<Button style={style}>Default Green Button</Button>
		</p>
		<p>
			<Button type="primary" className="wt-button--block" style={style}>Primary Block Button</Button><br />
			<Button className="wt-button--block" inProgress style={style}>Green Block Button Loading...</Button>
		</p>
	</div>
)


ReactDOM.render(buttons, document.querySelector('.react_button'));
