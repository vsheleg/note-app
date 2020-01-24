import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Note from './Note';


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const note = document.getElementById("container");
ReactDOM.render(<Note />, note);
 