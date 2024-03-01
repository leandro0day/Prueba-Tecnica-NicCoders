import React, { useState } from "react";

export function FavoriteCharacter({ character, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  // Make the request to delete the favorite using the character ID
  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      const response = await fetch(
        `http://localhost:3000/api/v1/favorites/${character.characterId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // If the deletion was successful, call the onDelete function to update the favorites list
        onDelete(character.characterId);

      } else {
        console.error(`Error deleting favorite: ${response.statusText}`);
      }
    } catch (error) {
      
      console.error("Error making DELETE request:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <article className="bg-zinc-800 w-[320px]  rounded-3xl p-3 m-4 transition-transform duration-300 transform hover:scale-105">
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

      <div className="flex justify-center">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className={`bg-red-500 text-white p-2 rounded-full ${
            isDeleting ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
          } focus:outline-none focus:ring focus:border-red-300 transition-all mt-2`}
        >
          {isDeleting ? "Deleting..." : "Delete Favorite"}
        </button>
      </div>
    </article>
  );
}

export default FavoriteCharacter;
