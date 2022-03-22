import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //esquema basico de react

//la app es un componente que pasa por aca es el que vamos a ir modifcando
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

