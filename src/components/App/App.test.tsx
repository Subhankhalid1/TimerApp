import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let container:ShallowWrapper
  it('should render a <div />', () => {
    const container = shallow(<App />);
    expect(container.find('div').length).toEqual(1);
  });
  beforeEach(() => (container = shallow(<App />)))
  it("should render of instance of TimerButton <div />", () => {
    expect(container.find("TimerButton").length).toBeGreaterThanOrEqual(1)
  })

  it("should render of instance of Text <div />", () => {
    expect(container.find("Text").length).toBeGreaterThanOrEqual(1)
  })
});

