import { render } from '@testing-library/react';

import MetricInventory from './metric-inventory';

describe('MetricInventory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MetricInventory />);
    expect(baseElement).toBeTruthy();
  });
});
