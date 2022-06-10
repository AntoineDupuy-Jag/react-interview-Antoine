import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from '../feature/movies.slice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
  }
});