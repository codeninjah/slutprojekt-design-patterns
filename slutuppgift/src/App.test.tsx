import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';


describe("Testar med enzyme", () => {
  it("renders the App component", () => {
    render(<App />);
  })
    
  it("kommentar skrivs ut på rätt event när man skrivit ett och tryckt på skicka knappen", () => {
    const wrapper = mount(<App />)
    const registerBtn = wrapper.find('[data-test="attend-btn"]').at(0)
    registerBtn.simulate('click')
    const input = wrapper.find('[data-test="meetups-comment-field"]').at(0)
    const commentsBtn = wrapper.find('[data-test="meetups-comment-btn"]')
    input.simulate('change', {target: {value: 'LOV3333'} })
    commentsBtn.simulate('click')
    const comment = wrapper.find('[data-test="comment-item"]')
    expect(comment.exists()).toBe(true)
  }) //
});