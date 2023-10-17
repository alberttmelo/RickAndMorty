import React, { useEffect, useState } from 'react';
import axios from 'axios';


function InformPerson({ match }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const characterId = match.params.id;

    axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do personagem:', error);
      });
  }, [match.params.id]);

  if (!character) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2>Detalhes do Personagem</h2>
      <img src={character.image} alt={character.name} />
      <p>Nome: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      {/* Adicione outras informações que desejar */}
    </div>
  );
}

export default CharacterDetails;
