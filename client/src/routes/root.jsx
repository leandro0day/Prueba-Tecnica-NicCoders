import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex">
      <div
        id="sidebar"
        className="bg-black text-white min-w-[200px] max-w-[200px] h-screen border-r-2 border-gray-500"
      >
        <h1 className="text-4xl font-extrabold p-4 text-yellow-400">
          Rick and Morty
        </h1>

        <nav>
          <ul className="p-4">
            <li className="mb-2">
              <Link to={`/`} className="text-blue-400 hover:text-blue-600">
                All Characters
              </Link>
            </li>
            <li>
              <Link
                to={`/favorites`}
                className="text-blue-400 hover:text-blue-600"
              >
                Your Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
