import React from 'react';
import AppointmentList from './components/AppointmentList';
import Recorder from './components/Recorder';
import NoteReview from './components/NoteReview';

function App() {
  return (
    <div>
      <h1>Cliniko AI Scribe</h1>
      <AppointmentList />
      <Recorder />
      <NoteReview />
    </div>
  );
}

export default App;