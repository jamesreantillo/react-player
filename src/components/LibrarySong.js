import React from 'react';
import playAudio from '../util'

const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, id, setSongs }) => {
  
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0])

    const newSongs = songs.map((song) => {
      if(song.id === id) {
        return {
          ...song,
          active: true
        }
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs)
    playAudio(isPlaying, audioRef)
    
  }

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt={song.name} />
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
