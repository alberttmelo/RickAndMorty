import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character?page=2')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('Erro ao buscar personagens:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='Título'>Lista de Personagens de Rick and Morty</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id} className="character-item">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <span>{character.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
