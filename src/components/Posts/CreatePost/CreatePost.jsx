import React from 'react'
import CreatePostForm from './CreatePostForm/CreatePostForm'


const CreatePost = (props) => {
  let addPost = (value) => {
    props.AddPost(value.newPostText)
  }
  return<div className="add-activity">																					
  <CreatePostForm onSubmit={addPost} />
</div>
}
export default CreatePost
