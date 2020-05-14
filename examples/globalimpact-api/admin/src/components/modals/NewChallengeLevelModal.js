import React, { useState }  from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {SdgGoalData} from '../../Goals';

import styles from '../../styles/globalStyles';

import { getChallenge } from '../../redux/reducers/challengeReducer';
import { createChallengeLevel } from '../../redux/reducers/challengeReducer';

function NewChallengeLevelModal({ onClose, open, challengeId, dispatch }) {
  const classes = styles();

  const [state, setState] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (event) => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(createChallengeLevel({
      ...state,
      challengeId,
    })).then((response) => {
      dispatch(getChallenge({
        id: challengeId
      }))
      .then((response) => {
        onClose()
      });
    });
  }

  return (
    <Dialog onClose={onClose} open={open} maxWidth={'md'}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Create Challenge Level</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
    );
}

export default connect(null)(NewChallengeLevelModal);
