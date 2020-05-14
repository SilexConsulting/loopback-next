import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import {SdgGoalData} from '../../Goals';

import { getChallenge } from '../../redux/reducers/challengeReducer';
import { createChallengeLevel } from '../../redux/reducers/challengeReducer';

import styles from '../../styles/globalStyles';

const NewChallengeLevelForm = ({challenge, dispatch }) => {
  const classes = styles();

  const [state, setState] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (event) => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createChallengeLevel({
      ...state,
      challengeId: challenge.id,
    })).then((response) => {
      dispatch(getChallenge({
        id: challenge.id
      }))
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        margin="dense"
        name="name"
        type="text"
        value={state.name}
        onChange={handleInputChange}
        fullWidth
        required
      />  
      <TextField
        label="Description"
        margin="dense"
        name="description"
        multiline={true}
        rows={3}
        type="text"
        value={state.description}
        onChange={handleInputChange}
        fullWidth
        required
      /> 
      <Box py={3}>
        <Button type="submit" variant="contained" color="primary">
          Create Challenge Level
        </Button>
      </Box>
    </form>
  );
}

export default connect(null)(NewChallengeLevelForm);
