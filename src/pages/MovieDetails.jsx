import { fetchMovieById } from 'js/api';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Container } from '../components/Container';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [errorStatus, setErrorStatus] = useState(200);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);
      } catch (error) {
        setErrorStatus(error.response.status);
        return;
      }
    }

    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Link to={backLinkHref}>Go Back</Link>
        {errorStatus === 404 ? (
          <p className="pt-4">Details not found</p>
        ) : (
          <div>
            <div>
              {!movie.poster_path ? (
                <div className="w-[300px] h-[400px] text-center">No Image</div>
              ) : (
                <img
                  className="w-[300px] h-[400px]"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
              )}
            </div>

            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            <p>User Score: {movie.vote_average}</p>
            <p>Overview: {movie.overview}</p>
            <ul className="flex gap-5">
              Genres
              {movie.genres &&
                movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
            </ul>
            <ul>
              <li>
                <Link to="cast">See cast</Link>
              </li>
              <li>
                <Link to="reviews">See reviews</Link>
              </li>
            </ul>
            <div>
              <Outlet />
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
