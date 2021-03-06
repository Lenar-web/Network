import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux'
import {AddNewPost} from '../../../redux/profile-reducer'
import CreatePost from './CreatePost';

const CreatePostContainer = (props) => {
  return <CreatePost {...props} />
}

let mapStateToProps = (state) => {
  return {
  }
}

export default compose(
  connect(mapStateToProps, {AddNewPost})
)(CreatePostContainer);
