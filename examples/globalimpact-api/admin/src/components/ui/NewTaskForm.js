import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddIcon from '@material-ui/icons/Add';

import {SdgGoalData} from '../../Goals';

import { getChallenge } from '../../redux/reducers/challengeReducer';
import { createTask } from '../../redux/reducers/challengeReducer';

import styles from '../../styles/globalStyles';

const NewTaskForm = ({challengeLevel, challengeId, dispatch }) => {
  const classes = styles();

  const [state, setState] = useState({
    description: '',
    challengeLevelId: challengeLevel.id,
  });

  const handleInputChange = (event) => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createTask({
      ...state
    })).then((response) => {
      dispatch(getChallenge({
        id: challengeId
      }))
    });
  }

  return (
    <ListItem>
      <form onSubmit={handleSubmit} className={classes.w100}>
        <TextField
          label="Name"
          margin="dense"
          name="description"
          type="text"
          value={state.description}
          onChange={handleInputChange}
          fullWidth
        />
        <ListItemSecondaryAction>
          <Button type="submit" size="small" color="primary">
            <AddIcon />
          </Button>
        </ListItemSecondaryAction>
      </form>
    </ListItem>
  );
}

export default connect(null)(NewTaskForm);
