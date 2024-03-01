import { useState, useEffect } from "react";
import { Character } from "./Character";
import toast, { Toaster } from "react-hot-toast";

//Navigation through the API pages
function NavPage({ page, setPage }) {
  return (
    <header className="flex justify-between items-center p-4">
      {page >= 2 && (
        <button
          onClick={() => setPage(page - 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={page === 1}
        >
          Prev: Page {page - 1}
        </button>
      )}

      <button
        onClick={() => setPage(page + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Next: Page {page + 1}{" "}
      </button>
    </header>
  );
}

// Get all the characters from the API page
export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  //Notify the user if I successfully save the character
  const handleSave = (success) => {
    if (success) {
      toast.success("Successfully saved!");
    } else {
      toast.error(
        "Error saving the element."
      );
    }
  };

  return (
    <div className="bg-black text-white max-h-screen overflow-y-auto ">
      <Toaster />
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {characters.map((character) => (
            <div key={character.id}>
              <Character
                key={character.id}
                character={character}
                onSave={handleSave}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
