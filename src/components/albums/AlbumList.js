import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import Album from './Album';

export default function AlbumList() {
  const { blogState } = useContext(BlogContext);

  const albums = blogState.albums;

  return (
    <div className='container d-flex flex-wrap mt-4'>
      {albums.map((album) => (
        <Album key={album.id} {...album} />
      ))}
    </div>
  );
}
