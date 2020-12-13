import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, makeStyles } from '@material-ui/core';

import { READ_QUESTIONS_REQUEST } from '../redux/types';
import Question from '../components/Question';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(2),
    },
  };
});

const Questions = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.question);

  const classes = useStyles();

  useEffect(() => {
    dispatch({
      type: READ_QUESTIONS_REQUEST,
    });
  }, [dispatch]);

  return (
    <Container className={classes.root} maxWidth="md">
      {questions.map((question) => (
        <Question key={question.id} data={question} />
      ))}
    </Container>
  );
};

export default memo(Questions);
