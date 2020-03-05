import React, { useState, useEffect } from 'react';
import './App.css';

import api from './services/api';

import DevForm from './components/DevForm/';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  const handleAdd = async (data) => {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data])
  };

  return (
    <div id="app">
      <aside className="sidebar">
        <DevForm onSubmit={handleAdd} />
      </aside>
      <main className="main-container">
        <li className="user-list">
          {devs.map(dev => (
            <DevItem dev={dev} />
          ))}
        </li>
      </main>
    </div >
  );
}

export default App;