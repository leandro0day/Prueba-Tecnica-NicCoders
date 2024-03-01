import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Wubba Lubba Dub Dub!</h1>
        <p className="text-lg mb-8">
          Looks like there's a glitch in the multiverse. Rick is on it, but it
          might take a while.
        </p>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
          className="rounded-full w-40 h-40 mx-auto mb-4"
        />
        <p className="text-sm mb-4">
          Meanwhile, you can try again or go back to{" "}
          <a href="/" className="text-blue-400 hover:text-blue-600">
            All Characters
          </a>
          .
        </p>
        <p className="text-sm">
          If the problem persists, you might want to check if Jerry is messing
          with the portal gun.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
