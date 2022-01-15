import { takeEvery, put } from "redux-saga/effects";

import { MOVIES, SET_MOVIES } from "../constants/index";
import axios from "axios";
import { setMovies } from "../actions/index";

function* fetchMovies() {
  try {
    const res = yield axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=7a58a7727b2d9a6ae409d73d26d0b434"
    );
    yield put(setMovies(res.data.results));
  } catch (error) {}
}

function* rootSaga() {
  yield takeEvery(MOVIES, fetchMovies);
}

export default rootSaga;
