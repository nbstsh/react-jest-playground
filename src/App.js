import React from 'react';
import Clock from './clock/clock.components';

const style = {
	minWidth: '100vw',
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

function App() {
	return (
		<div style={style}>
			<Clock />
		</div>
	);
}

export default App;
