import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./components/shared/Navbar";
import FormMovies from "./components/FormMovies";
import MovieCard from "./components/MovieCard";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 640, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
];



function App() {
  const movies = useSelector((reducer) => reducer.movies);

  const [nav, setNav] = useState(false);
  const [updateInfo, setUpdateInfo] = useState();

  const handleNav = () => {
    setNav(!nav);
  };

  const isLargerThan520 = useMediaQuery('(min-width: 520px)');

  return (
    <div className="my-8 mx-6 min-h-screen">
      <Navbar handleNav={handleNav} />
      <FormMovies
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        nav={nav}
        handleNav={handleNav}
      />
      <div className="flex justify-center gap-6 flex-wrap max-w-screen-xl mx-auto">
        {!isLargerThan520 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              setUpdateInfo={setUpdateInfo}
              handleNav={handleNav}
            />
          ))
        ) : (
          <Carousel
            itemPadding={[30, 10]}
            breakPoints={breakPoints}
            enableAutoPlay
            autoPlaySpeed={1500}
            className="sm:select-none sm:z-0"
          >
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                setUpdateInfo={setUpdateInfo}
                handleNav={handleNav}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default App;
