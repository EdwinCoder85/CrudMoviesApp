import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { addMoviesG, updateMoviesG } from "../store/slices/movies.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const FormMovies = ({ updateInfo, setUpdateInfo, nav, handleNav }) => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const movies = useSelector((reducer) => reducer.movies);

  const genres = [
    { value: "Action" },
    { value: "Drama" },
    { value: "Romance" },
    { value: "Terror" },
    { value: "Sci-fi" },
    { value: "Anime" },
    { value: "Classic" },
    { value: "Police" },
  ];

  const ratings = [
    { value: 1, label: "1 estrella" },
    { value: 2, label: "2 estrellas" },
    { value: 3, label: "3 estrellas" },
    { value: 4, label: "4 estrellas" },
    { value: 5, label: "5 estrellas" },
  ];

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    // console.log(JSON.stringify(data));
    if (data.id) {
      //Update
      dispatch(updateMoviesG({ id: data.id, updatedMovie: data }));
      setUpdateInfo();
    } else {
      //Create
      data.id = new Date().toLocaleTimeString() + data.name;
      dispatch(addMoviesG(data));
    }

    reset({
      name: "",
      duration: "",
      genre: "",
      director: "",
      release_date: "",
      imageUrl: "",
      premiere: "",
      rating: "",
    });
  };

  return (
    <div
      className={`${
        nav ? "left-0" : "left-full sm:-left-96"
      } fixed w-full sm:w-96 top-0 h-full border-r border-r-gray-900 bg-[#00df9a] transition-all duration-300 z-10`}
    >
      <form
        className="max-w-60 sm:max-w-80 bg-gray-100 shadow-xl border-solid border-10 border-gray-200 rounded-3xl mx-auto mt-10 py-6 px-4 select-none"
        onSubmit={handleSubmit(submit)}
      >
        <main className="my-4">
          <h2 className="text-center mb-4 md:text-4xl sm:text-3xl text-2xl font-bold md:py-6">
            Form Movies
          </h2>
          <div
            onClick={handleNav}
            className="absolute text-3xl text-gray-500 font-bold top-1 right-3 hover:text-red-600 hover:scale-105"
          >
            x
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-0.5">
            <label className="font-semibold w-1/4" htmlFor="name">
              Name
            </label>
            <input
              className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
              {...register("name", { required: true, maxLength: 40 })}
              type="text"
              id="name"
              autoComplete="name"
            />
          </div>
          <small className="sm:ml-20 text-xs text-red-600">
            {errors.name?.type === "required" && "* Name is required"}
            {errors.name?.type === "maxLength" &&
              "* Name entered is more than 40 characters"}
          </small>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-0.5">
            <label className="font-semibold w-1/4" htmlFor="duration">
              Duration
            </label>
            <input
              className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
              {...register("duration", { required: true })}
              type="text"
              id="duration"
            />
          </div>
          <small className="sm:ml-20 text-xs text-red-600">
            {errors.duration?.type === "required" && "* Duration is required"}
          </small>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-0.5">
            <label className="font-semibold w-1/4" htmlFor="genre">
              Genre
            </label>
            <select
              className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
              name="genre"
              id="genre"
              {...register("genre")}
            >
              <option value="">Select genre...</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre.value}>
                  {genre.value}
                </option>
              ))}
            </select>
            {watch("genre") === "" && (
              <input
                className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
                type="text"
                hidden
                {...register("showGenre", {
                  required: true,
                })}
              />
            )}
          </div>
          <small className="sm:ml-20 text-xs text-red-600">
            {errors.showGenre?.type === "required" && "* Genre is required"}
          </small>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-0.5">
            <label className="font-semibold w-1/4" htmlFor="director">
              Director
            </label>
            <input
              className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
              {...register("director", { required: true })}
              type="text"
              id="director"
            />
          </div>
          <small className="sm:ml-20 text-xs text-red-600">
            {errors.director?.type === "required" && "* Director is required"}
          </small>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-0.5">
            <label className="font-semibold w-1/4" htmlFor="release_date">
              Release
            </label>
            <input
              className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
              {...register("release_date", { required: true })}
              type="date"
              id="release_date"
            />
          </div>
          <small className="sm:ml-20 text-xs text-red-600">
            {errors.release_date?.type === "required" &&
              "* Release Date is required"}
          </small>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-0.5">
            <label className="font-semibold w-1/4" htmlFor="image">
              Image
            </label>
            <input
              className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
              {...register("imageUrl", { required: true })}
              type="text"
              id="image"
            />
          </div>
          <small className="sm:ml-20 text-xs text-red-600">
            {errors.imageUrl?.type === "required" && "* Image URL is required"}
          </small>
          <div className="flex flex-row justify-between items-center mt-4 sm:mt-0.5">
            <input
              className="w-6 h-6 mr-10 accent-emerald-500 bg-gray-100 border-gray-100"
              {...register("premiere")}
              type="checkbox"
              id="premiere"
            />
            <label className="font-semibold w-3/4" htmlFor="premiere">
              Is it premiere?
            </label>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
            <label className="font-semibold w-1/4" htmlFor="rating">
              Rating
            </label>
            <select
              className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
              name="rating"
              id="rating"
              {...register("rating")}
            >
              <option value="">Select rating...</option>
              {ratings.map((rating, index) => (
                <option key={index} value={rating.value}>
                  {rating.label}
                </option>
              ))}
            </select>
            {watch("rating") === "" && (
              <input
                className="rounded-md border-solid border-2 border-gray-300 outline-0 w-full sm:w-3/4 p-1"
                type="text"
                hidden
                {...register("showRating", {
                  required: true,
                })}
              />
            )}
          </div>
          <small className="sm:ml-20 text-xs text-red-600">
            {errors.showRating?.type === "required" && "* Rating is required"}
          </small>
        </main>
        <footer className="flex justify-center items-center">
          <button className="bg-[#00df9a] w-[200px] shadow-xl rounded-md font-bold my-1 mx-auto py-3">
            {updateInfo ? "Update movie" : "Add movie"}
          </button>
        </footer>
      </form>
    </div>
  );
};

export default FormMovies;
