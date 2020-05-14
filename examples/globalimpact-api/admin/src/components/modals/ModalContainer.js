import React  from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import NewChallengeModal from '../modals/NewChallengeModal';
import NewChallengeLevelModal from '../modals/NewChallengeLevelModal';

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
      <NewChallengeModal open={modals.newChallenge.visible} onClose={() => handleModalClose('newChallenge')} />
      <NewChallengeLevelModal challengeId={modals.newChallengeLevel.data.challengeId} open={modals.newChallengeLevel.visible} onClose={() => handleModalClose('newChallengeLevel')} />
    </Box>
    );
}

export default connect(mapStateToProps)(ModalContainer);
