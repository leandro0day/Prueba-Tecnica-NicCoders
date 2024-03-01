import React, { useState, useEffect } from "react";
import { FavoriteCharacter } from "./FavoriteCharacter";
import toast, { Toaster } from 'react-hot-toast';

export function FavoriteList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("http://localhost:3000/api/v1/favorites");
        const { favorites } = await data.json();
        setCharacters(favorites);
        setLoading(false);
      } catch (error) {
        console.error("Error getting favorites list:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDelete = (deletedCharacterId) => {
    // Filter character list to exclude deleted character
    setCharacters((prevCharacters) =>
      prevCharacters.filter(
        (character) => character.characterId !== deletedCharacterId
      )
    );

    //Notify the user if I successfully delete the character
    toast.success('Successfully deleted!')

  };

  return (
    <div className="bg-black text-white max-h-screen overflow-y-auto min-h-screen">
      <Toaster />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {characters.map((character) => (
            <div key={character.characterId}>
              <FavoriteCharacter
                key={character.characterId}
                character={character}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteList;
