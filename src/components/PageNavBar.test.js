import React from 'react';
import { shallow } from 'enzyme';
import { PageNavBar } from './PageNavBar';

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
      page: 1,
      itemsPerPage: 20,
      totalRecords: 100
    };

    const wrapper = shallow(<PageNavBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
