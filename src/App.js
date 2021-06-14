import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import DummyContext from "./DummyContext";

import {useState} from 'react';

function App() {

  const [message, setMessage] = useState("");

  return (
    <Router>
      <DummyContext.Provider value = {{message, setMessage}}>
      <h1>Project Tinder</h1>
      <h2>By Maciej Tylak</h2>
        <main>

          <Header/>
          <br></br>
          <Main />
        </main>
      </DummyContext.Provider>
    </Router>
  );
}

export default App;
