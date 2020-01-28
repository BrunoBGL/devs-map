import React from 'react';
import './App.css';

function App() {
  return (
    <div id="app">
      <aside className="sidebar">
        <form className="form">
          <div className="input-block">
            <label>nome</label>
            <input></input>
          </div>
          <div className="input-block">
            <label>tecnologias</label>
            <input></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label>longitude</label>
              <input></input>
            </div>
            <div className="input-block">
              <label>latitude</label>
              <input></input>
            </div>
          </div>
          <button>salvar</button>
        </form>
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
    </div>
  );
}

export default App;