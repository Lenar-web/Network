import React from 'react'
import { Field, reduxForm} from 'redux-form';

const CreatePostForm = (props) => {
debugger
  return <form onSubmit={props.handleSubmit}>
      <div className="activity-group">																					
    <div className="maine-activity-img">																					
      <img src="https://forum.mikrotik.com/styles/canvas/theme/images/no_avatar.jpg" alt=""/>
    </div>
    <Field name="newPostText" className="add-activity-des" placeholder="What is new, John Doe?" component={'textarea'}/>
  </div>
  <div className="activity-button">
    <button className="act-btn-post" type="submit">Upload Activity</button>
  </div>
  </form>
}
 
export default reduxForm({form: 'post'})(CreatePostForm)