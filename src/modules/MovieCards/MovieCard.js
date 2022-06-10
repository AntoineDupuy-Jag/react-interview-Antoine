import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { ThumbDownOutlined, ThumbDownRounded, ThumbUpOutlined, ThumbUpRounded, Delete  } from '@mui/icons-material';
import {
  styled,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

import { movies$ } from '../../movies';
import { deleteMovie, editLike, editDislike } from '../../feature/movies.slice';

// CUSTOM MATERIAL-UI and RESPONSIVE COMPONENTS
const CustomCard = styled(Card)(({ theme }) => ({
  border: "1px solid #ff5047",
  color: theme.palette.secondary.main,
  borderRadius: "20px",
  width: 400,
  height: 200,
  margin: 3,
  [theme.breakpoints.down("sm")]:{
    width: 300,
  }
}));

const CustomAction = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]:{
    height: "30px",
  }
}));

const CustomActionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  [theme.breakpoints.down("sm")]:{
    flexDirection: "column",
  }
}));

export const MovieCard = ({movie}) => {

  const dispatch = useDispatch();
  const [isLikeChecked, setIsLikeChecked] = useState(false);
  const [isDislikeChecked, setIsDislikeChecked] = useState(false);
  
  const handleDelete = (id) => {
    if (movies$.then((response) => response.find(r => r.id === id))) {
      dispatch(deleteMovie(id));
    } else {
      console.log("Error, this file couldn't be found");
    }
  };

  const toggleLike = (id) => {
    if (movies$.then((response) => response.find(r => r.id === id)) && !isLikeChecked ) {
      dispatch(editLike([id, "add"]));
    } else {
      dispatch(editLike([id, "remove"]))
    }
  };

  const toggleDislike = (id) => {
    if (movies$.then((response) => response.find(r => r.id === id)) && !isDislikeChecked ) {
      dispatch(editDislike([id, "add"]));
    } else {
      dispatch(editDislike([id, "remove"]))
    }
  };

  return (
    <CustomCard>
      <CardHeader
        title={movie.title}
        subheader={movie.category}
        action={
          <IconButton aria-label="delete">
            <Delete onClick={() => handleDelete(movie.id)} />
          </IconButton>
        }
      />
      <CardContent>     
        <CardActions disableSpacing>
          <CustomActionContainer>
            <CustomAction>
              <IconButton aria-label="like">
                <Checkbox
                  icon={<ThumbUpOutlined />}
                  checkedIcon={<ThumbUpRounded />}
                  disabled={isDislikeChecked}
                  onClick={() => {
                    if (!isDislikeChecked)
                      toggleLike(movie.id);
                    isLikeChecked ? setIsLikeChecked(false) : setIsLikeChecked(true);
                  }}
                />
              </IconButton>
              <Typography>{movie.likes} J'aime</Typography>
            </CustomAction>
            <CustomAction>
            <IconButton aria-label="dislike">
              <Checkbox
                icon={<ThumbDownOutlined />}
                checkedIcon={<ThumbDownRounded />}
                disabled={isLikeChecked}
                onClick={() => {
                  if (!isLikeChecked)
                    toggleDislike(movie.id);
                  isDislikeChecked ? setIsDislikeChecked(false) : setIsDislikeChecked(true);
                }}
              />
            </IconButton>
            <Typography>{movie.dislikes} Je n'aime pas</Typography>
            </CustomAction>
          </CustomActionContainer>
        </CardActions>
      </CardContent>
    </CustomCard>
  )
};
