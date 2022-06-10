import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

export const AppPagination = ({setMovies, pageSize}) => {

  const moviesData = useSelector((state) => state.movies.movies);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
  });

  const service = {

    getData: ({ from, to }) => {
      const data = moviesData.slice(from, to);
      return new Promise((resolve, reject) => {
        resolve({
          count: moviesData.length,
          data: data
        });
      });
    }
  };

  useEffect(() => {
    service.getData({ from: pagination.from, to: pagination.to }).then((response => {
      setPagination({ ...pagination, count: response.count });
      setMovies(response.data);
    }))
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({...pagination, from: from, to: to})
  };

  return (
    <Pagination
      count={Math.ceil(pagination.count / pageSize)}
      onChange={(e) => console.log("e =>", e)}
    />
  )
};
