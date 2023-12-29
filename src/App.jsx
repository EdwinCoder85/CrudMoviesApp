import { useSelector } from "react-redux";
import "./App.css";
import FormMovies from "./components/FormMovies";
import MovieCard from "./components/MovieCard";

function App() {
  /* Hook useSelector nos permite acceder a la store */
  /* el parametro del useSelector es el objeto de reducer */
  /* reducer es el objeto que contiene todos los estados globales */
  /* movies es un arreglo y no va con encadenamiento opcional porque su valor inicial es un arreglo vacio */
  /* return implicito de varias lineas son ( ) */

  const movies = useSelector((reducer) => reducer.movies);

  console.log(movies);

  return (
    <div>
      <h1>Movies CRUD</h1>
      <FormMovies />
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
