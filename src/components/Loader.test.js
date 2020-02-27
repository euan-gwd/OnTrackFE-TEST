import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test('renders as expected', () => {
  const comp = render(<Loader />);
  expect(comp).toMatchSnapshot();
});
