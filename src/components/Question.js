import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Delete, Edit, Star } from '@material-ui/icons';
import { DELETE_QUESTION_REQUEST } from '../redux/types';

const useStyles = makeStyles((theme) => {
  return {
    card: {
      marginBottom: theme.spacing(2),
    },
    header: {
      paddingBottom: theme.spacing(0),
    },
    content: {
      padding: theme.spacing(1, 3),
    },
    subtitle: {
      marginBottom: theme.spacing(1),
    },
    choice: {
      marginLeft: '20px',
    },
  };
});

const Question = ({ data }) => {
  const dispatch = useDispatch();
  const { id, number, direction, content, choices, answer } = data;

  const classes = useStyles();

  const onDelete = useCallback(
    (id) => () => {
      dispatch({
        type: DELETE_QUESTION_REQUEST,
        data: id,
      });
    },
    [dispatch]
  );

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        title={<Typography variant="caption">No. {number}</Typography>}
        subheader={<Typography variant="h6">{direction}</Typography>}
        action={
          <>
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton onClick={onDelete(id)}>
              <Delete />
            </IconButton>
          </>
        }
      />

      <CardContent className={classes.content}>
        <Typography className={classes.subtitle} variant="subtitle1">
          {content}
        </Typography>

        {choices.map((choice, index) => {
          if (answer === index) {
            return (
              <Typography key={index} variant="subtitle2">
                <Star fontSize="small" color="secondary" />
                {index + 1}. {choice}
              </Typography>
            );
          }

          return (
            <Typography key={index} className={classes.choice} variant="subtitle2">
              {index + 1}. {choice}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default memo(Question);
