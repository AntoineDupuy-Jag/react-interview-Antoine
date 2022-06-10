import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: null,
  },
  reducers: {
    setMoviesData: (state, action) => {
      state.movies = action.payload;
    },
    editLike: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload[0]) {
          if (action.payload[1] === "add") {
            return {
              ...movie,
              likes: movie.likes + 1
            };
          } else {
            return {
              ...movie,
              likes: movie.likes - 1
            };
          }
        } else {
          return movie;
        }
      })
    },
    editDislike: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload[0]) {
          if (action.payload[1] === "add") {
            return {
              ...movie,
              dislikes: movie.dislikes + 1
            };
          } else {
            return {
              ...movie,
              dislikes: movie.dislikes - 1
            };
          }
        } else {
          return movie;
        }
      })
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  }
});

export const { setMoviesData, editLike, editDislike, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;