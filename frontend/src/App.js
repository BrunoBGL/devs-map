import React, { useState } from 'react';
import './App.css';

import api from './services/api';

import DevForm from './components/DevForm/';

function App() {
  const [devs, setDevs] = useState('');

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
          <ul className="card">
            <img className="avatar" src="https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg" alt="dev" />
            <div className="user-info">
              <strong>Nome do Sujeito</strong>
              <span>Javascript, HTML, CSS </span>
            </div>
            <p className="bio"> klsjdkajsdkajsdlans ljndlaksjdkajsdlkajsdklsjdka jsdkajsdlansljndlaksjdkajsdlkajsdklsjdkajsdk  kajsdlansljndlaksjdkajsdlkajsd </p>
            <a className="link" href="#" value="test">link clickante</a>
          </ul>

          <ul className="card">
            <img className="avatar" src="https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg" alt="dev" />
            <div className="user-info">
              <strong>Nome do Sujeito</strong>
              <span>Javascript, HTML, CSS </span>
            </div>
            <p className="bio"> klsjdkajsdkajsdlans ljndlaksjdkajsdlkajsdklsjdka jsdkajsdlansljndlaksjdkajsdlkajsdklsjdkajsdk  kajsdlansljndlaksjdkajsdlkajsd </p>
            <a className="link" href="#" value="test">link clickante</a>
          </ul>

          <ul className="card">
            <img className="avatar" src="https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg" alt="dev" />
            <div className="user-info">
              <strong>Nome do Sujeito</strong>
              <span>Javascript, HTML, CSS </span>
            </div>
            <p className="bio"> klsjdkajsdkajsdlans ljndlaksjdkajsdlkajsdklsjdka jsdkajsdlansljndlaksjdkajsdlkajsdklsjdkajsdk  kajsdlansljndlaksjdkajsdlkajsd </p>
            <a className="link" href="#" value="test">link clickante</a>
          </ul>

          <ul className="card">
            <img className="avatar" src="https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg" alt="dev" />
            <div className="user-info">
              <strong>Nome do Sujeito</strong>
              <span>Javascript, HTML, CSS </span>
            </div>
            <p className="bio"> klsjdkajsdkajsdlans ljndlaksjdkajsdlkajsdklsjdka jsdkajsdlansljndlaksjdkajsdlkajsdklsjdkajsdk  kajsdlansljndlaksjdkajsdlkajsd </p>
            <a className="link" href="#" value="test">link clickante</a>
          </ul>
        </li>
      </main>
    </div >
  );
}

export default App;