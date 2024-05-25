import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { ComingSoon } from './Components/ComingSoon';

function App() {
  return (
    <div>
      <Navbar />
      <div className='centered'><ComingSoon /></div>
      
    </div>
  );
}

export default App;
