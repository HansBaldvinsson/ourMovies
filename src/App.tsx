import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className='App'>
      <NavBar />
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
}

export default App;
