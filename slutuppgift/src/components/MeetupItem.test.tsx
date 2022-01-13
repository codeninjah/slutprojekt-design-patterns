import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import MeetupItem from './MeetupItem';
import MeetupsView from './MeetupsView';
import App from '../App';


describe("Should ", () => {
    it("something happens when clicking the register button", () => {
        const wrapper = mount(<MeetupItem id={'0123456789'} name={'CryptoTalks'} date={"2022-01-26"} description={"Bitcoin or Dogecoin? How does Crypto Currency work? What's Bitcoin mining? Why can a Bitcoin cost $10,000 sometimes and plunge to $3,000? Which currency is the next Bitcoin? How does it change banking and finance?"} comments={[]} addComment={function (id: string, comment: string): void {} } />)
        const registerBtn = wrapper.find('[data-test="attend-btn"]')
        registerBtn.simulate('click')
        const commentsBtn = wrapper.find('[data-test="meetups-comment-btn"]')
        expect(commentsBtn.exists()).toBe(true)
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

