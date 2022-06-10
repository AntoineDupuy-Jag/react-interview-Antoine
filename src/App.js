import React from 'react';

import { Box } from '@mui/material';

import { Header } from './modules/Header/Header';
import { MovieCardsContainer } from './modules/MovieCards/MovieCardsContainer';
import { Footer } from './modules/Footer/Footer';

function App() {
  return (
    <Box >
      <Header />
      <MovieCardsContainer />
      <Footer />
    </Box>
  );
};

export default App;
