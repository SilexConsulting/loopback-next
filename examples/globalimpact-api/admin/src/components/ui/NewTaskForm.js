import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddIcon from '@material-ui/icons/Add';

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
      state.description = '';
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
          <Button disabled={!state.description.length} type="submit" size="small" color="primary">
            <AddIcon />
          </Button>
        </ListItemSecondaryAction>
      </form>
    </ListItem>
  );
}

export default connect(null)(NewTaskForm);
