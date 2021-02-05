import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export default function PostForm(props) {
  const [post, setPost] = useState(
    {
      id: uuidv4(),
      userid: '',
      title: '',
      body: ''
    }
  );

  const useridChangeHandler = (e) =>{
    // console.log(e)
    post.userid = e.target.value;
    setPost({
      ...post,
      userid: e.target.value
    })

  }
  const titleChangeHandler = (e) =>{
    setPost({
      ...post,
      title: e.target.value
    })
  }
  const bodyChangeHandler = (e) =>{
    setPost({
      ...post,
      body: e.target.value
    })
  }

  const savePost = () =>{
    props.addNewPost(post);
    setPost({
      id: uuidv4(),
      userid: '',
      title: '',
      body: ''
    })
  }
  return (
    <div className='card w-75 mx-auto'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Id:</label>
                <input
                  type='text'
                  className='form-control'
                  value={post.id}
                  readOnly
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>User Id:</label>
                <input
                  type='text'
                  className='form-control'
                  onChange={useridChangeHandler}
                  value={post.userid}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Title:</label>
                <input
                  className='form-control'
                  onChange={titleChangeHandler}
                  value={post.title}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <label>Body:</label>
                <input
                  type='email'
                  className='form-control'
                  onChange={bodyChangeHandler}
                  value={post.body}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <button className='btn btn-outline-success' onClick={savePost}>
            Save
          </button>
        </div>
      </div>
  )
}
