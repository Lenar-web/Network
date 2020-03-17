import React from 'react'
import CreatePostForm from './CreatePostForm/CreatePostForm'
import {AddNewPost} from "../../../redux/profile-reducer";


const CreatePost = (props) => {
  let addPost = (value) => {
    props.AddNewPost(value.newPostText)
  }
  return<div className="add-activity">																					
  <CreatePostForm onSubmit={addPost} />
</div>
}
export default CreatePost
