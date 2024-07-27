import React, { useEffect, useState } from "react";
import NavBar from "../common/navbar";
import MovieService from "../../services/MovieService";
import Grid from "@mui/material/Grid";
import FormRow from "@mui/material/FormGroup";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./movieList.css";

const MovieList = () => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      console.log(token);
      console.log("hi");
      try {
        MovieService.getAllMovies(token).then((res) => {
          console.log(res.data);
          setMovies(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    },
    token,
    movies
  );

  return (
    <div className="movie-list-container">
      <NavBar />
      <div className="movie-list">
        <Grid container spacing={1} sx={{ flexGrow: 1 }}>
          {movies.map((movie) => (
            <Grid
              item
              key={movie.imdbId}
              xs={4}
              md={2}
              className="movie-card-poster"
            >
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundImage: `url(${movie.poster})`,
                  backgroundSize: "cover",
                  position: "relative",
                  left: "70px",
                }}
              ></Paper>
              <div>
                <h5>{movie.title}</h5>
                <p>{movie.releaseDate}</p>
                <Button variant="outlined" size="small">
                  Reviews
                </Button>
                {/* {movie.genres.map((genre) => (
                  <div>{genre}</div>
                ))} */}

              </div>
            </Grid>
          ))}
        </Grid>
       
      </div>
    </div>
  );
};

export default MovieList;
