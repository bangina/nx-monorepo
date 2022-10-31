import { render } from '@testing-library/react';

import ReviewDataAccessGame from './review-data-access-game';

describe('ReviewDataAccessGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewDataAccessGame />);
    expect(baseElement).toBeTruthy();
  });
});
