import React, { useEffect } from 'react';
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  faBookOpen,
  faCalendarCheck,
  faDollarSign,
  faFileVideo,
  faFlag,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { getMovieDetails, getMovieVideo } from '../../actions/general';
import EmptyPhoto from '../../components/EmptyPhoto/EmptyPhoto';
import InfoText from '../../components/InfoText/InfoText';
import Loader from '../../components/Loader/Loader';
import Rating from '../../components/Rating/Rating';
import { IMG_URL } from '../../constants/general';

const Details = () => {
  const { movieId } = useParams();
  const { movieDetails, error, isLoading, videoKey } = useSelector(
    (state) => state.general,
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    batch(() => {
      dispatch(getMovieDetails(movieId));
      dispatch(getMovieVideo(movieId));
    });
  }, [dispatch, movieId]);

  const getGenres = () => {
    return String(movieDetails?.genres?.map(({ name }) => name));
  };

  const getCountries = () => {
    return String(movieDetails?.production_countries?.map(({ name }) => name));
  };

  if (isLoading) {
    return <Loader />;
  }

  return error ? (
    <p className="error">{error}</p>
  ) : (
    <div className="details-container">
      <Link to="/results" className="back-link" />
      <div className="backdrop-poster">
        {movieDetails?.backdrop_path || movieDetails?.poster_path ? (
          <img
            className="backdrop-image"
            src={`${IMG_URL}${
              movieDetails?.backdrop_path || movieDetails?.poster_path
            }`}
            alt={movieDetails.id}
          />
        ) : (
          <EmptyPhoto backdrop />
        )}
        <h1 className="backdrop-title">{movieDetails?.title}</h1>
      </div>
      <div className="details-info">
        {movieDetails?.homepage && (
          <InfoText
            label={
              <a
                href={`${movieDetails?.homepage}`}
                className="link-light"
                target="_blank"
                rel="noreferrer noopener">
                Homepage
              </a>
            }
            icon={faGlobe}
          />
        )}
        <InfoText
          label="Release date:"
          text={movieDetails?.release_date}
          icon={faCalendarCheck}
        />
        {movieDetails?.production_countries?.[0]?.name && (
          <InfoText
            label={
              movieDetails?.production_countries?.length > 1
                ? 'Countries:'
                : 'Country:'
            }
            text={getCountries()}
            icon={faFlag}
          />
        )}
        {getGenres().length > 0 && (
          <InfoText
            label={movieDetails?.genres?.length > 1 ? 'Genres:' : 'Genre:'}
            text={getGenres()}
            icon={faFileVideo}
          />
        )}
        {movieDetails?.budget !== 0 && (
          <InfoText
            label="Budget:"
            text={movieDetails?.budget}
            icon={faDollarSign}
          />
        )}
        <Rating rating={movieDetails?.vote_average} />
        <InfoText
          label={movieDetails?.overview ? 'Description:' : 'No description'}
          icon={faBookOpen}
        />
        <p className="info-text">{movieDetails?.overview}</p>
      </div>
      <div className="youtube-video">
        {videoKey && (
          <iframe
            title="youtube-video"
            src={`https://www.youtube.com/embed/${videoKey}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      {movieDetails?.imdb_id && (
        <a
          href={`https://www.imdb.com/title/${movieDetails?.imdb_id}`}
          className="imdb-link"
          target="_blank"
          rel="noreferrer noopener">
          Movie page on IMDb
        </a>
      )}
    </div>
  );
};

export default Details;
