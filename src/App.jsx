import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "./components/shared/Navbar";
import FormMovies from "./components/FormMovies";
import MovieCard from "./components/MovieCard";
import useMediaQuery from "./hooks/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange" }}
      onClick={onClick}
    />
  );
}

function App() {
  const movies = useSelector((reducer) => reducer.movies);

  const [nav, setNav] = useState(false);
  const [updateInfo, setUpdateInfo] = useState();

  const handleNav = () => {
    setNav(!nav);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  const isLargerThan480 = useMediaQuery("(min-width: 480px)");

  return (
    <div className="my-8 mx-6 min-h-screen">
      <Navbar handleNav={handleNav} />
      <FormMovies
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        nav={nav}
        handleNav={handleNav}
      />
      <div className="mx-auto mt-10 w-4/5 sm:w-3/4 md:w-5/6 2xl:w-3/5">
        {!isLargerThan480 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              setUpdateInfo={setUpdateInfo}
              handleNav={handleNav}
            />
          ))
        ) : (
          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                setUpdateInfo={setUpdateInfo}
                handleNav={handleNav}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default App;
