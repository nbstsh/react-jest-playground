import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckboxWithLabel from './checkbox-with-label.component';

describe('checkbox-with-label component', () => {
	const labelOnText = 'labelOn';
	const labelOffText = 'labelOff';

	it('should chnage the text after click.', () => {
		const { queryByLabelText, getByLabelText } = render(
			<CheckboxWithLabel labelOn={labelOnText} labelOff={labelOffText} />
		);

		expect(queryByLabelText(labelOffText)).toBeTruthy();

		fireEvent.click(getByLabelText(labelOffText));

		expect(queryByLabelText(labelOnText)).toBeTruthy();
	});
});
