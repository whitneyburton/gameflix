import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('transitions to HomePage', () => {
    expect(wrapper.state('isHomePage')).toEqual(true);
    wrapper.instance().handleTransition('LandingPage');
    expect(wrapper.state('isHomePage')).toEqual(false);
  })

})


