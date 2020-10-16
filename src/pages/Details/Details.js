import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../actions/general';
import Rating from '../../components/Rating/Rating';
import { IMG_URL } from '../../constants/general';

const Details = () => {
  const { movieId } = useParams();
  const { movieDetails, error } = useSelector(
    (state) => state.general,
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [dispatch, movieId]);
  console.log(movieDetails);
  return error ? (
    <p className="error">{error}</p>
  ) : (
    <div className="details-container">
      <Link to="/" className="back-link" />
      <div className="backdrop-poster">
        <img
          className="backdrop-image"
          src={`${IMG_URL}${
            movieDetails?.backdrop_path || movieDetails?.poster_path
          }`}
          alt={movieDetails.id}
        />
        <h1 className="backdrop-title">{movieDetails?.title}</h1>
      </div>
      <div className="details-info">
        <p>Release date: {movieDetails?.release_date}</p>
        <p>
          Genres:{' '}
          {movieDetails?.genres?.map(({ name }, id) => {
            let genre = `${name}, `;
            if (movieDetails?.genres?.length - 1 === id) {
              genre = name;
            }
            return genre;
          })}
        </p>
        <p>Budget: ${movieDetails?.budget}</p>
        <Rating rating={movieDetails?.vote_average} />
        <p>Description:</p>
        <p>{movieDetails?.overview}</p>
      </div>
    </div>
  );
};

export default Details;
