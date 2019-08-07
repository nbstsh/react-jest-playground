import React, { useState, useEffect } from 'react';

const style = {
	padding: '20px 30px',
	backgroundColor: '#6b6eff',
	boxShadow: '1px 1px 3px 1px #0000003b',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	maxWidth: '400px',
	fontSize: '20px',
	fontWeight: 'bold',
	borderRadius: '100px',
	color: '#fff'
};

const Clock = () => {
	const [time, setTime] = useState(new Date().toISOString());

	useEffect(() => {
		const timeoutID = setInterval(() => {
			setTime(new Date().toISOString());
		}, 1000);

		return () => {
			clearTimeout(timeoutID);
		};
	}, []);

	return (
		<div style={style}>
			<p>{time}</p>
		</div>
	);
};

export default Clock;
