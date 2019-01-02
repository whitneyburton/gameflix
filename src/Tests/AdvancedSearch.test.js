import React from 'react';
import { shallow } from 'enzyme';
import AdvancedSearch from '../Components/AdvancedSearch';

describe('AdvancedSearch', () => {
  let wrapper;
  const setAdvancedFilterMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <AdvancedSearch
        setAdvancedFilter={setAdvancedFilterMock}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should execute the setAdvancedFilter method when clicked', () => {
    wrapper.find('.form').simulate('click', {
      event: {
        target: {
          dataset: {
            id: 2
          }
        }
      }
    });
    expect(setAdvancedFilterMock).toBeCalled();
  });
  
});