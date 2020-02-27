import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders as expected', () => {
    const props = {
      page: 1,
      itemsPerPage: 20
    };

    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
