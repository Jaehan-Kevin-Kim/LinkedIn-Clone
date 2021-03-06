import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />

      {/* Body */}
      <div className='app__body'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;
