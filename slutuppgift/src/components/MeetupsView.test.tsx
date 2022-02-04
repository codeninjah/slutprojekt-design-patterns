import { render } from '@testing-library/react';
import { MeetupsView } from './MeetupsView';
import { mount } from 'enzyme';

describe("Test MeetupsView", () => {
  it("renders MeetupsView", () => {
    render(<MeetupsView />);
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
    expect(nrofmeetups).toEqual(5)
  })
  it("shows all meetups that happened druing 2022", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2022"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(4)
  })
  it("shows all meetups that happen during 2020", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2020"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(1)
  })
  it("shows meetups are sorted, first should contain year 2022, last should contain year 2020", () => {
    const wrapper = mount(<MeetupsView/>)
    const firstEvent = wrapper.find('[data-test="meetup-item"]').at(0)
    expect(firstEvent.text().includes('2022')).toBe(true)
    const lastEvent = wrapper.find('[data-test="meetup-item"]').at(9)
    expect(lastEvent.text().includes("2020")).toBe(true)
  }) 
});