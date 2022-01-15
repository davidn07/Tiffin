import { MOVIES, SET_MOVIES } from "../constants/index";

const initialState = {
  moviesList: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        moviesList: action.data,
      };
    default:
      return state;
  }
};

export default movieReducer;
