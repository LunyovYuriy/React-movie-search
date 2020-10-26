import {
  faFire,
  faPlayCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getMainPageData } from '../../actions/general';
import Loader from '../../components/Loader/Loader';
import SwiperSection from './components/SwiperSection';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMainPageData());
  }, [dispatch]);
  const {
    popularMovies,
    topRatedMovies,
    nowPlayingMovies,
    isLoading,
  } = useSelector((state) => state.general, shallowEqual);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <SwiperSection
        sectionTitle="Now playing"
        sectionIcon={faPlayCircle}
        data={nowPlayingMovies}
      />
      <SwiperSection
        sectionTitle="Popular movies"
        sectionIcon={faFire}
        data={popularMovies}
      />
      <SwiperSection
        sectionTitle="Top rated"
        sectionIcon={faStar}
        data={topRatedMovies}
      />
    </div>
  );
};

export default Main;
