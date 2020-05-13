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
import Avatar from '@material-ui/core/Avatar';


import styles from '../../styles/globalStyles';

import { uploadBadge } from '../../redux/reducers/challengeReducer';
import { createChallenge } from '../../redux/reducers/challengeReducer';
import { getChallenges } from '../../redux/reducers/challengeReducer';

function NewChallengeModal({ onClose, open, dispatch }) {
  const classes = styles();

  const [state, setState] = useState({
    name: '',
    shortDescription: '',
    description: '',
    badge: '',
    badgeFiles: null
  });

  const handleInputChange = (event) => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
  }

  const handleBadgeSelect = (event) => {
    let {files, value} = event.target;
    setState({
      ...state,
      badge: files[0].name, 
      badgeFiles: files 
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(state.badgeFiles);

    let badgeUploadResponse = await dispatch(uploadBadge({
      name: `badge_${state.name.replace(/\s/g, '')}.png`,
      files: state.badgeFiles,
    }))

    dispatch(createChallenge({
      name: state.name,
      shortDescription: state.shortDescription,
      description: state.description,
      archived: false,
      badge: badgeUploadResponse.files[0].fieldname,
    })).then((response) => {
      dispatch(getChallenges());
    }).then((response) => {
      onClose()
    });
   }

  return (
    <Dialog onClose={onClose} open={open}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Create Challenge</DialogTitle>
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
            label="Short Description"
            margin="dense"
            name="shortDescription"
            multiline={true}
            rows={3}
            type="text"
            value={state.shortDescription}
            onChange={handleInputChange}
            fullWidth
            required
          /> 
          <TextField
            label="Full Description"
            margin="dense"
            name="description"
            multiline={true}
            rows={8}
            type="text"
            value={state.description}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <Box py={3}>
            <Input
              id="badge-input"
              className={classes.hide}
              accept="image/*"
              name="badge"
              type="file"
              onChange={handleBadgeSelect}
            />
            <label htmlFor="badge-input">
              <Button
                component="span"
                variant="contained"
                color="primary"
                startIcon={<ImageIcon />}>
                Select Badge Image
              </Button>
              <Typography
                className={classes.spaceLeft}
                component="span"
                variant="body2"
                color="textPrimary">
                { state.badge }
              </Typography>
            </label>
          </Box>
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

export default connect(null)(NewChallengeModal);
