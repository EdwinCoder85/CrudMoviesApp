import { useForm } from "react-hook-form";
import { addMoviesG } from "../store/slices/movies.slice";
import { useDispatch } from "react-redux";

const FormMovies = () => {

  const { register, reset, handleSubmit} = useForm()

  const dispatch = useDispatch()

  /* data es un objeto con todos las propiedades de register */

  const submit = data => {
    data.id = (new Date()).toLocaleTimeString() + data.name
    dispatch(addMoviesG(data))
    reset({
      name:"",
      duration: "",
      genre: "",
      director: "",
      release_date: "",
      imageUrl: ""
    })
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>Form Movies</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input {...register('name')} type="text" id="name" />
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <input {...register('duration')} type="text" id="duration" />
      </div>
      <div>
        <label htmlFor="genre">Genre</label>
        <input {...register('genre')} type="text" id="genre" />
      </div>
      <div>
        <label htmlFor="director">Director</label>
        <input {...register('director')} type="text" id="director" />
      </div>
      <div>
        <label htmlFor="release_date">Release Date</label>
        <input {...register('release_date')} type="date" id="release_date" />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input {...register('imageUrl')} type="text" id="image" />
      </div>
      <button>Add this movies</button>
    </form>
  );
};

export default FormMovies;
