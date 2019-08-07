import React from 'react';
import Clock from './clock.components';
import renderer from 'react-test-renderer';

describe('clock component', () => {
	window.Date = function() {
		this.toISOString = jest.fn().mockReturnValue('123456789');
	};

	it('should render clock.', () => {
		const component = renderer.create(<Clock />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
