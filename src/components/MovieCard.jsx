import { useDispatch } from "react-redux"
import { deleteMoviesG } from "../store/slices/movies.slice"


const MovieCard = ({ movie }) => {

  const dispatch = useDispatch()

  const handleDelete = () =>  {
    dispatch(deleteMoviesG(movie.id))
  }


  return (
    <article className="movie">
      <header className="movie__header">
        <img className="movie__image" src={movie.imageUrl} alt="" />
      </header>
        <h3>{movie.name}</h3>
        <ul>
          <li><span>Duration: </span><span>{movie.duration}</span></li>
          <li><span>Genre: </span><span>{movie.genre}</span></li>
          <li><span>Director: </span><span>{movie.director}</span></li>
          <li><span>Release date: </span><span>{movie.release_date}</span></li>
        </ul>
        <button onClick={handleDelete}>Delete This movie</button>
    </article>
  )
}

export default MovieCard