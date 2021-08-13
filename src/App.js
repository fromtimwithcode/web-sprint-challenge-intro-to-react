import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setData(res.data)
      }).catch(err => {
        setError(`Please try again later.`)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character data={data} />
    </div>
  );
}

export default App;
