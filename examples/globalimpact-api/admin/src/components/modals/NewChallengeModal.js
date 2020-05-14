import React, { useState }  from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {SdgGoalData} from '../../Goals';

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
    sdgGoals: [],
    badgeFiles: null
  });

  const handleInputChange = (event) => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
  }

  const handleBadgeSelect = (event) => {
    let { files } = event.target;
    setState({
      ...state,
      badge: files[0].name, 
      badgeFiles: files 
    });
  }

  const handleGoalSelect = (event) => {
    let {name, checked} = event.target;
    if (checked) {
      const goal = [parseInt(name)];
      setState({
        ...state,
        sdgGoals: state.sdgGoals.concat(goal),
      })
    } else {
      const goals = state.sdgGoals.filter(goal => goal !== parseInt(name));
      setState({
        ...state,
        sdgGoals: goals,
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let badgeUploadResponse = await dispatch(uploadBadge({
      name: `badge_${state.name.replace(/\s/g, '')}.png`,
      files: state.badgeFiles,
    }))

    dispatch(createChallenge({
      name: state.name,
      shortDescription: state.shortDescription,
      description: state.description,
      archived: false,
      sdgGoals: state.sdgGoals,
      badge: badgeUploadResponse.payload.files[0].fieldname,
    })).then((response) => {
      dispatch(getChallenges());
    }).then((response) => {
      onClose()
    });
  }

  const renderGoals = () => {
    return SdgGoalData.map((goal) => {
      return (
        <Grid item xs={4}>
          <FormControlLabel
            className={classes.w100}
            control={<Checkbox color="primary" onChange={handleGoalSelect} name={goal.id} />}
            label={`${goal.id}. ${goal.name}`}
          />
        </Grid>)
    })
  }

  return (
    <Dialog onClose={onClose} open={open} maxWidth={'lg'}>
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
              required
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
          <Box py={3}>
            <Typography
              component="h3"
              variant="subheading"
              color="textPrimary">
              SDG Goals
            </Typography>

            <Grid container spacing={1}>
              {renderGoals()}
            </Grid>
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
