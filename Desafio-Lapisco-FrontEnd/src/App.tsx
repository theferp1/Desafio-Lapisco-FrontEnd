import React from 'react';
import './App.css';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <div className="Container">
      <header className="NavBar">
        <h1 className="Title">Desafio Front-end - LAPISCO</h1>
      </header>
      <div className='ContainerList'>
        <UserList />
      </div>
    </div>
  );
}

export default App;
