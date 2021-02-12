import React, { useState, useEffect } from 'react';
import PostForm from './postList/PostForm';
import PostList from './postList/PostList';
import WithLoading from '../../HOC/withLoading/WithLoading'


export default function Posts() {
  const [title, setTitle] = useState('My Title');
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const PostsWithLoading = WithLoading(PostList);

  useEffect(() => {
    // if(isLoading){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostList(data)
        setIsLoading(false);
      });
    // }
  }, []);

  const addNewPostHandler = (post) => {
    setIsLoading(true);
    setPostList([...postList, post]);
    setTimeout(()=>{
      setIsLoading(false);
    }, 400)
  };
  

  return (
    <div>
      <PostForm addNewPost={addNewPostHandler} />
      <PostsWithLoading isLoading={isLoading} title={title} postList={postList} />
    </div>
  );
}
