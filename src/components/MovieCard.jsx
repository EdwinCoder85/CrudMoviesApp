import { useDispatch } from "react-redux";
import { deleteMoviesG } from "../store/slices/movies.slice";
import StartRate from "./shared/StartRate";

const MovieCard = ({ movie, setUpdateInfo, handleNav }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMoviesG(id));
  };

  const handleUpdate = (movie) => {
    setUpdateInfo(movie);
    handleNav();
  };

  return (
    <article className="w-full max-w-72 mb-6 mx-auto sm:max-w-80 bg-gray-200 rounded-3xl p-4 sm:px-6 sm:py-4 shadow-md shadow-emerald-400 select-none relative z-0">
      {movie.premiere && (
        <span className="tags absolute py-1 pr-10 pl-8 whitespace-nowrap text-white font-thin top-8 -left-2 inline-block bg-no-repeat before:absolute before:w-0 before:h-0 before:border-4 before:border-solid before:border-transparent before:border-b-4 before:border-b-yellow-600 before:border-r-4 before:border-r-yellow-600 before:-top-2 before:left-0">
          En estreno
        </span>
      )}

      <figure className="w-full h-40 sm:w-full sm:h-44 aspect-square">
        <img
          className="mx-auto w-40 h-40 sm:w-full sm:h-full object-contain rounded-3xl"
          src={movie.imageUrl}
          alt=""
        />
      </figure>
      <main>
        <h3 className="text-center text-lg font-bold my-2">{movie.name}</h3>
        <section className="mt-2 mb-3">
          <StartRate rating={movie.rating} />
          <ul className="pl-0 list-none gap-2">
            <li className="mb-1">
              <span className="text-base font-bold">Duration: </span>
              <span>{movie.duration}</span>
            </li>
            <li className="mb-1">
              <span className="text-base font-bold">Genre: </span>
              <span>{movie.genre}</span>
            </li>
            <li className="mb-1">
              <span className="text-base font-bold">Director: </span>
              <span>{movie.director}</span>
            </li>
            <li className="mb-1">
              <span className="text-base font-bold">Release date: </span>
              <span>{movie.release_date}</span>
            </li>
          </ul>
        </section>
      </main>
      <footer className="flex justify-evenly items-center gap-4">
        <button
          className="text-base font-semibold bg-[#00df9a] shadow-xl px-4 py-2 rounded-md"
          onClick={() => handleDelete(movie.id)}
        >
          Delete movie
        </button>
        <button
          className="text-base font-semibold bg-[#00df9a] shadow-xl px-2 py-2 rounded-md"
          onClick={() => handleUpdate(movie)}
        >
          Update movie
        </button>
      </footer>
    </article>
  );
};

export default MovieCard;
