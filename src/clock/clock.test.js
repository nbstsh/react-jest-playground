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

		console.log(JSON.stringify(tree, null, 2));
	});
});

// test('Link changes the class when hovered', () => {
// 	const component = renderer.create(
// 		<Link page='http://www.facebook.com'>Facebook</Link>
// 	);
// 	let tree = component.toJSON();
// 	expect(tree).toMatchSnapshot();

// 	// manually trigger the callback
// 	tree.props.onMouseEnter();
// 	// re-rendering
// 	tree = component.toJSON();
// 	expect(tree).toMatchSnapshot();

// 	// manually trigger the callback
// 	tree.props.onMouseLeave();
// 	// re-rendering
// 	tree = component.toJSON();
// 	expect(tree).toMatchSnapshot();
// });
