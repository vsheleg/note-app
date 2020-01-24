import React from 'react';
import ReactDOM from 'react-dom';
import './Note.css';
import App from './App';
/*
function Welcome(props) {
    alert("a")
    return <h2>Hi, {props.name}</h2>;
}
const elem = <Welcome name="Алиса"/>
ReactDOM.render (
    elem,document.getElementById('container')

); */
/*

function Note(props) {    
    return (
      <div class="note">
        <p>{props.name}</p>
      </div>
    );

  }
  */
function NotesList(props) {
    const notes = props.notes;
    const listNotes = notes.map((elem) =>
        <li>
        <div class="note">
            {elem}
        </div>
        </li>
    );
    return ( 
        <ul>{listNotes}</ul>
    );
}

  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  
  const notes =["note1","note2","note3","note4","note5"];
    ReactDOM.render (
        <NotesList notes={notes}/>,
        document.getElementById("container")
    );


