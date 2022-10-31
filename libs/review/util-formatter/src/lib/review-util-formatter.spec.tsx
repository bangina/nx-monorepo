import { render } from '@testing-library/react';

import ReviewUtilFormatter from './review-util-formatter';

describe('ReviewUtilFormatter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewUtilFormatter />);
    expect(baseElement).toBeTruthy();
  });
});
