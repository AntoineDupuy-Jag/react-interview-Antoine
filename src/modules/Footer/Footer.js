import React from 'react';

import { Stack, Box, Typography, styled } from '@mui/material'
import { EmailRounded, PersonRounded, PhoneRounded } from '@mui/icons-material';
import { theme } from '../../theme';

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 50px",
  bottom: 0,
  height: "150px",
  [theme.breakpoints.down("md")]:{
    flexDirection: "column",
  }
}));

export const Footer = () => {
  return (
    <Stack sx={{ backgroundColor: theme.palette.secondary.main, marginTop: "60px" }}>
      <CustomBox>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PersonRounded sx={{ color: "white", marginRight: "20px" }} />
          <Typography variant="h5" color="white" fontWeight="400">Antoine DUPUY</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EmailRounded sx={{ color: "white", marginRight: "20px" }} />
          <Typography variant="h6" color="white" fontWeight="200">akabsn78@gmail.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneRounded sx={{ color: "white", marginRight: "20px" }} />
          <Typography variant="h6" color="white" fontWeight="200">06 76 35 06 41</Typography>
        </Box>
      </CustomBox>
    </Stack>
  )
};
