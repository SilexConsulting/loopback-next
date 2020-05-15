import React, { useEffect, useState }  from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { updateTask } from '../../redux/reducers/challengeReducer';
import { getChallenge } from '../../redux/reducers/challengeReducer';
import { createChallengeLevel } from '../../redux/reducers/challengeReducer';

function EditTaskModal({ onClose, open, task, challengeId, dispatch }) {

  console.log(task.description);

  const [description, setDescription] = useState(task.description);

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(updateTask({
      id: task.id,
      description: description,
    })).then((response) => {
      dispatch(getChallenge({
        id: challengeId
      }))
      .then((response) => {
        onClose()
      });
    });
  }

  useEffect(() => { 
    setDescription(task.description);
  }, [task]);

  return (
    <Dialog onClose={onClose} open={open}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Description"
            margin="dense"
            name="description"
            multiline={true}
            rows={2}
            type="text"
            value={description}
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
            Edit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
    );
}

export default connect(null)(EditTaskModal);
