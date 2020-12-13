import React, { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { history } from '../redux/store';

import { Button, IconButton, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import { AddBox, Delete } from '@material-ui/icons';
import { CREATE_QUESTION_REQUEST } from '../redux/types';

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      margin: theme.spacing(2),
      padding: theme.spacing(3),
    },
    line: {
      display: 'flex',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    number: {
      marginRight: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
    title: {
      flex: 1,
      marginBottom: theme.spacing(2),
    },
    multiText: {
      marginBottom: theme.spacing(2),
    },
    solution: {
      flex: 1,
    },
    iconButton: {
      marginLeft: theme.spacing(2),
      padding: theme.spacing(1),

      '&:hover': {
        background: 'rgba(0, 0, 0, 0)',
      },
    },
    paperBox: {
      marginBottom: theme.spacing(1),
    },
    checked: {
      marginBottom: theme.spacing(1),
      color: '#1976d2',
    },
    paperLine: {
      paddingLeft: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
    },
    paperText: {
      flex: 1,
    },
    paperTypo: {
      marginTop: theme.spacing(2),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginRight: theme.spacing(2),
    },
  };
});

const Create = ({ match }) => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.question);

  const [number, setNumber] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [solution, setSolution] = useState('');
  const [solutions, setSolutions] = useState([]);
  const [checked, setChecked] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const result = questions.filter((question) => question.id === match.params.id)[0];

    setNumber(result.number);
    setTitle(result.direction);
    setContent(result.content);
    setSolutions(result.choices);
    setChecked(result.answer);
  }, [questions, match.params.id]);

  const onChange = useCallback((e) => {
    setSolution(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      if (solution) {
        setSolution('');
        setSolutions((prev) => [...prev, solution]);
      }
    },
    [solution]
  );

  const onCheck = useCallback(
    (checkIndex) => () => {
      setChecked(checkIndex);
    },
    []
  );

  const onDelete = useCallback(
    (deleteIndex) => () => {
      const filteredSolution = solutions.filter((solution, index) => index !== deleteIndex);

      setSolutions(filteredSolution);
    },
    [solutions]
  );

  const onChangeNumber = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onChangeSolution = useCallback((e) => {
    setSolution(e.target.value);
  }, []);

  const onReset = useCallback(() => {
    setNumber('');
    setTitle('');
    setContent('');
    setSolution('');
    setSolutions([]);
    setChecked(-1);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch({
      type: CREATE_QUESTION_REQUEST,
      data: {
        id: uuidv4(),
        number: parseInt(number),
        direction: title,
        content,
        choices: solutions,
        answer: checked,
      },
    });

    history.push('/');
  }, [dispatch, number, title, content, solutions, checked]);

  return (
    <Paper className={classes.paper}>
      <div className={classes.line}>
        <TextField
          className={classes.number}
          label="문제 번호"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={number}
          onChange={onChangeNumber}
        />
        <TextField
          className={classes.title}
          label="문제 제목"
          InputLabelProps={{
            shrink: true,
          }}
          value={title}
          onChange={onChangeTitle}
        />
      </div>

      <TextField
        className={classes.multiText}
        label="문제 내용"
        fullWidth
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        value={content}
        onChange={onChangeContent}
      />

      <Paper className={classes.paper} variant="outlined">
        <Typography
          className={classes.typo}
          gutterBottom
          value={solution}
          onChange={onChangeSolution}
        >
          답안지
        </Typography>

        <div className={classes.line}>
          <TextField
            className={classes.solution}
            variant="outlined"
            size="small"
            onChange={onChange}
            value={solution}
          />

          <IconButton className={classes.iconButton} onClick={onClick}>
            <AddBox />
          </IconButton>
        </div>

        {solutions.map((solution, index) => (
          <Paper
            key={`${solution}-${index}`}
            className={checked === index ? classes.checked : classes.paperBox}
            variant="outlined"
            onClick={onCheck(index)}
          >
            <div className={classes.paperLine}>
              <Typography className={classes.paperText}>
                {index + 1}. {solution}
              </Typography>

              <IconButton className={classes.iconButton} onClick={onDelete(index)}>
                <Delete />
              </IconButton>
            </div>
          </Paper>
        ))}

        <Typography className={classes.paperTypo} color="secondary">
          등록하신 답안 중에서 반드시 하나를 선택해야 합니다(답안을 클릭해주세요).
        </Typography>
      </Paper>

      <div className={classes.buttons}>
        <Button className={classes.button} variant="contained" color="primary" onClick={onReset}>
          RESET
        </Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={onSubmit}>
          SUBMIT
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          CANCEL
        </Button>
      </div>
    </Paper>
  );
};

export default memo(Create);
