import React from 'react'
import Post from './Post'

export default function PostList(props) {
  console.log(this)
  console.log(props.title)
  console.log(props.title)
  
  return (
    <div className='container d-flex flex-wrap mt-4'>
      <h2 className='text-center display-4 w-100'>{props.title}</h2>
      {props.postList.map(post=><Post key={post.id} {...post} />)}
    </div>
  )
}
