import { render } from '@testing-library/react';

import LayoutScorecard from './layout-scorecard';

describe('LayoutScorecard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutScorecard />);
    expect(baseElement).toBeTruthy();
  });
});
