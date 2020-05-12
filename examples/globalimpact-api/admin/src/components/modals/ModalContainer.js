import React  from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import NewChallengeModal from '../modals/NewChallengeModal';

import {uiActions} from '../../redux/reducers/uiReducer';

function mapStateToProps(state) {
  return {
    modals: state.ui.modals
  }
}

function ModalContainer({ user, modals, dispatch }) {

  const handleModalClose = (modalName) => {
    dispatch(uiActions.closeModal({
      modal: modalName
    }))
  }

  return (
    <Box>
      <NewChallengeModal user={user} open={modals.newChallenge.visible} onClose={() => handleModalClose('newChallenge')} />
    </Box>
    );
}

export default connect(mapStateToProps)(ModalContainer);
