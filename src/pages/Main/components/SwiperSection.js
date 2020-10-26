import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../../../components/MovieCard/MovieCard';
import SectionTitle from './SectionTitle';

const SwiperSection = ({ sectionTitle, sectionIcon, data }) => {
  return (
    <>
      <SectionTitle title={sectionTitle} icon={sectionIcon} />
      <div className="section-container">
        <Swiper
          slidesPerColumnFill="row"
          slidesPerColumn={4}
          spaceBetween={5}
          breakpoints={{
            768: {
              slidesPerColumn: 4,
            },
          }}>
          {data.map(({ id, original_title: title, poster_path: poster }) => (
            <SwiperSlide key={id}>
              <MovieCard title={title} poster={poster} id={id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

SwiperSection.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionIcon: PropTypes.shape({}).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default SwiperSection;
