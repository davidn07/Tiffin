import { MOVIES, SET_MOVIES } from "../constants/index";

export const loadMovies = () => ({
  type: MOVIES,
});

export const setMovies = (data) => ({
  type: SET_MOVIES,
  data,
});
