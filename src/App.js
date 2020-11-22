import React, { useState, useRef } from 'react';
import './styles/app.scss';
import Library from './components/Libary';
import Player from './components/Player';
import Song from './components/Song';
import Nav from './components/Nav'
import chillHop from './data';


function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    songDuration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpdateHandler = (e) => {
    const songDuration = e.target.duration ? e.target.duration : 0;
    console.log('check', songDuration)
    const currentTime = e.target.currentTime;
    // const duration = {songDuration}
    const roundedCurrent = Math.round(currentTime)
    const roundedSongDuration = Math.round(songDuration) 
    const animation = Math.round((roundedCurrent/roundedSongDuration) * 100)
    console.log(animation)
    setSongInfo({ ...songInfo, currentTime, songDuration, animationPercentage:animation });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if (isPlaying) audioRef.current.play()
  }

  return (
    <div className='App'>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
        >
      </audio>
    </div>
  );
}

export default App;
