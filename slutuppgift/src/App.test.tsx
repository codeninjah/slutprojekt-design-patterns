import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MeetupsView } from './components/MeetupsView';
import { shallow, mount } from 'enzyme';
import MeetupItem from './components/MeetupItem';


describe("Testar med enzyme", () => {
  it("renders the App component", () => {
    render(<App />);
  })
});