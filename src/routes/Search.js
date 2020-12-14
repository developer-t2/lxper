import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Container, makeStyles } from '@material-ui/core';

import SearchQuestion from '../components/SearchQuestion';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(2, 0),
    },
  };
});

const Search = ({ match }) => {
  const { questions } = useSelector((state) => state.question);
  const question = questions.filter((question) => question.id === match.params.id)[0];

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md">
      <SearchQuestion data={question} />
    </Container>
  );
};

export default memo(Search);
