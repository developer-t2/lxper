import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { DELETE_QUESTION_REQUEST } from '../redux/types';
import { history } from '../redux/store';

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
  };
});

const Question = ({ data }) => {
  const dispatch = useDispatch();
  const { id, number, direction, content, choices, answer } = data;

  const classes = useStyles();

  const onReplace = useCallback(
    (id) => () => {
      history.push(`/replace/${id}`);
    },
    []
  );

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
            <Tooltip title="수정하기" arrow>
              <IconButton onClick={onReplace(id)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="삭제하기" arrow>
              <IconButton onClick={onDelete(id)}>
                <Delete />
              </IconButton>
            </Tooltip>
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
                {index + 1}. {choice} (정답입니다.)
              </Typography>
            );
          }

          return (
            <Typography key={index} variant="subtitle2">
              {index + 1}. {choice}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default memo(Question);
