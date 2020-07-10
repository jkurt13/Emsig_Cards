import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/Navbar'
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SearchBar /> */}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
