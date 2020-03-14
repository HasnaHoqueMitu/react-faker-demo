import React from 'react';
import './App.css';
import Peoples from './components/Peoples/Peoples';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="full-container">
      <Header></Header>
      <div className="peopleBox">
        <Peoples></Peoples>
      </div>     
    </div>

  );
}

export default App;
