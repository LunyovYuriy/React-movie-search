import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from '../../../../components/Loader/Loader';
import Pagination from '../../../../components/Pagination/Pagination';
import ItemInfo from './components/ItemInfo';
import ItemPoster from './components/ItemPoster';

const SearchResult = () => {
  const { searchResult, error, isLoading, query } = useSelector(
    (state) => state.general,
    shallowEqual,
  );
  const history = useHistory();
  useEffect(() => {
    if (!query) {
      history.push('/');
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  return error ? (
    <p className="error">{error}</p>
  ) : (
    <>
      {searchResult?.map((res) => {
        const {
          id,
          title,
          poster_path: poster,
          backdrop_path: backdrop,
          release_date: releaseDate,
          vote_average: voteAverage,
          overview,
        } = res;
        return (
          <div key={id} className="search-item">
            <ItemPoster id={id} poster={poster || backdrop} />
            <ItemInfo
              id={id}
              title={title}
              releaseDate={releaseDate}
              voteAverage={voteAverage}
              overview={overview}
            />
          </div>
        );
      })}
      <Pagination />
    </>
  );
};

export default SearchResult;
