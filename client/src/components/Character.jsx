import React, { useState } from "react";

export function Character({ character, onSave }) {
  const [isSaving, setIsSaving] = useState(false);

  //Save a user on the server
  const handleSaveCharacter = async () => {
    try {
      setIsSaving(true);

      const response = await fetch("http://localhost:3000/api/v1/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          characterId: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          type: character.type,
          gender: character.gender,
          image: character.image,
          url: `https://rickandmortyapi.com/api/character/${character.id}`,
        }),
      });

      if (response.ok) {
        console.log("Character saved successfully");
        onSave(true);
      } else {
        console.error("Error saving character");
        onSave(false);
      }
    } catch (error) {
      console.error("Error when making POST request:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <article className="bg-zinc-800 w-[320px] min-h-[470px] rounded-3xl p-3 m-4 transition-transform duration-300 transform hover:scale-105">
      <div className="mb-4 relative">
        <img
          src={character.image}
          alt={character.name}
          loading="lazy"
          className="rounded-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white rounded-b-3xl">
          <h3 className="text-lg font-semibold text-yellow-400 mb-1">
            <span className="font-bold">{character.name}</span> -{" "}
            <span className="font-bold">{character.species}</span>
          </h3>
          <p className="text-sm text-gray-300">
            <span className="font-bold">Status:</span> {character.status}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-bold">Status:</span> {character.gender}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-bold">Type:</span> {character.type}
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-500" />

      <div className="mb-2 mt-2 text-sm text-gray-300">
        <p>
          <span className="font-bold">Origin:</span> {character.origin.name}
        </p>
      </div>

      <hr className="border-t border-gray-500" />

      <div className="mb-2 mt-2 text-sm text-gray-300">
        <p>
          <span className="font-bold">Last known location:</span>{" "}
          {character.location.name}
        </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSaveCharacter}
          disabled={isSaving}
          className={`bg-blue-500 text-white p-2 rounded-full  ${
            isSaving ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          } focus:outline-none focus:ring focus:border-blue-300 transition-all`}
        >
          {isSaving ? "Saving..." : "Save Character"}
        </button>
      </div>
    </article>
  );
}
