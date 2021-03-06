import React from 'react';

import { Stack, Box, Typography, Button, styled } from '@mui/material';

import cv from '../../docs/CV.pdf';
import rapport from '../../docs/Rapport.pdf';

export const Header = () => {

  const Background = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    position: 'absolute',
    zIndex: -1,
    height: "250px",
    top: 0,
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    color: "white",
    border: "1px solid white",
    margin: "10px",
    textDecoration: "none",
    '&:hover': {
      backgroundColor: "white",
      color: theme.palette.primary.main,
    }
  }));

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box sx={{ margin: 5 }}>
          <Typography variant="h2" sx={{color: "white", fontWeight: "500"}}>Movie's Selection</Typography>
          <Typography variant="h5" sx={{color: "white", fontWeight: "200"}}>par Antoine Dupuy</Typography>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-between", margin: 5}}>
          <CustomButton variant="outlined" href={cv} download>Mon CV</CustomButton>
          <CustomButton variant="outlined" href={rapport} download>Rapport de stage</CustomButton>
        </Box>
        <Background />
      </Stack>
    </Box>
  )
};
