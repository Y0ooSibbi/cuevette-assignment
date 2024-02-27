// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainPage/>
      {/* Add main content area here */}
    </div>
  );
}

export default App;
