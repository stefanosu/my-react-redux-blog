import React from 'react';
import agent from '..//../agent';
import { connect } from 'react-redux'; 


const mapDispatchToProps = dispatch => ({
  onClick: (payload, commentId) => 
    dispatch({ type: 'DELETE_COMMENT', payload, commentId })
})

