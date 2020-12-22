import React from 'react';
import './App.css'

// Imports the ballot info scroll box
import SearchBox from './components/searchbox';

// Describes the entire app
function App() {
  return (
    <div className="container">
      <h1 className="logo">PolitiForm</h1>
      <SearchBox/>
    </div>
  );
}

export default App;
