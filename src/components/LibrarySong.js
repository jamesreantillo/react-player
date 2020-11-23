import React from 'react';
import {playAudio} from '../util'


const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, id, setSongs }) => {
  
  // const songSelectHandler = async () => {
  //   const selectedSong = songs.filter((state) => state.id === id);
  //   console.log('check', selectedSong)
  //   await setCurrentSong({...selectedSong[0]})
  //   console.log('check', setCurrentSong)

  //   const newSongs = songs.map((song) => {
  //     if(song.id === id) {
  //       return {
  //         ...song,
  //         active: true
  //       }
  //     } else {
  //       return {
  //         ...song,
  //         active: false,
  //       };
  //     }
  //   });
  //   console.log('check', newSongs)
  //    const check = setSongs(newSongs)
  //    console.log(check)
  //   if (isPlaying) audioRef.current.play();
    
  // }

  const songSelectHandler =  () => {
    const selectedSong = songs.filter((state) => state.id === id);
     setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    //Play audio
    playAudio(isPlaying, audioRef)
  };

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
