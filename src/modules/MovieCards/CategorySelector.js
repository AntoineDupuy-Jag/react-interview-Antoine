import React from 'react';

import Select from 'react-select';
import { Box } from '@mui/material';

import { theme } from '../../theme';

export const CategorySelector = ({categories, setSelectedCategories}) => {
   
  return (
    <Box
      sx={{
        width: "500px",
        [theme.breakpoints.down("sm")]: {
          width: "250px",
        }
      }}
    >
      <Select
        isMulti
        placeholder={"Catégories"}
        onChange={(item) => setSelectedCategories(item)}
        options={categories}
        closeMenuOnSelect={false} />
    </Box>
  )
};
