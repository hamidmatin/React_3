import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Comment from './Comment';


export default function CommentList() {
  const comments = useSelector(state => state.comments)

  return (
    <div className='container d-flex flex-wrap mt-4'>
        {comments.map((comment) => <Comment key={comment.id} {...comment}/>)}
    </div>
  )
}
