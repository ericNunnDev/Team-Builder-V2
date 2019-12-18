import React, { useState } from 'react';
import Members from './components/Members';
import MembersForm from './components/MembersForm';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Lowly Hero',
      email: 'lowlyherotech@gmail.com',
      role: 'A hero, working in the shadows to improve terran life across the globe.'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Build Your Team</h1>
      <Members members={members} />
      <MembersForm addNewMember={addNewMember} />
    </div>
  );
}

export default App;
