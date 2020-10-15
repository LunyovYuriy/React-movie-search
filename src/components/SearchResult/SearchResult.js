import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import ItemInfo from './components/ItemInfo';
import ItemPoster from './components/ItemPoster';

const SearchResult = () => {
  const { searchResult, error, isLoading } = useSelector(
    (state) => state.general,
    shallowEqual,
  );

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
          release_date: releaseDate,
          vote_average: voteAverage,
          overview,
        } = res;
        return (
          <div key={id} className="search-item">
            <ItemPoster id={id} poster={poster} />
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
