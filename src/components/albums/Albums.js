import React, {useState, useEffect, useContext} from 'react'

import { loadAllAlbums } from '../../context/actions';
// import { BlogContext } from '../../context/BlogContext';
import { useBlogContext } from '../../context/BlogContext'
import WithLoading from '../../HOC/withLoading/WithLoading'
import AlbumList from './AlbumList';

export default function Albums() {
  const AlbumListWithLoading = WithLoading(AlbumList);

  const [isLoading, setIsLoading] = useState(true);
  // const { dispatch } = useContext(BlogContext);

  const {dispatch} = useBlogContext();

  useEffect(() => {
    dispatch(loadAllAlbums())
    console.log(test)
    // useBlog.dispatch(loadAllAlbums());

    setIsLoading(false);
  }, [dispatch])

  return (
    <div>
      <AlbumListWithLoading isLoading={isLoading} />
    </div>
  )
}
