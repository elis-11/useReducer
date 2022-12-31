import React, { useEffect, useMemo, useState } from "react";
import allMovies from "./movies.json";
import genreOptions from "./genreOptions.json";
import "./Movies.scss";

export const Movies = () => {
  const [genre, setGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState("");

  let filteredMovies = movies

  filteredMovies = useMemo(() => {
    if (genre === "") {
      if (searchTerm === "") {
        return allMovies;
      } else {
        return allMovies.filter((movie) => {
          const searchFields =
            `${movie.title.toLowerCase()} ` +
            `${movie.year} ` +
            `${movie.directors.toLowerCase()}` +
            `${movie.actors.join("").toLowerCase()}` +
            `${movie.plot.toLowerCase()}`;
          return searchFields.includes(searchTerm.toLowerCase());
        });
      }
    }
    return allMovies.filter((movie) => {
      const movieGenre = movie.genre.map((val) => val.toLowerCase());
      return movieGenre.includes(genre);
    });
  }, [genre, searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      setGenre("");
    }
  }, [searchTerm]);

  const changeCategory = (e) => {
    setGenre(e.target.value);

    const filterMovies = filteredMovies.filter((movie) =>
      movie.genre.includes(filteredMovies)
    );
    setMovies(filterMovies);
  };

  return (
    <div className="Movies">
      <h1 className="text-xl font-bold my-6">
        Top 100 Greatest Movies of All Time
      </h1>
      <form className="flex flex-col w-72">
        <select
          className="px-2 py-1 border w-40"
          value={genre}
          onChange={changeCategory}
        >
          {genreOptions.map((option, i) => (
            <option className="py-2" value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          className="border p-1 px-3 my-3"
          name="searchMovie"
          placeholder="Search Movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
