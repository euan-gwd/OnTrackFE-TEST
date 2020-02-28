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
  test('renders Pagination with records in array', () => {
    const props = {
      page: 1,
      itemsPerPage: 20,
      totalRecords: 100
    };

    const wrapper = shallow(<PageNavBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders Pagination with no records in array', () => {
    const props = {
      page: 1,
      itemsPerPage: 20,
      totalRecords: 1
    };

    const wrapper = shallow(<PageNavBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
