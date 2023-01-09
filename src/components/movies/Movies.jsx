import { useEffect, useMemo, useState } from "react";
import allMovies from "./movies.json";
import genreOptions from "./genreOptions.json";
import "./Movies.scss";

export const Movies = () => {
  const [genre, setGenre] = useState("");
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState("");

  // let filteredMovies = movies;

  const filteredMovies = useMemo(() => {
    if (genre === "") {
      if (searchMovie === "") {
        return allMovies;
      } else {
        return allMovies.filter((movie) => {
          const searchFields =
            `${movie.title.toLowerCase()} ` +
            `${movie.year} ` +
            `${movie.directors.toLowerCase()}` +
            `${movie.actors.join("").toLowerCase()}` +
            `${movie.plot.toLowerCase()}`;
          return searchFields.toLowerCase().includes(searchMovie.toLowerCase());
        });
      }
    }
    return allMovies.filter((movie) => {
      const movieGenre = movie.genre.map((val) => val.toLowerCase());
      return movieGenre.includes(genre);
    });
  }, [genre, searchMovie]);
  console.log(filteredMovies)

  useEffect(() => {
    if (searchMovie !== "") {
      setGenre("");
    }
  }, [searchMovie]);
  
  const changeCategory = (e) => {
    setGenre(e.target.value)
    
    const filterMovies = filteredMovies.filter((movie) => movie.genres.includes(e.target.value))
    setMovies(filterMovies)
    console.log(setMovies)
  }
  // Todo ↓
  console.log(changeCategory)

  return (
    <div className="Movies">
      <h1 className="header">
        Top 100 Greatest Movies of All Time
      </h1>
      <div
        className="genre"
        value={genre}
        // onChange={e=>setGenre(e.target.value)}
        onChange={changeCategory}
      >
        {genreOptions.map((option, i) => (
          <button className="btn" value={option.value} key={i}>
            {option.label}
          </button>
        ))}
      </div>
      <form className="">
        <input
          className="border p-1 px-3 my-3"
          name="searchMovie"
          placeholder="Search Movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </form>

      <hr />
      <div className="movies">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie">
            <div className="image">
              <img src={movie.posterUrl} alt="" />
            </div>
            <div className="data">
              <h1 className="title">{movie.title}</h1>
              <div className="">
                Year:
                <span className="m-2">{movie.year}</span>
              </div>
              <div className="">
                Runtime:
                <span className="m-2">{movie.runtime}</span>
              </div>
              <div className="text-sm mt-2">
                Genre:
                <span className="m-2">{movie.genre.join(", ")}</span>
              </div>
              <div className="text-sm mt-2">
                Director:
                <span className="m-2">{movie.directors}</span>
              </div>
              <div className="text-sm mt-2">
                Actors:
                <span className="m-2">{movie.actors.join(", ")}</span>
              </div>
              <p className="text-sm mt-2">{movie.plot}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
