import React from 'react';
import { shallow } from 'enzyme';
import Featured from '../Components/Featured';

describe('Featured', () => {
  let wrapper;

  const games = [{}, {
    "youtube": "ZYvvhOzYx_4"
  }];

  beforeEach(() => {
    wrapper = shallow(
      <Featured data={games} />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})