import React from 'react';
import { render, screen } from '@testing-library/react';
import { MeetupsView } from './MeetupsView';
import { shallow, mount } from 'enzyme';

describe("Test MeetupsView", () => {
  it("renders MeetupsView", () => {
    render(<MeetupsView />);
  })
  it("renders one child in the view", () => {
    const wrapper = mount(<MeetupsView />)
    const content = wrapper.children.length
    expect(content).toEqual(1)
  })
  it("renders the main div within the view", () => {
    const wrapper = mount(<MeetupsView />)
    const mainDiv = wrapper.find('div')
    expect(mainDiv).toBeTruthy()
  })
  it("renders a list", () => {
    const wrapper = mount(<MeetupsView />)
    const meetupsList = wrapper.find('li')
    expect(meetupsList.exists()).toBe(true)
  })
  it("shows all meetups that happened druing 2021", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2021"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(6)
  }),
  it("shows all meetups that happened druing 2022", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2022"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(3)
  }),
  it("shows all meetups that happen during 2020", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2020"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(1)
  })
});