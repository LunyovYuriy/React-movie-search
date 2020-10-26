import { SET_GENERAL_VALUE } from '../constants/actionTypes';

function initialState() {
  return {
    query: '',
    isLoading: false,
    searchResult: [],
    totalPages: 0,
    pageNumber: 0,
    error: '',
    movieDetails: {},
    popularMovies: [],
    videoKey: '',
  };
}

export default function general(state = initialState(), action) {
  switch (action.type) {
    case SET_GENERAL_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
