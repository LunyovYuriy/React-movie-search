import { faFire } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SwiperCore, { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPopularMovies } from '../../actions/general';
import Loader from '../../components/Loader/Loader';
import MovieCard from '../../components/MovieCard/MovieCard';
import SectionTitle from './components/SectionTitle';

SwiperCore.use([Mousewheel]);

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);
  const { popularMovies, isLoading } = useSelector(
    (state) => state.general,
    shallowEqual,
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <SectionTitle title="Popular movies" icon={faFire} />
      <div className="popular-movies-container">
        <Swiper
          slidesPerColumnFill="row"
          slidesPerColumn={2}
          spaceBetween={5}
          mousewheel
          breakpoints={{
            768: {
              slidesPerColumn: 4,
            },
          }}>
          {popularMovies.map(
            ({ id, original_title: title, poster_path: poster }) => (
              <SwiperSlide key={id}>
                <MovieCard title={title} poster={poster} id={id} />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
