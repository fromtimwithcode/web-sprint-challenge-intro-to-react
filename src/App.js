import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
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

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  `;

  const Title = styled.div`
  `;

  return (
    <Container>
      { error && <Title>{error}</Title> }
      <Title>Characters</Title>
      {data.map ((char, i) => {
        return <Character data={char} key={i} />
        })
      }
    </Container>
  );
}

export default App;
