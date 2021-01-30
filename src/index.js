import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
  <React.StrictMode>
    <div className="App">
        <header className="App-header">
        <App></App>
        </header>
      </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);
