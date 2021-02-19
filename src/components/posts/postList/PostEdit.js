import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

export default function PostEdit() {
  let {id} = useParams();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      });
  }, [id]);

  return (
    <div>
      Post Edit {id}
    </div>
  )
}
