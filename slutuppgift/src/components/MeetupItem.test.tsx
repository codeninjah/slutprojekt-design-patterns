import { mount } from 'enzyme';
import MeetupItem from './MeetupItem';


describe("Should", () => {
    it("do something happens when clicking the register button", () => {
        const wrapper = mount(<MeetupItem id={'0123456789'} name={'CryptoTalks'} date={"2022-01-26"} description={"Bitcoin or Dogecoin? How does Crypto Currency work? What's Bitcoin mining? Why can a Bitcoin cost $10,000 sometimes and plunge to $3,000? Which currency is the next Bitcoin? How does it change banking and finance?"} comments={[]} addComment={function (id: string, comment: string): void {} } />)
        const registerBtn = wrapper.find('[data-test="attend-btn"]')
        registerBtn.simulate('click')
        const commentsBtn = wrapper.find('[data-test="meetups-comment-btn"]')
        expect(commentsBtn.exists()).toBe(true)
      })
});

