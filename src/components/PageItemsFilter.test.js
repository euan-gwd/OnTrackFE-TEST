import React from 'react';
import { shallow } from 'enzyme';
import { initialState } from '../store/reducers';
import { PageItemsFilter } from './PageItemsFilter';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/'
  }),
  useHistory: () => ({
    pathname: 'localhost:3000/'
  })
}));

describe('PageItemsFilter', () => {
  it('renders as expected', () => {
    const props = {
      ...initialState,
      fetchBooks: jest.fn().mockReturnValue()
    };

    const wrapper = shallow(<PageItemsFilter {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
