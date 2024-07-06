import React from 'react';
import './App.css';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <header className="navbar">
        <h1 className="title">Desafio Front-end - LAPISCO</h1>
      </header>
      <div className='container-list'>
        <UserList />
      </div>
    </div>
  );
}

export default App;
