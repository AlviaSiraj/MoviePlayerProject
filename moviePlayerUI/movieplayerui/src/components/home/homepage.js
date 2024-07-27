import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Carousel } from "react-bootstrap";
import NavBar from "../common/navbar";
import MovieService from "../../services/MovieService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./home.css";

const HomePage = () => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [movies, setMovies] = useState([]);

  useEffect(
    () => {
      try {
        MovieService.getAllMovies(token).then((res) => {
          console.log(res.data);
          setMovies(res.data);
        });
      } catch (err) {
        console.log("yooo");
      }
    },
    token,
    movies
  );

  return (
    <div className="movie-carousel-container">
      <NavBar />
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Carousel.Item>
              <Paper>
                <div className="movie-card-container">
                  <div
                    className="movie-card"
                    style={{
                      "--img": `url(${movie.backdrops[0]})`,
                    }}
                  >
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt="poster" />
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>

                      <div className="movie-buttons-container">
                        <h5>Trailer</h5>
                        <Link
                          to={movie.trailerLink}
                        >
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon
                              className="play-button-icon"
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => console.log(movie.reviews)}
                        >
                          Reviews
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomePage;
