import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MeetupsView } from '../src/components/MeetupsView'
import  MeetupItem  from '../src/components/MeetupItem';
import { IMeetup } from './models/Meetup';

function App() {
  return (
    <div className="App">
      <MeetupsView />
    </div>
  );
}

export default App;
