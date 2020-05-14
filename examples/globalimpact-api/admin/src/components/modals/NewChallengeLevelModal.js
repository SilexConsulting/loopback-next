import React, { useState }  from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getChallenge } from '../../redux/reducers/challengeReducer';
import { createChallengeLevel } from '../../redux/reducers/challengeReducer';

function NewChallengeLevelModal({ onClose, open, challengeId, dispatch }) {

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
