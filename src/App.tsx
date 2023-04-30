import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SubNavBar from './components/SubNavBar';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <SubNavBar />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </div>
  );
};

export default App;
