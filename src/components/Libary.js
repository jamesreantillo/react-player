import React from 'react';
import LibrarySong from './LibrarySong';

const Libary = ({ songs }) => {
  return (
    <div className='libary'>
      <h2>Library</h2>
      <div className='library-songs'></div>
      {songs.map((song) => (
        <LibrarySong song={song} />
      ))}
    </div>
  );
};

export default Libary;
