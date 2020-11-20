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
  });
  const [libraryStatus, setLibraryStatus] = useState(false)

  const timeUpdateHandler = (e) => {
    const songDuration = e.target.duration ? e.target.duration : 0;
    console.log('check', songDuration)
    const currentTime = e.target.currentTime;
    // const duration = {songDuration}
    setSongInfo({ ...songInfo, currentTime, songDuration });
  };

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
        >
      </audio>
    </div>
  );
}

export default App;
