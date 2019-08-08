import React from 'react';
import Clock from './clock/clock.components';
import CheckboxWithLabel from './checkbox-with-label/checkbox-with-label.component';

const style = {
	minWidth: '100vw',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column'
};

function App() {
	return (
		<div style={style}>
			<h2>Welcome to React</h2>
			<Clock />
			<CheckboxWithLabel
				labelOn="checked!!!!"
				labelOff="not checked!!!"
			/>
		</div>
	);
}

export default App;
