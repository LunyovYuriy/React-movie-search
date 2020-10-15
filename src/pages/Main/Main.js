import React from 'react';
import Pagination from '../../components/Pagination/Pagination';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';

const Main = () => {
  return (
    <>
      <SearchForm />
      <Pagination />
      <SearchResult />
    </>
  );
};

export default Main;
