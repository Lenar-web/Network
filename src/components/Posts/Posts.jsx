import React from 'react';
import Post from './Post/Post';
import CreatePostConatiner from './CreatePost/CreatePostConatiner';

const Posts = ({posts}) => {


  let postItem = posts.map(p => <Post key={p.id} id={p.id} text={p.text} author={p.author} like={p.like}/>)
  return(
    <div className="col-lg-12 col-md-12">	
    <div className="main-posts">											
      <CreatePostConatiner />
      {postItem}
     
    </div>
  </div>
  )
}

export default Posts