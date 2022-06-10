import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Stack, Box, Grid, CircularProgress, Container } from "@mui/material";

import { CategorySelector } from './CategorySelector';
import { MovieCard } from './MovieCard';
import { movies$ } from '../../movies';
import { setMoviesData } from '../../feature/movies.slice';
import { AppPagination } from '../Pagination/AppPagination';

export const MovieCardsContainer = () => {

  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.movies);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPagination, setIsLoadingPagination] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [movies, setMovies] = useState([]);
  const [pageSize, setPageSize] = useState(4);

  // Get categories for select options
  const categories = moviesData?.map(movie => movie.category);
  const uniqueCategories = [...new Set(categories)].map(u => u = new CategoryOption(u, u));

  // Constructor for select options
  function CategoryOption(value, label) {
    this.value = value;
    this.label = label;
  };

  // Get and set up data
  useEffect(() => {
    movies$.then((response) => {
      dispatch(setMoviesData(response));
      setIsLoading(false);
    })
  }, [dispatch]);
  
  const moviesFiltered = !isLoading && selectedCategories.length > 0 ? (
    moviesData.filter(movie => selectedCategories.find((c) => c.value === movie.category))
  ) : (
    moviesData
  );
  
  return (
    <Box sx={{ minHeight: "calc(100vh - 394px)" }}>
      {!isLoading ? (
        <>
          <Stack direction="row" margin="100px 0px 20px 30px">
            <CategorySelector categories={uniqueCategories} setSelectedCategories={setSelectedCategories} />
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <AppPagination
              setMovies={(m) => {
                setMovies(m);
                setIsLoadingPagination(false);
              }}
              pageSize={pageSize}
            />
          </Box>
          <Box sx={{ padding: 3, display: "flex", justifyContent: "center" }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {!isLoading ? (moviesFiltered.map(movie => (
                <Grid item>
                  <MovieCard movie={movie} />
                </Grid>
              ))) : (
                <CircularProgress />
              )}
            </Grid>
          </Box>
        </>
      ) : (
        <Container maxWidth sx={{ display: "flex", justifyContent: "space-around" }}>
          <CircularProgress sx={{ marginTop: 20 }} />
        </Container>
      )}
    </Box>
  )
};
