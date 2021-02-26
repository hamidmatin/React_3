import React , { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { loadAllComments } from '../../redux/actions'
import WithLoading from '../../HOC/withLoading/WithLoading'
import CommentList from './CommentList';

export default function Comments() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(loadAllComments())
    setIsLoading(false);
  }, [dispatch])
  const CommentListWithLoading = WithLoading(CommentList);
  return (
    <div>
      <CommentListWithLoading isLoading={isLoading} />
    </div>
  )
}
