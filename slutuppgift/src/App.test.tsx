import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MeetupsView } from './components/MeetupsView';
import { shallow, mount } from 'enzyme';


describe("Testar med enzyme", () => {
  it("renders the App component", () => {
    render(<App />);
  }),
    
  it("kommentar skrivs ut på rätt event när man skrivit ett och tryckt på skicka knappen", () => {
    const wrapper = mount(<App />)
    //const wrapper = mount(<MeetupItem id={'0123456'} name={'SpaceX'} date={"2021-02-26"} description={"SpaceX is already a success, with people sent into space. This meetup will feature a lecture about how the program plans to build bases on the Moon and on March."} comments={[]} addComment={function (id: string, comment: string): void {} } />)
    const registerBtn = wrapper.find('[data-test="attend-btn"]').at(0)
    registerBtn.simulate('click')
    const input = wrapper.find('[data-test="meetups-comment-field"]').at(0)
    const commentsBtn = wrapper.find('[data-test="meetups-comment-btn"]')
    input.simulate('change', {target: {value: 'LOV3333'} })
    commentsBtn.simulate('click')
    const comment = wrapper.find('[data-test="comment-item"]')
    expect(comment.exists()).toBe(true)
  })
});