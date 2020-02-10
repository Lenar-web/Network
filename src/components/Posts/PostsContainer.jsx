import React from 'react';
import Posts from './Posts';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getPost} from '../../redux/prifile-selector';

const PostsContainer = (props) => {
  return <Posts {...props}/>
}
let mapStateToProps = (state) => {
  return {
    posts: getPost(state), 
  }
}

export default compose(
  connect(mapStateToProps, )
)(PostsContainer);